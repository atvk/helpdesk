import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex sm:text-xs gap-5 mx-5 my-5 justify-between items-center">
        <h1 className="truncate py-1.5 text-left 
        font-semibold text-gray-700">
          BackOffice
        </h1>
        <Link href="#" className="flex h-7 w-20 truncate py-1.5 
        items-center justify-center text-white rounded-md 
        bg-pink-900 px-3 hover:bg-pink-700 focus-visible:outline-offset-2
         focus-visible:outline-pink-700
        ">Sing in</Link>
      </div>
    </header>
  );
};