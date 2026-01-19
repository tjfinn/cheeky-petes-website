import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Problem from "@/components/Problem";
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
        <Problem />
      </main>
      <Footer />
    </div>
  );
}
