"use client";

import { useEffect, useState } from "react";

const certificates = [
  {
    id: 1,
    title: "SOAR – AI to Acquire",
    organization: "National Association of Software and Services Companies",
    partner: "Skill India",
    date: "23 December 2025",
    level: "NSQF Level 3",
    duration: "5 Hours",
    image: "/certificates/soar-ai-to-acquire.png",
  },
  {
    id: 2,
    title: "Level 1 – Ten-Hour Hands-On Workshop on Flutter",
    organization: "Chandigarh University",
    partner: "Department of Computer Science & Engineering",
    date: "30 January 2024",
    level: "Level 1",
    duration: "10 Hours",
    image: "/certificates/flutter-workshop-level-1.png",
  },
  {
    id: 3,
    title: "SOAR – AI to be Aware",
    organization: "Microsoft",
    partner: "Skill India",
    date: "20 December 2025",
    level: "NSQF Level 2",
    duration: "20 Hours",
    image: "/certificates/soar-ai-to-be-aware.png",
  },
  {
    id: 4,
    title: "AI for Entrepreneurship",
    organization: "Intel Technology India Pvt Ltd",
    partner: "Skill India Digital Hub",
    date: "26 March 2025",
    level: "Online Skill Course",
    duration: "2 Hours",
    image: "/certificates/ai-for-entrepreneurship.png",
  },
  {
    id: 5,
    title: "YOC Talks with Maj Gen Neeraj Bali, SM (Retd.)",
    organization: "Young Orators Club",
    partner: "Chandigarh University",
    date: "14 January 2025",
    level: "Participation",
    duration: "Motivational Talk",
    image: "/certificates/yoc-talks.png",
  },
  {
    id: 6,
    title: "Internet of Things: Design Concepts and Use Cases",
    organization: "SWAYAM / NITTTR Chandigarh",
    partner: "Government of India",
    date: "December 2024",
    level: "Two Credit Course",
    duration: "75% Score",
    image: "/certificates/swayam-iot.png",
  },
];

export default function CertificationShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = certificates.length;

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  return (
    <section
      id="certifications"
      className="mt-28 overflow-hidden"
    >
      {/* Section heading */}
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#3157ff]">
            Certifications
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">
            Credentials that
            <span className="text-[#3157ff]"> keep moving.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm leading-6 text-neutral-500">
          A collection of certifications, workshops and learning
          experiences built across AI, IoT, entrepreneurship and
          software development.
        </p>
      </div>

      {/* Main carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3157ff]/10 blur-[100px]" />

        {/* Slides */}
        <div className="relative flex items-center justify-center">
          {certificates.map((certificate, index) => {
            let position = index - activeIndex;

            if (position > total / 2) {
              position -= total;
            }

            if (position < -total / 2) {
              position += total;
            }

            const isActive = position === 0;
            const isPrevious = position === -1;
            const isNext = position === 1;

            return (
              <div
                key={certificate.id}
                onClick={() => setActiveIndex(index)}
                className={`
                  absolute left-1/2 w-[82vw] max-w-[900px]
                  cursor-pointer
                  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  md:w-[70vw]
                  ${
                    isActive
                      ? "z-30 -translate-x-1/2 scale-100 opacity-100"
                      : isPrevious
                      ? "z-10 -translate-x-[112%] scale-[0.78] opacity-35"
                      : isNext
                      ? "z-10 translate-x-[12%] scale-[0.78] opacity-35"
                      : "z-0 -translate-x-1/2 scale-[0.65] opacity-0"
                  }
                `}
              >
                <div
                  className={`
                    relative overflow-hidden rounded-[28px]
                    border bg-white p-2
                    transition-all duration-700
                    md:p-3
                    ${
                      isActive
                        ? "border-neutral-200 shadow-[0_30px_90px_rgba(49,87,255,0.18)]"
                        : "border-neutral-100 shadow-xl"
                    }
                  `}
                >
                  {/* Certificate */}
                  <div className="relative aspect-[1.414/1] overflow-hidden rounded-[20px] bg-neutral-100">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-full w-full object-contain"
                      draggable={false}
                    />

                    {/* Active overlay */}
                    {isActive && (
                      <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-black/5" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Gives the absolute carousel its height */}
          <div className="aspect-[1.414/1] w-[82vw] max-w-[900px] md:w-[70vw]" />
        </div>

        {/* Navigation buttons */}
        <button
          onClick={previousSlide}
          aria-label="Previous certificate"
          className="
            absolute left-0 top-1/2 z-40
            flex h-12 w-12 -translate-y-1/2
            items-center justify-center
            rounded-full border border-neutral-200
            bg-white/90 text-neutral-900
            shadow-lg backdrop-blur
            transition-all duration-300
            hover:-translate-x-1 hover:border-[#3157ff]
            hover:text-[#3157ff]
            md:left-6
          "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next certificate"
          className="
            absolute right-0 top-1/2 z-40
            flex h-12 w-12 -translate-y-1/2
            items-center justify-center
            rounded-full border border-neutral-200
            bg-white/90 text-neutral-900
            shadow-lg backdrop-blur
            transition-all duration-300
            hover:translate-x-1 hover:border-[#3157ff]
            hover:text-[#3157ff]
            md:right-6
          "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Certificate information */}
      <div className="mx-auto mt-10 max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="rounded-full bg-[#c8ff38] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-950">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <span className="text-xs text-neutral-400">
            / {String(total).padStart(2, "0")}
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
          {certificates[activeIndex].title}
        </h3>

        <p className="mt-3 text-sm text-neutral-500">
          {certificates[activeIndex].organization}
          <span className="mx-2 text-neutral-300">×</span>
          {certificates[activeIndex].partner}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-600">
            {certificates[activeIndex].date}
          </span>

          <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-600">
            {certificates[activeIndex].level}
          </span>

          <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs text-neutral-600">
            {certificates[activeIndex].duration}
          </span>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {certificates.map((certificate, index) => (
          <button
            key={certificate.id}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to certificate ${index + 1}`}
            className={`
              h-1.5 rounded-full transition-all duration-500
              ${
                index === activeIndex
                  ? "w-10 bg-[#3157ff]"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }
            `}
          />
        ))}
      </div>

      {/* Auto-slide status */}
      <div className="mt-5 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isPaused ? "bg-neutral-400" : "bg-[#3157ff]"
          }`}
        />

        {isPaused ? "Paused" : "Auto moving"}
      </div>
    </section>
  );
}