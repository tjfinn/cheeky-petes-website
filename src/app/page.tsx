import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import Problem from "@/components/Problem";
import Marquee from "@/components/Marquee";
import MeetPete from "@/components/MeetPete";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      {/* Fixed nav overlay */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      <main>
        <Hero />
        <Products />
        <Features />
        <Problem />
        <Marquee />
        <MeetPete />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
