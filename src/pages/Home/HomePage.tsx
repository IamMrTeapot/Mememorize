import { useNavigate } from "react-router-dom";
import MainMeme from "../../assets/main-meme.svg";
import LoginButton from "../../components/LoginButton";
export default function HomePage() {
  const navigate = useNavigate();
  return (
    <main className="w-full bg-meme-yellow min-h-[100vh] flex justify-center">
      <div className="flex flex-wrap justify-evenly items-center">
        <img src={MainMeme} alt="Main Meme" className="w-[350px] mt-12" />
        <div className="flex flex-col my-10 mx-10 items-center">
          <h1 className="font-urbanist font-extrabold text-4xl m-6">
            MEMEMORIZE
          </h1>
          <p className="font-urbanist font-light text-base text-center leading-6 mb-5">
            เรียนคลาวมีแต่เรื่องซีเรียส
            <br />
            มานั่งดูมีมคลายเครียดดีกว่า
          </p>
          <LoginButton
            onClick={() => {
              navigate("/login");
            }}
            color="green"
          />
          <LoginButton
            onClick={() => {
              navigate("/register");
            }}
            color="white"
            isRegister={true}
          />
        </div>
      </div>
    </main>
  );
}
