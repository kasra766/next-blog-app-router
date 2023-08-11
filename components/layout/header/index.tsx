import Link from "next/link";

const menu = ["Home", "Events", "About us"] as const;
export function Header() {
  return (
    <nav className="flex flex-row gap-4 p-5  bg-gray-500  max-h-16">
      {menu.map(i => (
        <Link
          href="/"
          className="transition-all shrink-0  min-w-[60px] hover:text-gray-700 hover:text-lg"
          key={i}
        >
          {i}
        </Link>
      ))}
    </nav>
  );
}
