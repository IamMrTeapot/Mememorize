import { useEffect, useState } from "react";
import MemeCard from "../../components/MemeCard";
import NavBar from "../../components/NavBar";
import { MemeData } from "../../types/DisplayTypes";
import { fetchUserAttributes } from "aws-amplify/auth";

const mockImages: MemeData[] = [
  {
    name: "Meme 1",
    url: "https://picsum.photos/id/237/200/300",
    description: "A random image",
  },
  {
    name: "Meme 2",
    url: "https://picsum.photos/id/237/200/300",
    description: "A random image",
  },
  {
    name: "Meme 3",
    url: "https://picsum.photos/id/237/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function MemesPage() {
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
    <main className="w-full bg-meme-yellow min-h-[100vh] flex flex-col items-center ">
      <NavBar name={username} />
      <section className="w-full flex flex-col gap-10 items-center py-6">
        {mockImages.map((meme, index) => (
          <MemeCard key={index} {...meme} />
        ))}
      </section>
    </main>
  );
}
