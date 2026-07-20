import React from "react";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import DestinationSection from "../components/DestinationSection";
import PackageSection from "../components/PackageSection";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <HeroCarousel />
      {/* About Section */}
      <AboutSection />
      {/* Featured Destinations */}
      <DestinationSection />
      {/* Package Section */}
      <PackageSection />
      {/* Testimonials */}
      <Testimonials />

      {/* Blog Preview */}
      <Blog />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
