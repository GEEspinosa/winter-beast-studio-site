"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/documentation", label: "Documentation" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 flex items-center justify-between p-6 border-b border-gray-200 bg-white ">
      <Link
  href="/"
  className="flex items-center gap-3 text-2xl font-semibold text-gray-900"
>
  <img
    src="/images/header-footer/sketch-skull.webp"
    alt="WinterBeast skull logo"
    className="h-8 w-8 object-contain"
  />
  <span>WinterBeast</span>
</Link>
      
      <nav className="flex space-x-8 text-gray-700 text-sm font-medium">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`group p-2 inline-flex items-center border-b border-transparent text-gray-700 hover:border-gray-900 hover:text-gray-900 transition ${
                isActive ? "active" : ""
              }`}
            >
              {label}
              <span className="ml-1 arrow-rotate-left">→</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
