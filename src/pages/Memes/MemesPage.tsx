import MemeCard from "../../components/MemeCard";
import { MemeData } from "../../types/DIsplayTypes";

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
  return (
    <main className="w-full bg-meme-yellow min-h-[100vh] ">
      <section>
        <nav className="bg-meme-header">Header</nav>
      </section>
      <section className="w-full flex flex-col gap-10 items-center py-6">
        {mockImages.map((meme, index) => (
          <MemeCard key={index} {...meme} />
        ))}
      </section>
    </main>
  );
}
