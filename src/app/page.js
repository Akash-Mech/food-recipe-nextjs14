import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col space-y-5 ">
      <h1 className="text-center text-4xl text-bold text-red-600">Welcome to Recipe App</h1>
      <Link href={"/recipe-list"} className="text-2xl  px-4 py-2 bg-red-700 text-white rounded-md font-serif hover:scale-110 transition-all ease-in-out">Explore Recipes</Link>
    </div>
  );
}
