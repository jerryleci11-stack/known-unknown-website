"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Teams", href: "#teams" },
  { name: "News", href: "#news" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-xl">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Known Unknown"
            width={42}
            height={42}
            priority
          />

          <div className="hidden md:block">
            <h1 className="text-sm font-black uppercase tracking-[0.35em]">
              Known Unknown
            </h1>

            <p className="text-xs text-gray-400">
              League of Legends
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm uppercase tracking-[0.2em] text-gray-300 transition hover:text-white"
            >
              {item.name}

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-violet-500 transition-all duration-300 hover:w-full" />
            </a>
          ))}

        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">

          <button className="rounded-full border border-white/10 px-3 py-2 text-xs hover:border-violet-500 transition">
            DE
          </button>

          <button className="rounded-full border border-white/10 px-3 py-2 text-xs hover:border-violet-500 transition">
            EN
          </button>

          <a
            href="https://discord.gg/UAwyyfJnm"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button text-sm font-semibold"
          >
            Join Discord
          </a>

        </div>

      </div>
    </header>
  );
}