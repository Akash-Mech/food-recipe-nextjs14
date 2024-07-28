import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-3xl h-screen flex flex-col items-center justify-center space-y-5">
      <h1>This page can not be found.</h1>
      <Link href={"/"} className="underline ">Go to home</Link>
    </div>
  );
}