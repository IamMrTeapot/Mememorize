import { MemeData } from "../types/DisplayTypes";

export default function MemeCard({ name, url, description }: MemeData) {
  return (
    <div className="flex flex-col w-[85%] font-urbanist">
      <div className="bg-gradient-to-b from-zinc-500 to-gray-200 px-4 py-2 rounded-t-2xl font-extrabold text-xl">
        {name}
      </div>
      <img src={url} alt={name} className="w-full" />
      <div className="bg-gradient-to-t from-zinc-800 to-stone-400 px-4 py-3 rounded-b-2xl text-white">
        {description}
      </div>
    </div>
  );
}
