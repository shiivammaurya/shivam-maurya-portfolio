"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const focusAreas = [
  "FULL STACK",
  "ARTIFICIAL INTELLIGENCE",
  "CYBERSECURITY",
  "QUANTUM COMPUTING",
];

const rotatingWords = [
  "INTELLIGENT.",
  "SECURE.",
  "SCALABLE.",
  "FUTURE-READY.",
];

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-4 w-4 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M5 19 19 5M8 5h11v11"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M12 4v15M6 13l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 2.5 14 10l7.5 2-7.5 2-2 7.5-2-7.5-7.5-2 7.5-2 2-7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="m5 7 5 5-5 5M13 17h6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="5"
        cy="18"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="19"
        cy="18"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m10.7 7.2-4.4 8.5M13.3 7.2l4.4 8.5M7.8 18h8.4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ResearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m16 16 5 5M11 7.5v7M7.5 11h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const interval = setInterval(() => {
      setActiveWord((current) => (current + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f5f5f1] px-5 pb-8 pt-28 md:px-10 md:pt-36"
    >
      {/* =====================================================
          BACKGROUND LIGHT
      ===================================================== */}

      <div className="pointer-events-none absolute -left-48 top-20 h-[520px] w-[520px] rounded-full bg-[#dfe7ff] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-180px] top-10 h-[560px] w-[560px] rounded-full bg-[#e9ddff] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-220px] left-[25%] h-[500px] w-[500px] rounded-full bg-[#eaf8ca] blur-[130px]" />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.38]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1480px]">

        {/* =====================================================
            TOP INFORMATION BAR
        ===================================================== */}

        <div
          className={`flex flex-col justify-between gap-5 transition-all duration-1000 md:flex-row md:items-center ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3157ff] opacity-30" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#3157ff]" />
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/40">
              Full Stack Developer · Research Analyst
            </span>

          </div>

          <div className="flex items-center gap-3 text-[8px] font-semibold uppercase tracking-[0.22em] text-black/25">
            <span>Chandigarh / India</span>
            <span className="h-px w-8 bg-black/10" />
            <span>Building at the edge of technology</span>
          </div>
        </div>

        {/* =====================================================
            HERO GRID
        ===================================================== */}

        <div className="relative mt-16 grid min-h-[650px] items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div
            className={`relative z-20 transition-all duration-1000 ${
              loaded
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >

            {/* Identity */}

            <div className="mb-9 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111318] text-[10px] font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                SM
              </div>

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/40">
                  Shivam Maurya
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/20">
                  Software · AI · Research
                </p>

              </div>

            </div>

            {/* Main typography */}

            <h1 className="max-w-[900px] text-[clamp(4.7rem,10vw,10.5rem)] font-semibold leading-[0.76] tracking-[-0.105em] text-[#111318]">

              BUILDING

              <br />

              WHAT&apos;S

              <br />

              <span className="relative inline-block text-[#3157ff]">

                {rotatingWords[activeWord]}

                <span className="absolute -right-5 top-[10%] h-3 w-3 rounded-full bg-[#c8ff38] shadow-[0_0_30px_rgba(200,255,56,0.7)] md:-right-8 md:h-5 md:w-5" />

              </span>

            </h1>

            {/* Description */}

            <p className="mt-10 max-w-2xl text-sm leading-7 text-black/45 md:text-base md:leading-8">
              I design and build digital products, intelligent systems and
              research-driven solutions at the intersection of software,
              artificial intelligence, cybersecurity and emerging technology.
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="#work"
                className="group flex items-center justify-center gap-4 rounded-full bg-[#fdfdfd] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#3157ff] hover:shadow-[0_18px_45px_rgba(49,87,255,0.2)]"
              >
                Explore work

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c8ff38] text-black transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>

              <Link
                href="#research"
                className="group flex items-center justify-center gap-3 rounded-full border border-black/10 bg-white/70 px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/55 backdrop-blur-md transition-all duration-300 hover:border-[#3157ff]/30 hover:bg-white hover:text-[#3157ff]"
              >
                Research & patents

                <span className="transition-transform duration-300 group-hover:rotate-12">
                  <SparkIcon />
                </span>
              </Link>

            </div>

          </div>

          {/* =================================================
              RIGHT — DIGITAL IDENTITY SYSTEM
          ================================================= */}

          <div
            className={`relative flex min-h-[560px] items-center justify-center transition-all delay-200 duration-[1200ms] ${
              loaded
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >

            {/* Large circle */}

            <div className="absolute h-[420px] w-[420px] rounded-full border border-black/[0.06] md:h-[520px] md:w-[520px]" />

            <div className="absolute h-[340px] w-[340px] rounded-full border border-[#3157ff]/10 md:h-[430px] md:w-[430px]" />

            <div className="absolute h-[255px] w-[255px] rounded-full border border-dashed border-[#3157ff]/15 md:h-[330px] md:w-[330px]" />

            {/* Orbiting dots */}

            <div className="absolute right-[15%] top-[18%] h-3 w-3 rounded-full bg-[#c8ff38] shadow-[0_0_25px_rgba(200,255,56,0.8)]" />

            <div className="absolute bottom-[18%] left-[17%] h-2 w-2 rounded-full bg-[#3157ff] shadow-[0_0_20px_rgba(49,87,255,0.6)]" />

            <div className="absolute left-[18%] top-[32%] h-1.5 w-1.5 rounded-full bg-[#111318]/30" />

            {/* =================================================
                CENTRAL CORE
            ================================================= */}

            <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full bg-[#111318] shadow-[0_35px_100px_rgba(17,19,24,0.2)] md:h-[270px] md:w-[270px]">

              {/* Inner rings */}

              <div className="absolute inset-5 rounded-full border border-white/10" />

              <div className="absolute inset-12 rounded-full border border-white/[0.08]" />

              {/* Core */}

              <div className="relative flex h-24 w-24 items-center justify-center rounded-[30%] bg-[#3157ff] shadow-[0_0_70px_rgba(49,87,255,0.4)] md:h-28 md:w-28">

                <div className="absolute inset-3 rounded-[25%] border border-white/20" />

                <span className="relative text-2xl font-semibold tracking-[-0.08em] text-white md:text-3xl">
                  SM
                </span>

              </div>

              {/* Crosshair */}

              <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-white/15" />

              <div className="absolute bottom-0 left-1/2 h-7 w-px -translate-x-1/2 bg-white/15" />

              <div className="absolute left-0 top-1/2 h-px w-7 -translate-y-1/2 bg-white/15" />

              <div className="absolute right-0 top-1/2 h-px w-7 -translate-y-1/2 bg-white/15" />

            </div>

            {/* =================================================
                TOP RIGHT — RESEARCH
            ================================================= */}

            <div className="absolute right-[2%] top-[8%] w-[175px] rounded-[24px] border border-black/[0.08] bg-white/85 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.07)] backdrop-blur-xl md:right-[4%] md:w-[190px]">

              <div className="flex items-center justify-between">

                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef1ff] text-[#3157ff]">
                  <ResearchIcon />
                </span>

                <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-black/25">
                  Research
                </span>

              </div>

              <p className="mt-5 text-[8px] font-semibold uppercase tracking-[0.2em] text-black/25">
                Direction
              </p>

              <p className="mt-2 text-sm font-semibold leading-5 tracking-[-0.02em] text-[#111318]">
                AI × Security
                <br />
                × Quantum
              </p>

              <div className="mt-4 flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-[#c8ff38]" />

                <span className="text-[7px] uppercase tracking-[0.16em] text-black/30">
                  Exploring
                </span>

              </div>

            </div>

            {/* =================================================
                LEFT BOTTOM — ENGINEERING
            ================================================= */}

            <div className="absolute bottom-[7%] left-[1%] w-[185px] rounded-[24px] bg-[#c8ff38] p-5 shadow-[0_20px_60px_rgba(200,255,56,0.15)] md:left-[2%] md:w-[200px]">

              <div className="flex items-center justify-between">

                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-[#c8ff38]">
                  <TerminalIcon />
                </span>

                <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-black/40">
                  Engineering
                </span>

              </div>

              <p className="mt-5 text-[8px] font-semibold uppercase tracking-[0.2em] text-black/40">
                Building
              </p>

              <p className="mt-2 text-sm font-semibold leading-5 tracking-[-0.02em] text-black">
                Products
                <br />
                Systems
                <br />
                Platforms
              </p>

            </div>

            {/* =================================================
                RIGHT BOTTOM — NETWORK
            ================================================= */}

            <div className="absolute bottom-[15%] right-[1%] flex h-14 w-14 items-center justify-center rounded-2xl border border-black/[0.08] bg-white text-black/45 shadow-[0_15px_40px_rgba(0,0,0,0.07)] md:right-[-1%]">

              <NetworkIcon />

            </div>

            {/* =================================================
                FLOATING NUMBER
            ================================================= */}

            <div className="absolute left-[8%] top-[13%]">

              <p className="font-mono text-[8px] tracking-[0.2em] text-black/20">
                01
              </p>

              <div className="mt-2 h-px w-10 bg-black/10" />

            </div>

            <div className="absolute bottom-[9%] right-[20%]">

              <p className="font-mono text-[8px] tracking-[0.2em] text-black/20">
                2026
              </p>

            </div>

          </div>
        </div>

        {/* =====================================================
            TECHNOLOGY MARQUEE
        ===================================================== */}

        <div className="relative overflow-hidden border-y border-black/[0.08] py-5">

          <div className="flex min-w-max animate-[marquee_24s_linear_infinite] items-center">

            {[...focusAreas, ...focusAreas].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center"
              >

                <span className="px-7 text-[9px] font-semibold uppercase tracking-[0.25em] text-black/30 md:px-10">
                  {item}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#3157ff]" />

              </div>
            ))}

          </div>

        </div>

        {/* =====================================================
            BOTTOM NAVIGATION
        ===================================================== */}

        <div className="grid border-b border-black/[0.08] sm:grid-cols-3">

          {/* Work */}

          <Link
            href="#work"
            className="group flex items-center justify-between border-b border-black/[0.08] py-5 sm:border-b-0 sm:border-r sm:pr-8"
          >

            <div className="flex items-center gap-4">

              <span className="font-mono text-[8px] text-black/20">
                01
              </span>

              <div>

                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                  Selected work
                </p>

                <p className="mt-1 text-sm text-black/65">
                  Digital products
                </p>

              </div>

            </div>

            <ArrowUpRight className="text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#3157ff]" />

          </Link>

          {/* Research */}

          <Link
            href="#research"
            className="group flex items-center justify-between border-b border-black/[0.08] py-5 sm:border-b-0 sm:border-r sm:px-8"
          >

            <div className="flex items-center gap-4">

              <span className="font-mono text-[8px] text-black/20">
                02
              </span>

              <div>

                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                  Research
                </p>

                <p className="mt-1 text-sm text-black/65">
                  Patents & publications
                </p>

              </div>

            </div>

            <ArrowUpRight className="text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#3157ff]" />

          </Link>

          {/* About */}

          <Link
            href="#about"
            className="group flex items-center justify-between py-5 sm:pl-8"
          >

            <div className="flex items-center gap-4">

              <span className="font-mono text-[8px] text-black/20">
                03
              </span>

              <div>

                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                  Continue
                </p>

                <p className="mt-1 text-sm text-black/65">
                  More about me
                </p>

              </div>

            </div>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/25 transition-all duration-300 group-hover:border-[#3157ff]/30 group-hover:bg-[#3157ff] group-hover:text-white">
              <ArrowDown />
            </span>

          </Link>

        </div>
      </div>

      {/* =====================================================
          CUSTOM ANIMATIONS
      ===================================================== */}

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}