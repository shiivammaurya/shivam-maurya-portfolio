export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#111318] px-5 py-10 text-white md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* Brand */}

          <div>
            <p className="text-3xl font-semibold tracking-[-0.05em]">
              Shivam<span className="text-[#3157ff]">.</span>
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/30">
              Full Stack · AI · Quantum
            </p>
          </div>

          {/* Navigation */}

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="#work"
              className="text-[10px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-white"
            >
              Work
            </a>

            <a
              href="#about"
              className="text-[10px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="#research"
              className="text-[10px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-white"
            >
              Research
            </a>

            <a
              href="#experience"
              className="text-[10px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-white"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="text-[10px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">
            © 2026 Shivam Maurya
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/shiivammaurya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.16em] text-white/30 transition-colors hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/shiivam-maurya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.16em] text-white/30 transition-colors hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:sj.shivam03@gmail.com"
              className="text-[10px] uppercase tracking-[0.16em] text-white/30 transition-colors hover:text-white"
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}