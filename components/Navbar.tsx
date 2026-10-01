"use client";

import { useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-8 md:pt-6">
        <nav className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between rounded-full border border-black/10 bg-white/80 px-5 shadow-[0_8px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl md:px-7">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111318] text-xs font-bold text-white">
              SM
            </span>

            <div className="hidden leading-none sm:block">
              <p className="text-[11px] font-bold tracking-[0.12em]">
                SHIVAM MAURYA
              </p>

              <p className="mt-1 text-[9px] tracking-[0.18em] text-black/40">
                SOFTWARE / AI
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 rounded-full bg-black/[0.04] p-1 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-[11px] font-medium tracking-wide text-black/55 transition-all duration-300 hover:bg-white hover:text-black hover:shadow-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#3157ff] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-transform duration-300 hover:-translate-y-0.5 sm:flex"
          >
            Let&apos;s Talk
            <span>↗</span>
          </a>

          {/* Mobile menu */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.05] md:hidden"
            aria-label="Open menu"
          >
            <div className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-[1.5px] w-full bg-black transition-transform ${
                  open ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-black transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-black transition-transform ${
                  open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#f5f5f0] px-7 pt-32 transition-all duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-5 border-b border-black/10 py-6"
            >
              <span className="text-xs text-black/25">
                0{index + 1}
              </span>

              <span className="text-4xl font-medium tracking-[-0.05em]">
                {link.label}
              </span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 flex w-fit items-center gap-3 rounded-full bg-[#3157ff] px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white"
          >
            Let&apos;s Talk ↗
          </a>
        </div>
      </div>
    </>
  );
}