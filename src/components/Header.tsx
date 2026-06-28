"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/api/posts", label: "API" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-white">
      <div className="mx-auto flex min-h-[72px] w-full items-center justify-between gap-6 px-12 max-sm:px-4">
        <Link href="/" className="text-lg font-bold">
          Next App Template
        </Link>

        <button
          type="button"
          aria-controls="site-navigation"
          aria-expanded={isMenuOpen}
          aria-label="メニューを開閉する"
          className="hidden size-10 flex-col items-center justify-center gap-1.5 max-sm:flex"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
        </button>

        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={`${isMenuOpen ? "max-sm:flex" : "max-sm:hidden"} flex items-center gap-5 max-sm:absolute max-sm:top-[72px] max-sm:left-0 max-sm:w-full max-sm:flex-col max-sm:items-start max-sm:gap-0 max-sm:border-b max-sm:border-black/10 max-sm:bg-white max-sm:px-4 max-sm:py-3`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:border-b max-sm:w-full max-sm:py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
