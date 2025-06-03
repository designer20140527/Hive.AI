import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageSection from "../components/ImageSection";
import Functions from "../components/Functions";
import WhyChoose from "../components/WhyChoose";
import Tokenomics from "../components/Tokenomics";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ImageSection />
      <Functions />
      <WhyChoose />
      <Tokenomics />
      <FAQ />
      <Footer />
    </main>
  );
}
