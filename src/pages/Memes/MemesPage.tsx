import { useEffect, useState } from "react";
import MemeCard from "../../components/MemeCard";
import NavBar from "../../components/NavBar";
import { MemeData } from "../../types/DisplayTypes";
import { fetchUserAttributes } from "aws-amplify/auth";
import { MemeServices } from "../../services/MemeServices";
import { useNavigate } from "react-router-dom";

export default function MemesPage({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const [username, setUsername] = useState<string>("");
  const [memes, setMemes] = useState<MemeData[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, [isAuthenticated]);

  useEffect(() => {
    async function fetchMemes() {
      try {
        const memes = await MemeServices.getMemes();
        setMemes(memes);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMemes();
  }, []);

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
    <main className="w-full bg-meme-yellow min-h-[100vh] flex flex-col items-center ">
      <NavBar name={username} />
      <section className="w-full flex flex-col gap-10 items-center py-6">
        {memes.map((meme, index) => (
          <MemeCard key={index} {...meme} />
        ))}
      </section>
    </main>
  );
}
