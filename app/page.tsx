import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="noise min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <Hero />

      <Work />

      <About />

      <Research />

      <Experience />

      <Contact />

      <Footer />
    </main>
  );
}