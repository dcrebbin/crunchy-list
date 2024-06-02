import Image from "next/image";
import AppHeader from "./components/app-header";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <AppHeader />
      <div className="w-full bg-black mt-4 px-4 flex flex-col items-center">
        <hr className="w-full pt-2 border-white" />
        <h3 className="text-xl">TOP ANIME - Australia</h3>
        <h4 className="text-sm">Last updated: {process.env.LAST_UPDATED}</h4>
      </div>
    </main>
  );
}
