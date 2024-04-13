import { useEffect, useState } from "react";
import UploadMeme from "./components/UploadMeme";
import SuccessfulUploaded from "./components/SuccessfulUploaded";
import NavBar from "../../components/NavBar";
import { fetchUserAttributes } from "aws-amplify/auth";
export default function MoreMemesPage() {
  const [isUploaded, setIsUploaded] = useState(true);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const userAttributes = await fetchUserAttributes();
        setUsername(userAttributes.nickname ?? "");
        console.log(userAttributes);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  return (
    <main className="w-full bg-meme-yellow min-h-[100vh]">
      <div className="flex flex-col justify-center items-center space-y-4">
        <NavBar name={username} />
        {!isUploaded ? (
          <UploadMeme setIsUploaded={setIsUploaded} />
        ) : (
          <SuccessfulUploaded />
        )}
      </div>
    </main>
  );
}
