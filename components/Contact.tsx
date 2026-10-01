"use client";

import { FormEvent, useState } from "react";

const contactLinks = [
  {
    id: "github",
    label: "GitHub",
    value: "@shiivammaurya",
    description: "Explore my repositories",
    href: "https://github.com/shiivammaurya",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Shivam Maurya",
    description: "Connect professionally",
    href: "https://www.linkedin.com/in/shivam-maurya/",
  },
  {
    id: "email",
    label: "Email",
    value: "sj.shivam03@gmail.com",
    description: "Send me a message",
    href: "mailto:sj.shivam03@gmail.com",
  },
];

const queryTypes = [
  "Project / Product",
  "Research Collaboration",
  "Internship / Opportunity",
  "Technical Discussion",
  "Other",
];

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.28c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.46v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44C23.2 24 24 23.22 24 22.26V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path
        d="M4 6.5h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m3 8 8 5.5a1.8 1.8 0 0 0 2 0L21 8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-5 w-5 ${className}`}
    >
      <path
        d="M5 19 19 5M8 5h11v11"
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
      aria-hidden="true"
      className="h-5 w-5"
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

function LinkIcon({ type }: { type: string }) {
  if (type === "github") return <GithubIcon />;
  if (type === "linkedin") return <LinkedinIcon />;
  return <MailIcon />;
}

export default function Contact() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      query || "Portfolio enquiry from Shivam Maurya website"
    );

    const body = encodeURIComponent(
      message ||
        "Hi Shivam,\n\nI would like to get in touch with you regarding..."
    );

    window.location.href = `mailto:sj.shivam03@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-black/[0.08] bg-[#f5f5f1] px-5 py-28 md:px-10 md:py-40"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute -left-48 top-20 h-[520px] w-[520px] rounded-full bg-[#dce5ff] blur-[120px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[30%] h-[520px] w-[520px] rounded-full bg-[#e8dcff] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[35%] h-[450px] w-[450px] rounded-full bg-[#e6f8c9] blur-[120px]" />

      <div className="relative mx-auto max-w-[1450px]">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#3157ff]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/35">
                05 / Contact
              </span>
            </div>

            <h2 className="mt-7 max-w-5xl text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.76] tracking-[-0.095em] text-[#111318]">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-[#3157ff]">meaningful.</span>
            </h2>
          </div>

          {/* Availability */}

          <div className="max-w-sm pb-3">

            <div className="inline-flex items-center gap-3 rounded-full border border-black/[0.08] bg-white/80 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#15915b] opacity-30" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#15915b]" />
              </span>

              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/45">
                Open to meaningful opportunities
              </span>

            </div>

            <p className="mt-7 text-sm leading-7 text-black/40">
              Have a project, research opportunity or an idea worth
              exploring? Tell me what you&apos;re working on and let&apos;s
              start a conversation.
            </p>

          </div>
        </div>

        {/* =====================================================
            MAIN CONTACT AREA
        ===================================================== */}

        <div className="relative mt-20 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">

          {/* =================================================
              QUERY FORM
          ================================================= */}

          <div className="relative overflow-hidden rounded-[36px] border border-black/[0.08] bg-white p-7 shadow-[0_25px_80px_rgba(0,0,0,0.05)] md:p-10 lg:p-12">

            {/* Decorative grid */}

            <div
              className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(49,87,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(49,87,255,0.05) 1px, transparent 1px)",
                backgroundSize: "45px 45px",
                maskImage:
                  "linear-gradient(to left, black, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to left, black, transparent)",
              }}
            />

            <div className="relative z-10">

              {/* Form header */}

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#3157ff]">
                    Start a conversation
                  </p>

                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.06em] text-[#111318] md:text-5xl">
                    What are we
                    <br />
                    building?
                  </h3>

                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#111318] text-[#c8ff38] sm:flex">
                  <SparkIcon />
                </div>

              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-12"
              >

                {/* Query */}

                <div>

                  <label
                    htmlFor="query"
                    className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30"
                  >
                    I&apos;m reaching out about
                  </label>

                  <div className="mt-3">

                    <select
                      id="query"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      className="w-full appearance-none rounded-2xl border border-black/[0.09] bg-[#f7f7f4] px-5 py-4 text-sm text-black/70 outline-none transition-all focus:border-[#3157ff] focus:bg-white focus:ring-4 focus:ring-[#3157ff]/10"
                    >
                      <option value="">
                        Select a conversation type
                      </option>

                      {queryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>

                  </div>
                </div>

                {/* Message */}

                <div className="mt-7">

                  <label
                    htmlFor="message"
                    className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30"
                  >
                    Tell me a little about it
                  </label>

                  <textarea
                    id="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Project idea, research collaboration, opportunity..."
                    rows={6}
                    className="mt-3 w-full resize-none rounded-2xl border border-black/[0.09] bg-[#f7f7f4] px-5 py-4 text-sm leading-7 text-black/70 outline-none placeholder:text-black/25 transition-all focus:border-[#3157ff] focus:bg-white focus:ring-4 focus:ring-[#3157ff]/10"
                  />

                </div>

                {/* Submit */}

                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-xs text-[10px] leading-5 text-black/30">
                    Clicking send will open your default email application
                    with your message prepared.
                  </p>

                  <button
                    type="submit"
                    className="group flex shrink-0 items-center justify-center gap-4 rounded-full bg-[#111318] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#3157ff] hover:shadow-[0_15px_40px_rgba(49,87,255,0.25)]"
                  >
                    Send enquiry

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c8ff38] text-black transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </span>
                  </button>

                </div>

              </form>

            </div>
          </div>

          {/* =================================================
              CONNECTION PANEL
          ================================================= */}

          <div className="relative overflow-hidden rounded-[36px] bg-[#111318] p-7 text-white md:p-9 lg:p-10">

            {/* Background glow */}

            <div className="pointer-events-none absolute -right-28 -top-28 h-[330px] w-[330px] rounded-full bg-[#3157ff]/30 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-24 h-[300px] w-[300px] rounded-full bg-[#c8ff38]/10 blur-[80px]" />

            {/* Orbital decoration */}

            <div className="pointer-events-none absolute right-[-70px] top-[35%] h-[250px] w-[250px] rounded-full border border-white/[0.07]" />

            <div className="pointer-events-none absolute right-[-20px] top-[42%] h-[150px] w-[150px] rounded-full border border-white/[0.07]" />

            <div className="relative z-10">

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Find me online
              </p>

              <h3 className="mt-5 max-w-xs text-3xl font-medium leading-[0.95] tracking-[-0.05em] md:text-4xl">
                Let&apos;s connect
                <br />
                beyond this page.
              </h3>

              {/* Social links */}

              <div className="mt-12 space-y-3">

                {contactLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.id === "email" ? undefined : "_blank"}
                    rel={
                      link.id === "email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.08]"
                  >

                    {/* Icon */}

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-white/70 transition-all duration-300 group-hover:bg-[#3157ff] group-hover:text-white">
                      <LinkIcon type={link.id} />
                    </span>

                    {/* Text */}

                    <span className="min-w-0 flex-1">

                      <span className="block text-[8px] font-semibold uppercase tracking-[0.2em] text-white/30">
                        {link.label}
                      </span>

                      <span className="mt-1 block truncate text-sm font-medium text-white/80">
                        {link.value}
                      </span>

                      <span className="mt-1 block text-[9px] text-white/25">
                        {link.description}
                      </span>

                    </span>

                    {/* Arrow */}

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-[#c8ff38]/40 group-hover:text-[#c8ff38]">
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </span>

                  </a>
                ))}

              </div>

              {/* Response note */}

              <div className="mt-8 border-t border-white/[0.08] pt-7">

                <div className="flex items-start gap-3">

                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#c8ff38]" />

                  <div>

                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/40">
                      Preferred collaboration
                    </p>

                    <p className="mt-2 text-xs leading-6 text-white/35">
                      Software projects, AI systems, cybersecurity,
                      research and technically ambitious ideas.
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* =====================================================
            QUICK CONTACT STRIP
        ===================================================== */}

        <div className="mt-5 grid gap-5 md:grid-cols-3">

          {/* Email */}

          <a
            href="mailto:sj.shivam03@gmail.com"
            className="group relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >

            <div className="flex items-center justify-between">

              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef1ff] text-[#3157ff] transition-transform duration-300 group-hover:scale-110">
                <MailIcon />
              </span>

              <ArrowIcon className="text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3157ff]" />

            </div>

            <p className="mt-8 text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
              Email
            </p>

            <p className="mt-2 truncate text-sm font-semibold text-[#111318]">
              sj.shivam03@gmail.com
            </p>

          </a>

          {/* GitHub */}

          <a
            href="https://github.com/shiivammaurya"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >

            <div className="flex items-center justify-between">

              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#111318] text-white transition-transform duration-300 group-hover:scale-110">
                <GithubIcon />
              </span>

              <ArrowIcon className="text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3157ff]" />

            </div>

            <p className="mt-8 text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
              GitHub
            </p>

            <p className="mt-2 text-sm font-semibold text-[#111318]">
              @shiivammaurya
            </p>

          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/shivam-maurya/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >

            <div className="flex items-center justify-between">

              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f4ff] text-[#0a66c2] transition-transform duration-300 group-hover:scale-110">
                <LinkedinIcon />
              </span>

              <ArrowIcon className="text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3157ff]" />

            </div>

            <p className="mt-8 text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
              LinkedIn
            </p>

            <p className="mt-2 text-sm font-semibold text-[#111318]">
              Shivam Maurya
            </p>

          </a>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-black/[0.08] pt-8 md:flex-row md:items-center">

          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#c8ff38]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/30">
              Available for meaningful work
            </span>

          </div>

          <p className="max-w-lg text-xs leading-6 text-black/35 md:text-right">
            Good ideas usually start with a simple conversation. If you have
            something interesting in mind, I&apos;d like to hear about it.
          </p>

        </div>
      </div>
    </section>
  );
}