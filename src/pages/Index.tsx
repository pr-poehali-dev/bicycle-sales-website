
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBikes from "@/components/FeaturedBikes";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedBikes />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
