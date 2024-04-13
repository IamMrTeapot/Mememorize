import { useState } from "react";
import LoginButton from "../../components/LoginButton";
import Redirect from "../../routes/Redirect";
import { Auth } from "aws-amplify";

export default function LoginPage({
  updateAuthStatus,
}: {
  updateAuthStatus: (authStatus: boolean) => void;
}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [random] = useState<number>(Math.floor(Math.random() * 3));
  const colors = ["green", "yellow", "red"];

  const handleGuess = () => {
    alert(`The correct button is ${colors[random]}`);
  };

  const handleLogin = (index: number) => async () => {
    if (index === random) {
      try {
        const signInOutput = await Auth.signIn(email, password);
        console.log(signInOutput);
      } catch (error) {
        console.log(error);
      }
      alert("Login Success");
      updateAuthStatus(true);
    } else {
      alert("ว้ายยยย");
    }
  };

  return (
    <main className="w-full bg-meme-yellow min-h-[100vh] ">
      <div className="flex flex-wrap justify-evenly items-center">
        <div className="flex flex-col my-10 mx-10">
          <div className="flex flex-row justify-center items-center my-2">
            <button
              onClick={() => Redirect({ to: "/" })}
              className="font-semibold bg-white border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100"
            >
              &lt;
            </button>
            <p>login</p>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="font-urbanist font-medium my-2"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="font-urbanist font-medium my-2"
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
          <div className="flex flex-row justify-end">
            ลองเดาดูสิ ควรจะกดปุ่มไหน?{" "}
            <div
              onClick={() => handleGuess()}
              className="text-answer-blue hover:cursor-pointer"
            >
              หรือจะยอมแพ้ขอดูเฉลยก็กดมา
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
