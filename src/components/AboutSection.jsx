import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AboutUS from "../images/Darjeeling3.jpeg";
import config from "../config";
import getImageUrl from "../utils/getImageUrl";

const defaultTitle = "About TravelPeak";
const defaultDescription = `At TravelPeak, we believe travel is more than just visiting new places – it's about creating
unforgettable experiences. With years of expertise, our mission is to help you explore the world with comfort, safety, and joy.

Whether you're dreaming of a luxury beach escape, a cultural city tour, or an adventure in the mountains, our curated packages ensure
every journey is special. Thousands of happy travelers trust us each year to make their trips memorable.`;

const AboutSection = () => {
  const navigate = useNavigate();
  const [about, setAbout] = useState({ title: defaultTitle, description: defaultDescription, imageUrl: "" });

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/api/about`);
        setAbout({
          title: res.data.title || defaultTitle,
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
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div>
          <img
            src={about.imageUrl ? getImageUrl(about.imageUrl) : AboutUS}
            alt={about.title}
            className="w-full h-100 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{about.title}</h2>
          {about.description.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-gray-700 mb-4">
              {paragraph}
            </p>
          ))}
          <button onClick={() => navigate("/about")} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
