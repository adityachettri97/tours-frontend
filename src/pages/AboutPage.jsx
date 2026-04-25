import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUS from "../images/Darjeeling3.jpeg";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-32 mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">About Wanderlust Tours</h1>
            <p className="text-xl">Your Gateway to Unforgettable Adventures</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={AboutUS}
                alt="About Wanderlust Tours"
                className="w-full h-96 object-cover rounded-2xl "
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                At <span className="font-semibold">Wanderlust Tours</span>, we believe travel is more than just visiting new places – it's about
                creating unforgettable experiences. Founded with a passion for exploration, our mission is to help you discover the world with
                comfort, safety, and joy.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you're dreaming of a luxury beach escape, a cultural city tour, or an adventure in the mountains, our curated packages ensure
                every journey is special. Thousands of happy travelers trust us each year to make their trips memorable.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional travel experiences that inspire, enrich, and transform our clients' lives through expertly crafted tours and
                personalized service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-gray-700">
                To be the world's most trusted travel companion, known for creating meaningful connections between travelers and the destinations they
                explore.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Wanderlust Tours?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
                <p className="text-gray-700">Our experienced travel experts ensure every detail is perfect, from planning to execution.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-3">Curated Experiences</h3>
                <p className="text-gray-700">Handpicked destinations and activities designed to create lasting memories.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">Safe & Reliable</h3>
                <p className="text-gray-700">Your safety and comfort are our top priorities, with 24/7 support available.</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-blue-600 text-white rounded-2xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-lg">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-lg">Happy Travelers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-lg">Destinations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
