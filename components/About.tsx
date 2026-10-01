import CertificationShowcase from "@/components/CertificationShowcase";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-black/10 bg-white px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section label */}
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#3157ff]">
          02 / About
        </p>

        {/* About content */}
        <div className="mt-12 grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Main statement */}
          <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.07em] md:text-7xl">
            I&apos;m interested in the space where
            <span className="text-[#3157ff]"> software</span>,
            <span className="text-black/30"> intelligence</span> and
            <span className="text-black/30"> emerging technology</span> meet.
          </h2>

          {/* Description + skills */}
          <div className="lg:pt-4">
            <p className="text-base leading-relaxed text-black/50">
              I&apos;m a full-stack developer focused on building practical
              digital products while exploring artificial intelligence,
              security and quantum computing.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {/* Full Stack */}
              <div className="group rounded-2xl bg-[#f5f5f0] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-2xl font-semibold">01</p>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-widest text-black/40">
                  Full Stack
                </p>
              </div>

              {/* AI / ML */}
              <div className="group rounded-2xl bg-[#f5f5f0] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-2xl font-semibold">02</p>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-widest text-black/40">
                  AI / ML
                </p>
              </div>

              {/* Quantum */}
              <div className="group rounded-2xl bg-[#111318] p-5 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-2xl font-semibold">03</p>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Quantum
                </p>
              </div>

              {/* Research */}
              <div className="group rounded-2xl bg-[#c8ff38] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-2xl font-semibold">04</p>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-widest text-black/50">
                  Research
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CERTIFICATIONS
        ===================================================== */}

        <CertificationShowcase />
      </div>
    </section>
  );
}