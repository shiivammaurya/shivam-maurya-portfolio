"use client";

import { useEffect, useState } from "react";

const patents = [
  {
    number: "01",
    year: "2026",
    category: "QUANTUM / DIGITAL SECURITY",
    title: "Quantum Powered Network-Wide Image Monitoring",
    subtitle: "and Tamper-Proof Deletion Management System",
    application: "202611013487",
    filed: "07 February 2026",
    published: "27 March 2026",
    status: "Published Patent Application",
    short:
      "A quantum-enabled image lifecycle management system designed to identify, track, monitor and manage digital image replicas across devices and networks.",
    problem:
      "Digital images can move rapidly between devices, platforms and networks. Existing approaches can detect duplicates, but do not provide a unified mechanism for origin traceability, propagation tracking and coordinated deletion.",
    solution:
      "The proposed system assigns every image a unique identifier using perceptual hashing and contextual metadata, tracks image propagation through a hierarchical chain, detects replicas and uses a quantum-oriented search and deletion architecture.",
    workflow: [
      "Generate a unique image identifier using perceptual hashing and metadata.",
      "Track image movement across devices, platforms and communication channels.",
      "Detect screenshots, edited versions, compressed copies and other replicas.",
      "Search connected digital environments for unauthorized appearances.",
      "Issue UID-based deletion and blocking commands.",
      "Apply display-level blocking to prevent the image from being rendered.",
      "Maintain an offline-aware deletion queue and generate a deletion certificate.",
    ],
    technologies: [
      "Quantum Computing",
      "Perceptual Hashing",
      "Image Security",
      "UID Registry",
      "Replica Detection",
      "Digital Forensics",
      "Cybersecurity",
    ],
    innovation:
      "The invention connects image identification, propagation tracking, replica detection and deletion enforcement into a single digital image lifecycle architecture.",
  },

  {
    number: "02",
    year: "2025",
    category: "AI / SMART CITIES / SECURITY",
    title: "Smart Signal AI",
    subtitle: "Autonomous Traffic Management & Security System",
    application: "202511054985",
    filed: "06 June 2025",
    published: "20 June 2025",
    status: "Published Patent Application",
    short:
      "An AI-powered adaptive traffic system that combines real-time traffic optimization, emergency vehicle prioritization, stolen-vehicle detection and traffic violation monitoring.",
    problem:
      "Traditional traffic signals often rely on fixed timing cycles and cannot continuously adapt to changing traffic density, emergency situations, vehicle behavior and security threats.",
    solution:
      "Smart Signal AI uses AI-enabled cameras, real-time analytics, machine learning and predictive analysis to understand traffic conditions and dynamically determine signal durations.",
    workflow: [
      "Scan vehicles and collect license plate, speed and vehicle-type data.",
      "Calculate vehicle density, average speed and predicted arrival times.",
      "Dynamically assign signal durations based on actual traffic demand.",
      "Detect ambulances, police vehicles and VIP convoys.",
      "Create a real-time green corridor for emergency vehicles.",
      "Cross-check license plates against stolen or wanted vehicle databases.",
      "Detect abnormal speed patterns and generate traffic violation reports.",
      "Learn from historical traffic patterns to improve future signal decisions.",
    ],
    technologies: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "License Plate Recognition",
      "Predictive Analytics",
      "Real-Time Tracking",
      "Cloud Processing",
    ],
    innovation:
      "The system combines adaptive traffic control with emergency response, vehicle security and rash-driving detection instead of treating these as separate systems.",
  },

  {
    number: "03",
    year: "2024",
    category: "AI / FINTECH / CYBERSECURITY",
    title: "Smart Safe Pay AI",
    subtitle: "Real-Time Scam Detection in Digital Transactions",
    application: "202411083857",
    filed: "02 November 2024",
    published: "15 November 2024",
    status: "Published Patent Application",
    short:
      "An AI-driven transaction security concept that analyzes transaction history and behavioural patterns to identify potentially suspicious recipient accounts.",
    problem:
      "Digital payment scams can involve accounts receiving many one-time payments from different users. Legitimate businesses can show similar transaction patterns, making simple frequency-based detection insufficient.",
    solution:
      "Smart Safe Pay AI analyzes transaction history, unique payment behaviour and geographic patterns while considering legitimate business accounts and low-risk transactions.",
    workflow: [
      "Analyze the recipient account's transaction history.",
      "Identify repeated one-time payments from different users.",
      "Evaluate geographic patterns associated with incoming transactions.",
      "Consider account verification and legitimate business activity.",
      "Ignore low-value and repetitive transactions according to the proposed rules.",
      "Identify suspicious behavioural patterns.",
      "Trigger real-time fraud detection before the transaction is completed.",
    ],
    technologies: [
      "Artificial Intelligence",
      "Fraud Detection",
      "Transaction Analytics",
      "Behavioural Analysis",
      "Geographic Analysis",
      "FinTech Security",
      "Risk Detection",
    ],
    innovation:
      "The concept focuses on behavioural patterns around one-time payments and geographic relationships rather than relying only on individual transaction values.",
  },
];

const researchNodes = [
  {
    id: "quantum",
    label: "Quantum Computing",
    short: "QUANTUM",
    x: "17%",
    y: "20%",
  },
  {
    id: "security",
    label: "Cybersecurity",
    short: "SECURITY",
    x: "82%",
    y: "24%",
  },
  {
    id: "ai",
    label: "AI / Machine Learning",
    short: "AI / ML",
    x: "12%",
    y: "72%",
  },
  {
    id: "systems",
    label: "Intelligent Systems",
    short: "SYSTEMS",
    x: "84%",
    y: "72%",
  },
];

export default function Research() {
  const [activeNode, setActiveNode] = useState("quantum");
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((value) => value + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const nodes = ["quantum", "security", "systems", "ai"];
    setActiveNode(nodes[time % nodes.length]);
  }, [time]);

  return (
    <section
      id="research"
      className="relative overflow-hidden bg-[#f5f5f1] px-5 py-28 md:px-10 md:py-40"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#dce5ff] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[20%] h-[550px] w-[550px] rounded-full bg-[#eadfff] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[35%] h-[450px] w-[450px] rounded-full bg-[#e5f8c8] blur-[120px]" />

      <div className="relative mx-auto max-w-[1450px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#3157ff]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/35">
                03 / Research & Innovation
              </span>
            </div>

            <h2 className="mt-6 text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.76] tracking-[-0.095em] text-[#111318]">
              Ideas
              <br />
              in <span className="text-[#3157ff]">motion.</span>
            </h2>
          </div>

          <div className="max-w-sm pb-2">
            <p className="text-sm leading-7 text-black/40">
              Exploring the intersection of emerging computation,
              artificial intelligence and secure intelligent systems.
            </p>
          </div>
        </div>

        {/* =====================================================
            RESEARCH UNIVERSE
        ===================================================== */}

        <div className="relative mt-20 h-[680px] overflow-hidden rounded-[42px] border border-black/[0.08] bg-[#f9f9f6] shadow-[0_30px_100px_rgba(0,0,0,0.06)] md:h-[760px]">

          {/* Fine grid */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.32]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          {/* Header labels */}

          <div className="absolute left-7 top-7 z-20 text-[8px] font-semibold uppercase tracking-[0.22em] text-black/25 md:left-10 md:top-10">
            Research Map
          </div>

          <div className="absolute right-7 top-7 z-20 text-[8px] font-semibold uppercase tracking-[0.22em] text-black/25 md:right-10 md:top-10">
            2026 / 01
          </div>

          <div className="absolute bottom-7 left-7 z-20 font-mono text-[8px] tracking-[0.15em] text-black/20 md:left-10 md:bottom-10">
            RESEARCH / 03 PATENTS
          </div>

          <div className="absolute bottom-7 right-7 z-20 text-[8px] font-semibold uppercase tracking-[0.2em] text-black/20 md:right-10 md:bottom-10">
            Exploring / Building / Testing
          </div>

          {/* =================================================
              SVG CONNECTION SYSTEM
          ================================================= */}

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 760"
            preserveAspectRatio="none"
          >
            <ellipse
              cx="600"
              cy="380"
              rx="370"
              ry="245"
              fill="none"
              stroke="rgba(49,87,255,0.08)"
              strokeWidth="1"
            />

            <ellipse
              cx="600"
              cy="380"
              rx="270"
              ry="175"
              fill="none"
              stroke="rgba(49,87,255,0.08)"
              strokeWidth="1"
            />

            <line
              x1="204"
              y1="152"
              x2="600"
              y2="380"
              stroke="rgba(49,87,255,0.13)"
              strokeWidth="1"
            />

            <line
              x1="984"
              y1="182"
              x2="600"
              y2="380"
              stroke="rgba(49,87,255,0.13)"
              strokeWidth="1"
            />

            <line
              x1="144"
              y1="547"
              x2="600"
              y2="380"
              stroke="rgba(49,87,255,0.13)"
              strokeWidth="1"
            />

            <line
              x1="1008"
              y1="547"
              x2="600"
              y2="380"
              stroke="rgba(49,87,255,0.13)"
              strokeWidth="1"
            />

            <line
              x1="560"
              y1="380"
              x2="640"
              y2="380"
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="1"
            />

            <line
              x1="600"
              y1="340"
              x2="600"
              y2="420"
              stroke="rgba(0,0,0,0.08)"
              strokeWidth="1"
            />
          </svg>

          {/* =================================================
              CENTER RESEARCH CORE
          ================================================= */}

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">

            <div className="absolute -inset-24 rounded-full bg-[#3157ff]/10 blur-[60px]" />

            <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-[#111a45] shadow-[0_30px_100px_rgba(49,87,255,0.22)] transition-all duration-700 md:h-60 md:w-60">

              <div className="absolute inset-5 rounded-full border border-white/10" />

              <div className="absolute inset-12 rounded-full border border-white/10" />

              <div className="absolute inset-[35%] rounded-full bg-[#3157ff] shadow-[0_0_45px_rgba(49,87,255,0.8)]" />

              <div className="relative text-center">
                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/40">
                  Research
                </p>

                <p className="mt-3 text-xl font-medium tracking-[-0.04em] text-white md:text-2xl">
                  Shivam
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/35">
                  Explore / Build
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RESEARCH NODES
          ================================================= */}

          {researchNodes.map((node) => {
            const active = activeNode === node.id;

            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-left"
                style={{
                  left: node.x,
                  top: node.y,
                }}
              >
                <div className="flex flex-col items-center">

                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-700 md:h-16 md:w-16 ${
                      active
                        ? "border-[#3157ff] bg-[#3157ff] shadow-[0_0_0_10px_rgba(49,87,255,0.08),0_15px_40px_rgba(49,87,255,0.2)]"
                        : "border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
                        active ? "bg-white" : "bg-[#3157ff]"
                      }`}
                    />

                    {active && (
                      <span className="absolute inset-[-7px] rounded-full border border-[#3157ff]/20" />
                    )}
                  </div>

                  <span
                    className={`mt-4 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                      active ? "text-[#3157ff]" : "text-black/30"
                    }`}
                  >
                    {node.short}
                  </span>

                  <span
                    className={`mt-1 hidden max-w-[150px] text-center text-[10px] leading-5 transition-colors md:block ${
                      active ? "text-black/50" : "text-black/25"
                    }`}
                  >
                    {node.label}
                  </span>
                </div>
              </button>
            );
          })}

          {/* =================================================
              ACTIVE RESEARCH LABEL
          ================================================= */}

          <div className="absolute left-1/2 top-[12%] z-20 hidden -translate-x-1/2 md:block">
            <div className="flex items-center gap-3 rounded-full border border-black/[0.08] bg-white/80 px-5 py-3 shadow-[0_12px_35px_rgba(0,0,0,0.05)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#15915b]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-black/40">
                Active research direction
              </span>
            </div>
          </div>

          {/* =================================================
              CURRENT FOCUS
          ================================================= */}

          <div className="absolute bottom-[15%] left-[6%] z-20 hidden w-52 rounded-2xl border border-black/[0.07] bg-white/75 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.04)] backdrop-blur-md md:block">

            <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-black/25">
              Current focus
            </p>

            <p className="mt-4 text-sm font-medium tracking-[-0.02em] text-black/70">
              Secure intelligent systems
            </p>

            <div className="mt-5 h-1 overflow-hidden rounded-full bg-black/[0.05]">
              <div className="h-full w-[78%] rounded-full bg-[#3157ff]" />
            </div>

            <p className="mt-2 text-right text-[8px] font-semibold text-black/25">
              EXPLORING
            </p>
          </div>

          {/* =================================================
              PATENT STAT
          ================================================= */}

          <div className="absolute bottom-[15%] right-[6%] z-20 hidden w-52 rounded-2xl border border-black/[0.07] bg-white/75 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.04)] backdrop-blur-md md:block">

            <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-black/25">
              Innovation
            </p>

            <div className="mt-4 flex items-end gap-2">
              <span className="text-5xl font-semibold leading-none tracking-[-0.08em]">
                03
              </span>

              <span className="pb-1 text-[8px] font-semibold uppercase tracking-[0.15em] text-black/30">
                Patent
                <br />
                Applications
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            RESEARCH OUTPUTS
        ===================================================== */}

        <div className="mt-20">

          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3157ff]">
                Research Outputs
              </p>

              <h3 className="mt-4 text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
                From ideas
                <br />
                to inventions.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-7 text-black/40">
              Three published patent applications spanning quantum security,
              intelligent transportation and AI-powered financial security.
            </p>
          </div>

          {/* =================================================
              PATENT LIST
          ================================================= */}

          <div className="space-y-4">

            {patents.map((patent) => (
              <details
                key={patent.number}
                className="group overflow-hidden rounded-[32px] border border-black/[0.08] bg-white transition-all duration-500 open:shadow-[0_30px_90px_rgba(0,0,0,0.08)]"
              >

                {/* PATENT HEADER */}

                <summary className="cursor-pointer list-none p-6 md:p-9">

                  <div className="grid gap-7 md:grid-cols-[70px_1fr_180px] md:items-start">

                    {/* Number */}

                    <div className="flex items-center justify-between md:block">

                      <span className="text-xs font-semibold text-black/25">
                        {patent.number}
                      </span>

                      <span className="text-xl transition-transform duration-500 group-open:rotate-45 md:hidden">
                        +
                      </span>
                    </div>

                    {/* Main information */}

                    <div>

                      <div className="flex flex-wrap items-center gap-2">

                        <span className="rounded-full bg-[#111318] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-white">
                          {patent.category}
                        </span>

                        <span className="rounded-full bg-[#c8ff38] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-black">
                          {patent.year}
                        </span>

                      </div>

                      <h4 className="mt-5 max-w-4xl text-3xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-5xl">
                        {patent.title}
                      </h4>

                      <p className="mt-2 max-w-3xl text-lg text-black/35 md:text-xl">
                        {patent.subtitle}
                      </p>

                      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-black/45">
                        {patent.short}
                      </p>

                    </div>

                    {/* Patent meta */}

                    <div className="hidden text-right md:block">

                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f5f0] text-xl transition-transform duration-500 group-open:rotate-45">
                        +
                      </span>

                      <p className="mt-7 text-[8px] font-semibold uppercase tracking-[0.18em] text-black/30">
                        Application
                      </p>

                      <p className="mt-2 font-mono text-[10px] text-black/55">
                        {patent.application}
                      </p>

                    </div>

                  </div>

                </summary>

                {/* =================================================
                    EXPANDED PATENT
                ================================================= */}

                <div className="border-t border-black/10 px-6 pb-8 pt-8 md:px-9 md:pb-12">

                  <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">

                    {/* LEFT */}

                    <div>

                      {/* Problem / Solution */}

                      <div className="grid gap-8 md:grid-cols-2">

                        <div>
                          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                            The Problem
                          </p>

                          <p className="mt-4 text-sm leading-relaxed text-black/55">
                            {patent.problem}
                          </p>
                        </div>

                        <div>
                          <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                            The Solution
                          </p>

                          <p className="mt-4 text-sm leading-relaxed text-black/55">
                            {patent.solution}
                          </p>
                        </div>

                      </div>

                      {/* Workflow */}

                      <div className="mt-12">

                        <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                          How It Works
                        </p>

                        <div className="mt-5 overflow-hidden rounded-2xl bg-[#111318]">

                          {patent.workflow.map((step, index) => (
                            <div
                              key={step}
                              className="flex gap-5 border-b border-white/10 px-5 py-4 last:border-b-0"
                            >

                              <span className="shrink-0 font-mono text-[9px] text-[#c8ff38]">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <p className="text-xs leading-relaxed text-white/65">
                                {step}
                              </p>

                            </div>
                          ))}

                        </div>

                      </div>
                    </div>

                    {/* RIGHT */}

                    <div>

                      {/* Patent information */}

                      <div className="rounded-[24px] bg-[#f5f5f0] p-6 md:p-7">

                        <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                          Patent Information
                        </p>

                        <div className="mt-6 space-y-5">

                          <div>
                            <p className="text-[8px] uppercase tracking-widest text-black/30">
                              Application No.
                            </p>

                            <p className="mt-1 font-mono text-sm">
                              {patent.application}
                            </p>
                          </div>

                          <div>
                            <p className="text-[8px] uppercase tracking-widest text-black/30">
                              Filed
                            </p>

                            <p className="mt-1 text-sm">
                              {patent.filed}
                            </p>
                          </div>

                          <div>
                            <p className="text-[8px] uppercase tracking-widest text-black/30">
                              Published
                            </p>

                            <p className="mt-1 text-sm">
                              {patent.published}
                            </p>
                          </div>

                          <div>
                            <p className="text-[8px] uppercase tracking-widest text-black/30">
                              Status
                            </p>

                            <p className="mt-1 text-sm">
                              {patent.status}
                            </p>
                          </div>

                        </div>
                      </div>

                      {/* Technologies */}

                      <div className="mt-5">

                        <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
                          Core Technologies
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">

                          {patent.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-black/10 bg-white px-3 py-2 text-[9px] font-medium text-black/55"
                            >
                              {technology}
                            </span>
                          ))}

                        </div>
                      </div>

                      {/* Innovation */}

                      <div className="mt-7 rounded-[24px] bg-[#3157ff] p-6 text-white md:p-7">

                        <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/50">
                          What Makes It Interesting
                        </p>

                        <p className="mt-4 text-sm leading-relaxed text-white/80">
                          {patent.innovation}
                        </p>

                      </div>

                    </div>

                  </div>
                </div>
              </details>
            ))}

          </div>
        </div>

        {/* =====================================================
            PUBLICATION
        ===================================================== */}

        <div className="mt-20 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">

          {/* Publication */}

          <div className="group relative overflow-hidden rounded-[32px] border border-black/[0.08] bg-white p-8 shadow-[0_15px_60px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 md:p-10">

            <div className="flex items-center justify-between">

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/30">
                Publication
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#3157ff]">
                01
              </span>

            </div>

            <h3 className="mt-14 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
              AI-Based Scam
              <br />
              Prediction
            </h3>

            <p className="mt-6 max-w-xl text-sm leading-7 text-black/45">
              Research focused on enhancing digital transaction security
              through AI-based scam prediction.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">

              <span className="rounded-full bg-[#eef1ff] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#3157ff]">
                Springer LNNS
              </span>

              <span className="rounded-full bg-[#f5f5f2] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-black/40">
                Scopus Indexed
              </span>

            </div>

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full border border-[#3157ff]/10 transition-transform duration-700 group-hover:scale-125" />

          </div>

          {/* Innovation */}

          <div className="relative overflow-hidden rounded-[32px] bg-[#c8ff38] p-8 md:p-10">

            <div className="flex items-center justify-between">

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/45">
                Innovation
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                03
              </span>

            </div>

            <div className="relative z-10 mt-14">

              <div className="flex items-end gap-4">

                <span className="text-[clamp(5rem,10vw,8rem)] font-semibold leading-none tracking-[-0.1em]">
                  03
                </span>

                <span className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                  Published
                  <br />
                  Applications
                </span>

              </div>

              <p className="mt-7 max-w-md text-sm leading-7 text-black/50">
                Innovation spanning quantum-powered image security,
                intelligent traffic management and AI-driven digital
                transaction security.
              </p>

            </div>

            <div className="pointer-events-none absolute -bottom-32 -right-24 h-[360px] w-[360px] rounded-full border border-black/10" />

            <div className="pointer-events-none absolute -bottom-20 -right-12 h-[240px] w-[240px] rounded-full border border-black/10" />

          </div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}

        <div className="mt-20 border-t border-black/10 pt-8">

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

            <p className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.035em] text-black/65 md:text-4xl">
              From AI-powered fraud detection to quantum-oriented digital
              security, my research focuses on turning technical ideas into
              systems with practical impact.
            </p>

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#111318] text-center text-[8px] font-semibold uppercase tracking-[0.12em] text-white">
              Research
              <br />
              +
              <br />
              Innovation
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}