import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Features from "@/components/Features";
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
        <About />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
