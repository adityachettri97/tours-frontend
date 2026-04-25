import React from "react";
import { useNavigate } from "react-router-dom";
import AboutUS from "../images/Darjeeling3.jpeg";
const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div>
          <img src={AboutUS} alt="About Wanderlust Tours" className="w-full h-100 object-cover rounded-2xl shadow-lg" />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Wanderlust Tours</h2>
          <p className="text-gray-700 mb-4">
            At <span className="font-semibold">Wanderlust Tours</span>, we believe travel is more than just visiting new places – it’s about creating
            unforgettable experiences. With years of expertise, our mission is to help you explore the world with comfort, safety, and joy.
          </p>
          <p className="text-gray-700 mb-6">
            Whether you’re dreaming of a luxury beach escape, a cultural city tour, or an adventure in the mountains, our curated packages ensure
            every journey is special. Thousands of happy travelers trust us each year to make their trips memorable.
          </p>
          <button onClick={() => navigate("/about")} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
