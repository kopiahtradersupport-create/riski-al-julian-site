import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Business from "@/components/Business";
import Kopiah from "@/components/Kopiah";
import Stack from "@/components/Stack";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";

export default function Home() {
  return (
    <>
      <BackgroundCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Business />
        <Kopiah />
        <Stack />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
