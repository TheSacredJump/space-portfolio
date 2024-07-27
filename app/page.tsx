import Image from "next/image";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="h-full w-full min-w-full">
      <div className="w-full h-full flex flex-col gap-10 md:gap-20">
        <Hero />
        <About />
        <Skills />
        <Encryption />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
