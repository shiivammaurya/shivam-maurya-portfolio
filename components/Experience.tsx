"use client";

import { useEffect, useState } from "react";

type Certificate = {
  title: string;
  image: string;
};

const certificates: Certificate[] = [
  {
    title: "AI-Assisted Full Stack Web Development Internship",
    image: "/certificates/tbi-geu-internship.png",
  },
  {
    title: "Blockchain Technology using Ethereum and Polygon",
    image: "/certificates/metacrafters-blockchain.png",
  },
];

export default function Experience() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  // Prevent background scrolling when certificate modal is open
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  return (
    <section
      id="experience"
      className="border-t border-black/10 bg-white px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}

        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3157ff]">
          04 / Experience
        </p>

        <h2 className="mt-5 text-6xl font-semibold tracking-[-0.07em] md:text-8xl">
          Experience
        </h2>

        {/* Experience timeline */}

        <div className="mt-16 border-t border-black/10">
          {/* =====================================================
              EXPERIENCE 01
          ===================================================== */}

          <div className="grid gap-8 border-b border-black/10 py-10 md:grid-cols-[120px_250px_1fr] md:items-center md:gap-10">
            {/* Year */}

            <div className="self-start">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-black/30">
                2026
              </span>
            </div>

            {/* Certificate Preview */}

            <div>
              <button
                type="button"
                onClick={() => setSelectedCertificate(certificates[0])}
                className="group relative block w-full overflow-hidden rounded-2xl border border-black/10 bg-[#f5f5f0] p-2 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                aria-label="Open AI-Assisted Full Stack Development certificate"
              >
                <div className="relative aspect-[1.414/1] overflow-hidden rounded-xl bg-white">
                  <img
                    src={certificates[0].image}
                    alt="AI-Assisted Full Stack Web Development Internship Certificate"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Hover overlay */}

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/35">
                    <span className="translate-y-2 rounded-full bg-white px-4 py-2.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Certificate ↗
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between px-1 pb-1 pt-3">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-black/35">
                    Certificate
                  </span>

                  <span className="text-[10px] text-black/30">
                    ↗
                  </span>
                </div>
              </button>
            </div>

            {/* Experience Content */}

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold tracking-tight">
                  AI-Assisted Full-Stack Development
                </h3>

                <span className="rounded-full bg-[#c8ff38] px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.15em] text-black">
                  Internship
                </span>
              </div>

              <p className="mt-2 text-sm text-black/40">
                Technology Business Incubator · Dehradun
              </p>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-black/50">
                Built responsive applications using React.js, Next.js and
                Tailwind CSS, developed REST APIs with Node.js and Express,
                integrated OpenAI and Gemini APIs and worked with
                authentication, databases and deployment.
              </p>

              {/* Skills */}

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "Tailwind CSS",
                  "Node.js",
                  "Express",
                  "OpenAI",
                  "Gemini",
                  "REST APIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-[#f5f5f0] px-3 py-2 text-[9px] font-medium text-black/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              EXPERIENCE 02
          ===================================================== */}

          <div className="grid gap-8 border-b border-black/10 py-10 md:grid-cols-[120px_250px_1fr] md:items-center md:gap-10">
            {/* Year */}

            <div className="self-start">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-black/30">
                2025
              </span>
            </div>

            {/* Certificate Preview */}

            <div>
              <button
                type="button"
                onClick={() => setSelectedCertificate(certificates[1])}
                className="group relative block w-full overflow-hidden rounded-2xl border border-black/10 bg-[#f5f5f0] p-2 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                aria-label="Open Blockchain Development certificate"
              >
                <div className="relative aspect-[1.414/1] overflow-hidden rounded-xl bg-white">
                  <img
                    src={certificates[1].image}
                    alt="MetaCrafters Blockchain Technology Certificate"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Hover overlay */}

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/35">
                    <span className="translate-y-2 rounded-full bg-white px-4 py-2.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-black opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Certificate ↗
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between px-1 pb-1 pt-3">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-black/35">
                    Certificate
                  </span>

                  <span className="text-[10px] text-black/30">
                    ↗
                  </span>
                </div>
              </button>
            </div>

            {/* Experience Content */}

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Blockchain Development
                </h3>

                <span className="rounded-full bg-[#3157ff] px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.15em] text-white">
                  Training
                </span>
              </div>

              <p className="mt-2 text-sm text-black/40">
                MetaCrafters
              </p>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-black/50">
                Developed and deployed smart contracts using Solidity and
                explored wallet integration, token standards and Ethereum and
                Polygon test networks.
              </p>

              {/* Skills */}

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Solidity",
                  "Smart Contracts",
                  "Ethereum",
                  "Polygon",
                  "Web3",
                  "Wallet Integration",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-[#f5f5f0] px-3 py-2 text-[9px] font-medium text-black/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}

        <div className="mt-12 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-sm leading-relaxed text-black/40">
            My experience combines full-stack product development with
            emerging technologies, allowing me to work across software,
            artificial intelligence and decentralized systems.
          </p>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#111318] text-[#c8ff38]">
            ↗
          </div>
        </div>
      </div>

      {/* =========================================================
          CERTIFICATE MODAL
      ========================================================= */}

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md md:p-8"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative flex h-full max-h-[92vh] w-full max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal top label */}

            <div className="absolute left-0 top-[-35px] hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 md:block">
              Certificate Preview
            </div>

            {/* Close */}

            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-0 top-[-48px] z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl font-light text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:rotate-90"
              aria-label="Close certificate"
            >
              ×
            </button>

            {/* Large certificate */}

            <div className="relative max-h-[92vh] w-full overflow-hidden rounded-2xl bg-white shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[92vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}