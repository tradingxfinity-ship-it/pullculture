import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import TopPulls from "@/sections/TopPulls";
import ContentGrid from "@/sections/ContentGrid";
import PromoBanner from "@/sections/PromoBanner";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-magma-black">
      <Navbar />
      <Hero />
      <TopPulls />
      <ContentGrid />
      <PromoBanner />
      <Footer />
    </main>
  );
}
