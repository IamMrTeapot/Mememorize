import { useEffect, useState } from "react";
import UploadMeme from "./components/UploadMeme";
import SuccessfulUploaded from "./components/SuccessfulUploaded";
import NavBar from "../../components/NavBar";
import { fetchUserAttributes } from "aws-amplify/auth";
export default function MoreMemesPage() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const userAttributes = await fetchUserAttributes();
        setUsername(userAttributes.nickname ?? "");
        setEmail(userAttributes.email ?? "");
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  const [isUploaded, setIsUploaded] = useState(false);
  return (
    <main className="w-full bg-meme-yellow min-h-[100vh]">
      <div className="flex flex-col justify-center items-center space-y-4">
        <NavBar name={username} />
        {!isUploaded ? (
          <UploadMeme
            setIsUploaded={setIsUploaded}
            username={username}
            email={email}
          />
        ) : (
          <SuccessfulUploaded />
        )}
      </div>
    </main>
  );
}
