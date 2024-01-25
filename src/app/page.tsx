import Link from "next/link"

export default function adminPanel() {
  return (
    <main className="flex gap-10 justify-center">
      <Link href="http://localhost:3000/listings">Listins</Link>
    </main>
  );
}
