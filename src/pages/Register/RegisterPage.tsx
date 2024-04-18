import { useState, useEffect } from "react";
import LoginButton from "../../components/LoginButton";
import Redirect from "../../routes/Redirect";
import { Wheel } from "react-custom-roulette";
import { environment } from "../../configs/environment";

export default function RegisterPage() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [mustSpin, setMustSpin] = useState(false);

  const handleSpin = () => {
    const randomNum = Math.floor(Math.random() * 10);
    setSelectedNumber(randomNum);
    setMustSpin(true);
  };

  const removeLastDigit = () => {
    setTel((prevTel) => prevTel.slice(0, -1));
  };

  const handleRegister = async () => {
    if (username === "" || email === "" || password === "" || tel === "") {
      alert("กรอกข้อมูลไม่ครบ");
    } else {
      alert("ลงทะเบียนสำเร็จ");
      const response = await fetch(`${environment.backend.url}/sns`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      if (response.status === 200) {
        console.log("subcribe sns success");
      } else {
        console.log("subcribe sns failed");
      }
    }
  };

  useEffect(() => {
    if (!mustSpin) {
      if (tel === "") {
        setTel(selectedNumber.toString());
      } else {
        setTel((prevTel) => prevTel + selectedNumber.toString());
      }
    }
  }, [mustSpin]);

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
            <p className="font-urbanist font-bold text-xl">Register</p>
            <div className="flex-grow"></div>
          </div>
          <input
            type="username"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="font-urbanist font-medium my-2 rounded-lg p-3"
            required
          />
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
            className="font-urbanist font-medium my-2 rounded-lg p-3"
            required
          />
          <input
            type="tel"
            id="tel"
            name="tel"
            value={tel}
            placeholder="Telephone number"
            onChange={(e) => setPassword(e.target.value)}
            className="font-urbanist font-medium my-2 rounded-lg p-3"
            disabled
          />
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={selectedNumber}
            data={[
              {
                option: "0",
                style: { backgroundColor: "#f2f2f2", textColor: "#333" },
              },
              {
                option: "1",
                style: { backgroundColor: "#e5e5e5", textColor: "#333" },
              },
              {
                option: "2",
                style: { backgroundColor: "#f2f2f2", textColor: "#333" },
              },
              {
                option: "3",
                style: { backgroundColor: "#e5e5e5", textColor: "#333" },
              },
              {
                option: "4",
                style: { backgroundColor: "#f2f2f2", textColor: "#333" },
              },
              {
                option: "5",
                style: { backgroundColor: "#e5e5e5", textColor: "#333" },
              },
              {
                option: "6",
                style: { backgroundColor: "#f2f2f2", textColor: "#333" },
              },
              {
                option: "7",
                style: { backgroundColor: "#e5e5e5", textColor: "#333" },
              },
              {
                option: "8",
                style: { backgroundColor: "#f2f2f2", textColor: "#333" },
              },
              {
                option: "9",
                style: { backgroundColor: "#e5e5e5", textColor: "#333" },
              },
            ]}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
            fontSize={18}
            textColors={["#333"]}
            innerBorderColor="#fff"
            outerBorderColor="#fff"
            perpendicularText={true}
            radiusLineColor="#fff"
            radiusLineWidth={2}
            spinDuration={0.1}
          />
          <button
            onClick={handleSpin}
            disabled={mustSpin}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Spin the Wheel for telephone number
          </button>
          <button
            onClick={removeLastDigit}
            disabled={mustSpin}
            className="bg-red-200 hover:bg-red-600 text-white font-bold py-2 px-4 rounded my-4"
          >
            Remove Last Digit
          </button>

          {username === "" ||
          email === "" ||
          password === "" ||
          tel.length < 10 ? (
            <p>ถ้าคุณกรอกอะไรไม่ครบ ปุ่มลงทะเบียนจะไม่ขึ้นมา อิอิ</p>
          ) : (
            <LoginButton
              key={"white"}
              onClick={handleRegister} // Removed parentheses here
              color={"white"}
              isRegister={true}
            />
          )}
        </div>
      </div>
    </main>
  );
}
