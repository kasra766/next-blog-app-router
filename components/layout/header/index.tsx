import Link from "next/link";

const menu = {
  Home: "/",
  Events: "/events",
  "About us": "/about-us",
} as const;

export function Header() {
  return (
    <nav className="flex flex-row gap-6 p-5  bg-gray-500  max-h-16">
      {Object.keys(menu).map(i => (
        <Link
          href={menu[i as keyof typeof menu]}
          className="transition-all hover:text-gray-300"
          key={i}
        >
          {i}
        </Link>
      ))}
    </nav>
  );
}
