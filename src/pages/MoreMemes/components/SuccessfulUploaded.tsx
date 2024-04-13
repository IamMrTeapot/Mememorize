import { useNavigate } from "react-router-dom";
import SuccessMark from "../../../assets/successmark.svg";
import LoginButton from "../../../components/LoginButton";
export default function SuccessfulUploaded() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full justify">
      <img src={SuccessMark} alt="success mark" className="w-24 h-24 mt-24" />
      <h1 className="font-urbanist font-bold text-2xl text-black text-center mt-6">
        อัพโหลดเสร็จสิ้น
      </h1>
      <p className="font-urbanist font-normal text-sm text-[#8391A1] text-center mt-2 mb-5">
        ละทิ้งคลาว แล้วมาดูความกาวกันเถอะ
      </p>
      <LoginButton
        onClick={() => {
          navigate("/memes");
        }}
        color="white"
        isBack={true}
      />
    </div>
  );
}
