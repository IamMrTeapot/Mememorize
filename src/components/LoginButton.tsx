interface LoginButtonProps {
  onClick: () => void;
  color: "green" | "yellow" | "red" | "white";
  isRegister?: boolean;
  isUpload?: boolean;
}

export default function LoginButton({
  onClick,
  color,
  isRegister,
  isUpload
}: LoginButtonProps) {
  const bgColor =
    color === "green"
      ? "bg-[#0EAA1D]"
      : color === "yellow"
        ? "bg-[#E3E800]"
        : color === "red"
          ? "bg-[#AA0E0E]"
          : "bg-[#FFFFFF]";
  return (
    <button
      className={`${bgColor} text-sm ${color === "white" ? "text-black border-[1px] border-black" : "text-white"} font-urbanist font-medium mx-6 my-2 p-3 rounded-lg hover:scale-[102%] hover:shadow-md duration-300 ease-in-out`}
      onClick={onClick}
    >
      {isRegister ? "Register" : isUpload ? "Upload" :"Login"}
    </button>
  );
}
