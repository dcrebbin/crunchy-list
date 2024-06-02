import Image from "next/image";

export default function AppHeader(props: any) {
  return (
    <div className="w-full flex p-4 ">
      <div className="flex items-center text-3xl gap-2">
        <Image className="object-contain" src="/logo.png" alt="logo" width={50} height={50} />
        <div className="flex justify-start flex-col">
          <h1 className="font-sans">Crunchylist</h1>
          <h2 className="font-sans text-xl">Anime, by rating</h2>
        </div>
        <select className="rounded-lg p-1 text-white bg-black font-sans">
          <option>AU</option>
        </select>
      </div>
    </div>
  );
}
