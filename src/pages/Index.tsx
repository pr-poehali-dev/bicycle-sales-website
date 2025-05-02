
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBikes from "@/components/FeaturedBikes";
import ElectricBikes from "@/components/ElectricBikes";
import BikeSelector from "@/components/BikeSelector";
import Features from "@/components/Features";
import Reviews3D from "@/components/Reviews3D";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedBikes />
        <BikeSelector />
        <ElectricBikes />
        <Features />
        <Reviews3D />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
