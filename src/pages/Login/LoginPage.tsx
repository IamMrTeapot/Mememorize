import { useState } from "react";
import LoginButton from "../../components/LoginButton";
import Redirect from "../../routes/Redirect";
import { signIn } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage({
  updateAuthStatus,
}: {
  updateAuthStatus: (authStatus: boolean) => void;
}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [random] = useState<number>(Math.floor(Math.random() * 3));
  const colors = ["green", "yellow", "red"];

  const navigate = useNavigate();

  const handleGuess = () => {
    alert(`The correct button is ${colors[random]}`);
  };

  const handleLogin = (index: number) => async () => {
    if (index === random) {
      try {
        const signInOutput = await signIn({
          username: email,
          password: password,
        });
        console.log(signInOutput);
        updateAuthStatus(signInOutput.isSignedIn);
        alert(
          signInOutput.isSignedIn ? "เข้าสู่ระบบสำเร็จ" : "เข้าสู่ระบบไม่สำเร็จ"
        );
        if (signInOutput.isSignedIn) {
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
      }
      updateAuthStatus(true);
    } else {
      alert("ว้ายยยย ลองกดอันอื่นดูน้าาาา");
    }
  };

  return (
    <main className="w-full bg-meme-yellow min-h-[100vh] ">
      <div className="flex flex-wrap justify-evenly items-center">
        <div className="flex flex-col my-10 mx-4">
          <div className="flex flex-row justify-start items-center mb-10">
            <button
              onClick={() => Redirect({ to: "/" })}
              className="font-semibold bg-white border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100"
            >
              &lt;
            </button>
            <div className="flex-grow"></div>
            <p className="font-urbanist font-bold text-xl">LOG IN</p>
            <div className="flex-grow"></div>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="font-urbanist font-medium my-2 rounded-lg p-3"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="font-urbanist font-medium my-2 rounded-lg p-3 mb-10"
            required
          />
          {colors.map((color, index) => (
            <LoginButton
              key={color}
              onClick={handleLogin(index)}
              color={color as "green" | "yellow" | "red" | "white"}
              isRegister={false}
            />
          ))}
          <div className="flex flex-row justify-end mt-10">
            <p className="text-xs">ลองเดาดูสิ ควรจะกดปุ่มไหน? </p>
            <div
              onClick={() => handleGuess()}
              className="text-answer-blue hover:cursor-pointer text-xs "
            >
              หรือจะยอมแพ้ขอดูเฉลยก็กดมา
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
