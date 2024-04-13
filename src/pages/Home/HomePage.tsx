import MainMeme from "../../assets/main-meme.svg";
import LoginButton from "../../components/LoginButton";
export default function HomePage() {
  return (
    <div className="bg-[#EEE50B]/[0.25] flex flex-wrap justify-evenly items-center">
      <img src={MainMeme} alt="Main Meme" className="" />
      <div className="flex flex-col">
        <h1 className="font-urbanist font-extrabold text-4xl m-6">
          MEMEMORIZE
        </h1>
        <p className="font-urbanist font-light text-base text-center leading-6">
          เรียนคลาวมีแต่เรื่องซีเรียส
          <br />
          มานั่งดูมีมคลายเครียดดีกว่า
        </p>
        {/* <LoginButton onClick={}/> */}
      </div>
    </div>
  );
}
