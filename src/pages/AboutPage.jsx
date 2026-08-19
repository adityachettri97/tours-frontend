import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import AboutUS from "../images/Darjeeling3.jpeg";
import config from "../config";
import getImageUrl from "../utils/getImageUrl";
import PublicIcon from "@mui/icons-material/Public";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ShieldIcon from "@mui/icons-material/Shield";

const defaultDescription = `At TravelPeak, we believe travel is more than just visiting new places – it's about
creating unforgettable experiences. Founded with a passion for exploration, our mission is to help you discover the world with
comfort, safety, and joy.

Whether you're dreaming of a luxury beach escape, a cultural city tour, or an adventure in the mountains, our curated packages ensure
every journey is special. Thousands of happy travelers trust us each year to make their trips memorable.`;

const AboutPage = () => {
  const [about, setAbout] = useState({ description: defaultDescription, imageUrl: "" });

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/api/about`);
        setAbout({
          description: res.data.description || defaultDescription,
          imageUrl: res.data.imageUrl || "",
        });
      } catch (err) {
        console.error("Error fetching about content", err);
      }
    };
    fetchAbout();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-32 mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">About TravelPeak</h1>
            <p className="text-xl animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              Your Gateway to Unforgettable Adventures
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <Reveal className="overflow-hidden rounded-2xl" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
              <img
                src={about.imageUrl ? getImageUrl(about.imageUrl) : AboutUS}
                alt="About TravelPeak"
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
              />
            </Reveal>
            <Reveal delay={150}>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              {about.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Reveal className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-premium hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional travel experiences that inspire, enrich, and transform our clients' lives through expertly crafted tours and
                personalized service.
              </p>
            </Reveal>
            <Reveal delay={150} className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-premium hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-gray-700">
                To be the world's most trusted travel companion, known for creating meaningful connections between travelers and the destinations they
                explore.
              </p>
            </Reveal>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <Reveal as="h2" className="text-3xl font-bold mb-8 text-center">
              Why Choose TravelPeak?
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { Icon: PublicIcon, title: "Expert Guidance", desc: "Our experienced travel experts ensure every detail is perfect, from planning to execution." },
                { Icon: AutoAwesomeIcon, title: "Curated Experiences", desc: "Handpicked destinations and activities designed to create lasting memories." },
                { Icon: ShieldIcon, title: "Safe & Reliable", desc: "Your safety and comfort are our top priorities, with 24/7 support available." },
              ].map(({ Icon, title, desc }, i) => (
                <Reveal
                  key={title}
                  delay={i * 120}
                  className="group bg-white p-6 rounded-xl shadow-md text-center transition-all duration-300 hover:shadow-premium hover:-translate-y-2"
                >
                  <Icon className="text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1" style={{ fontSize: 40 }} />
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <Reveal className="bg-blue-600 text-white rounded-2xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                ["15+", "Years of Experience"],
                ["50K+", "Happy Travelers"],
                ["200+", "Destinations"],
                ["98%", "Satisfaction Rate"],
              ].map(([value, label]) => (
                <div key={label} className="transition-transform duration-300 hover:scale-110">
                  <div className="text-4xl font-bold mb-2">{value}</div>
                  <div className="text-lg">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
