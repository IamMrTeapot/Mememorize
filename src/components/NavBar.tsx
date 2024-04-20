import { CiLogout } from "react-icons/ci";
import { FaRegSquarePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";

export default function NavBar({ name }: { name: string }) {
  const navigate = useNavigate();

  const handleAddMoreMemes = () => {
    navigate("/more-memes");
  };

  const handleLogout = () => {
    signOut();
    navigate("/home");
  };

  return (
    <nav className="bg-meme-header w-[90%] mt-4 px-4 py-1 rounded-full border-2 border-[#D9D9D9] flex justify-between">
      <div>
        <p className="font-bold text-xl">{name}</p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div onClick={handleAddMoreMemes} className="cursor-pointer">
          <FaRegSquarePlus />
        </div>
        <div onClick={handleLogout} className="cursor-pointer">
          <CiLogout />
        </div>
      </div>
    </nav>
  );
}
