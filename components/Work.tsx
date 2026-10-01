const krishiSyncUrl = "https://lnkd.in/g8FA7WHa";

const technologies = [
  "Next.js",
  "React",
  "Node.js",
  "AI",
  "AgriTech",
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-black/10 bg-[#fafaf7] px-5 py-28 md:px-10 md:py-40"
    >
      {/* =====================================================
          BACKGROUND COLOR BLOBS
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-[#d9e2ff]/70 blur-[100px]" />

      <div className="pointer-events-none absolute right-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-[#e8d9ff]/70 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-[-200px] left-[35%] h-[450px] w-[450px] rounded-full bg-[#e5f7c8]/70 blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#3157ff]">
              01 / Selected Work
            </p>

            <h2 className="mt-5 text-6xl font-semibold leading-[0.82] tracking-[-0.08em] md:text-8xl">
              Work
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-black/40 md:pb-2">
            Building digital products where technology, intelligence and
            real-world problems meet.
          </p>

        </div>

        {/* =====================================================
            KRISHISYNC FEATURE
        ===================================================== */}

        <div className="relative mt-16 md:mt-20">

          {/* Decorative background shape */}

          <div className="pointer-events-none absolute -right-10 top-20 h-72 w-72 rounded-full bg-[#3157ff]/10 blur-[80px]" />

          <div className="pointer-events-none absolute bottom-0 left-20 h-64 w-64 rounded-full bg-[#c8ff38]/20 blur-[70px]" />

          <a
            href={krishiSyncUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit KrishiSync website"
            className="group relative block overflow-hidden rounded-[38px] border border-black/[0.08] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(0,0,0,0.10)]"
          >

            {/* =================================================
                TOP PROJECT BAR
            ================================================= */}

            <div className="relative z-20 flex items-center justify-between border-b border-black/[0.07] px-6 py-5 md:px-10">

              <div className="flex items-center gap-4">

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111318] text-[9px] font-semibold text-white">
                  01
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/35">
                  Featured Project
                </span>

              </div>

              <div className="flex items-center gap-4">

                <span className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] text-black/25 sm:block">
                  Full Stack · AI · AgriTech
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-lg text-black transition-all duration-300 group-hover:border-[#3157ff] group-hover:bg-[#3157ff] group-hover:text-white">
                  ↗
                </span>

              </div>

            </div>

            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div className="relative grid min-h-[680px] lg:grid-cols-[0.95fr_1.05fr]">

              {/* =================================================
                  LEFT SIDE
              ================================================= */}

              <div className="relative z-10 flex flex-col justify-between p-7 md:p-12 lg:p-16">

                <div>

                  <div className="flex items-center gap-3">

                    <span className="h-2 w-2 rounded-full bg-[#15915b]" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#15915b]">
                      Intelligent Agriculture
                    </span>

                  </div>

                  <h3 className="mt-8 text-[clamp(4.5rem,9vw,8.5rem)] font-semibold leading-[0.73] tracking-[-0.095em] text-[#111318]">

                    Krishi
                    <br />

                    <span className="text-[#15915b] transition-colors duration-500 group-hover:text-[#3157ff]">
                      Sync
                    </span>

                  </h3>

                  <p className="mt-10 max-w-xl text-base leading-relaxed text-black/45 md:text-lg">
                    An intelligent digital agriculture platform connecting
                    farmers with AI-powered insights, agricultural services,
                    weather intelligence and smart communities.
                  </p>

                </div>

                {/* Technologies */}

                <div className="mt-12">

                  <p className="mb-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-black/25">
                    Technology
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-black/10 bg-[#f7f7f4] px-4 py-2.5 text-[9px] font-semibold text-black/50 transition-all duration-300 group-hover:border-black/15 group-hover:bg-white"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

              {/* =================================================
                  RIGHT VISUAL
              ================================================= */}

              <div className="relative min-h-[470px] overflow-hidden border-t border-black/[0.07] bg-[#f7f7f3] lg:border-l lg:border-t-0">

                {/* Color fields */}

                <div className="absolute -right-20 -top-20 h-[330px] w-[330px] rounded-full bg-[#d9e2ff] blur-[30px]" />

                <div className="absolute -bottom-24 -left-20 h-[300px] w-[300px] rounded-full bg-[#e6f7c8] blur-[30px]" />

                <div className="absolute right-1/4 top-1/3 h-44 w-44 rounded-full bg-[#f2dfff] blur-[30px]" />

                {/* =================================================
                    ABSTRACT AGRICULTURE ART
                ================================================= */}

                <div className="absolute inset-0 flex items-center justify-center">

                  {/* Main organic shape */}

                  <div className="relative h-[330px] w-[330px] md:h-[390px] md:w-[390px]">

                    {/* Outer ring */}

                    <div className="absolute inset-0 rounded-full border border-black/[0.06]" />

                    {/* Inner ring */}

                    <div className="absolute inset-10 rounded-full border border-black/[0.06]" />

                    {/* Green organic blob */}

                    <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[45%_55%_60%_40%] bg-[#15915b] shadow-[0_30px_80px_rgba(21,145,91,0.22)] transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">

                      <div className="absolute inset-7 rounded-[55%_45%_40%_60%] border border-white/20" />

                      {/* Leaf */}

                      <svg
                        className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-white"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M50 85C50 65 49 47 48 28"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        <path
                          d="M49 54C30 49 19 36 17 20C34 22 47 34 49 54Z"
                          fill="currentColor"
                        />

                        <path
                          d="M49 46C66 39 78 27 80 11C62 14 51 27 49 46Z"
                          fill="currentColor"
                        />
                      </svg>

                    </div>

                    {/* Floating nodes */}

                    <div className="absolute left-5 top-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg">
                      <span className="text-lg">🌱</span>
                    </div>

                    <div className="absolute right-0 top-16 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg">
                      <span className="text-lg">☁️</span>
                    </div>

                    <div className="absolute bottom-12 left-12 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg">
                      <span className="text-lg">📍</span>
                    </div>

                    <div className="absolute bottom-5 right-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c8ff38] shadow-lg">
                      <span className="text-lg">✦</span>
                    </div>

                  </div>

                </div>

                {/* Small label */}

                <div className="absolute left-6 top-6 rounded-full border border-black/10 bg-white/75 px-4 py-2.5 backdrop-blur-md md:left-10 md:top-10">

                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/40">
                    AI Agriculture
                  </span>

                </div>

                {/* Bottom label */}

                <div className="absolute bottom-6 right-6 rounded-full border border-black/10 bg-white/75 px-4 py-2.5 backdrop-blur-md md:bottom-10 md:right-10">

                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/40">
                    Built for farmers
                  </span>

                </div>

              </div>

            </div>

            {/* =================================================
                FOOTER CTA
            ================================================= */}

            <div className="relative z-20 flex flex-col justify-between gap-5 border-t border-black/[0.07] px-7 py-5 sm:flex-row sm:items-center md:px-10">

              <div className="flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-[#15915b]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                  Live Project
                </span>

              </div>

              <div className="flex items-center gap-4">

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40 transition-colors group-hover:text-[#3157ff]">
                  Explore KrishiSync
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111318] text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </div>

            </div>

          </a>

        </div>

      </div>
    </section>
  );
}