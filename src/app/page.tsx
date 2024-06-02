/* eslint-disable @next/next/no-img-element */
import AppHeader from "./components/app-header";
import { AU_LIST } from "../../public/data/au";
import AnimeCard from "./components/anime-card";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <AppHeader />
      <div className="w-full bg-black mt-4 px-4 flex flex-col items-center">
        <hr className="w-full pt-2 border-white" />
        <h3 className="text-xl">TOP ANIME - Australia</h3>
        <h4 className="text-sm">Last updated: {process.env.LAST_UPDATED}</h4>
      </div>
      <div className="flex flex-wrap justify-center px-4 mt-4">
        {AU_LIST.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </main>
  );
}
