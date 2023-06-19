import Link from "next/link";

export function Header() {
  return (
      <nav className="flex flex-row gap-4 p-5  bg-gray-500">
        <Link href="/" className="transition-all hover:text-gray-700">
          Home
        </Link>
        <Link href="/events" className="transition-all hover:text-gray-700">
          Events
        </Link>
        <Link href="/about-us" className="transition-all hover:text-gray-700">
          About us
        </Link>
      </nav>
  );
}
