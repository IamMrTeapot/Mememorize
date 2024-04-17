import { useState } from "react";
import UploadMeme from "./components/UploadMeme";
import SuccessfulUploaded from "./components/SuccessfulUploaded";
import NavBar from "../../components/NavBar";
export default function MoreMemesPage() {
  const [isUploaded, setIsUploaded] = useState(false);
  const username = "Mememorize";
  const userid = "1234455678";
  return (
    <main className="w-full bg-meme-yellow min-h-[100vh]">
      <div className="flex flex-col justify-center items-center space-y-4">
        <NavBar name={username} />
        {!isUploaded ? (
          <UploadMeme setIsUploaded={setIsUploaded} username={username} userid={userid}/>
        ) : (
          <SuccessfulUploaded />
        )}
      </div>
    </main>
  );
}
