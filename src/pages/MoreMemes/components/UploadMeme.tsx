import { IoIosArrowBack } from "react-icons/io";
import LoginButton from "../../../components/LoginButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { environment } from "../../../configs/environment";
export default function UploadMeme({
  setIsUploaded,
  username,
  email,
}: {
  setIsUploaded: (isUploaded: boolean) => void;
  username: string;
  email: string;
}) {
  const navigate = useNavigate();
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const uploadMeme = async () => {
    const formData = new FormData();
    formData.append("image", image as Blob);
    formData.append("description", description);
    formData.append("name", username);
    try {
      const response = await fetch(
        `${environment.backend.url}/upload/${email}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.status === 201) {
        setIsUploaded(true);
        fetch(`${environment.backend.url}/sns`, {
          method: "GET",
        });
      } else {
        alert("Failed to upload meme");
      }
    } catch (error) {
      alert("Failed to upload meme");
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <button
          className="bg-white border-[1px] border-[#E8ECF4] p-2 rounded-xl flex justify-items-start"
          onClick={() => {
            navigate("/memes");
          }}
        >
          <IoIosArrowBack size={20} />
        </button>
      </div>
      <div className="bg-[#D9D9D9]/50 h-80 w-80 rounded-2xl cursor-pointer">
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt={image.name}
            className="absolute h-80 w-80 rounded-2xl object-cover"
          />
        ) : (
          <p className="h-36 w-80 absolute font-urbanist text-lg text-black/50 text-center translate-y-full">
            อัพโหลดรูปที่นี่
          </p>
        )}
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          className="opacity-0 h-80 w-80"
          onChange={handleImageUpload}
        />
      </div>
      {image && (
        <p className="font-urbanist text-sm text-black/50 -translate-y-3 overflow-hidden">
          {image.name}
        </p>
      )}
      <input
        type="text"
        placeholder="Add a description..."
        className="bg-[#D9D9D9] py-2 px-4 rounded-full w-full focus:outline-none focus:ring-1 focus:ring-black/50 font-urbanist text-black/80 placeholder:text-black/50"
        onChange={(e) => setDescription(e.target.value)}
      />
      <LoginButton
        onClick={() => {
          uploadMeme();
        }}
        color="green"
        isUpload={true}
      />
    </div>
  );
}
