import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import config from "../config";
import getImageUrl from "../utils/getImageUrl";

const DestinationDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/api/tours`);
        const match = res.data.find((t) => t.title.toLowerCase() === title.toLowerCase());
        setTour(match || null);
      } catch (err) {
        console.error("Error fetching destination", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [title]);

  const handleBookNow = () => {
    navigate("/book-now", { state: { destination: tour?.title } });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Loading...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!tour) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-gray-600 text-lg">Destination not found.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow active:translate-y-0"
          >
            Back to Home
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const images = (tour.imageUrls || []).map(getImageUrl);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 mt-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">{tour.title}</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Image Gallery */}
            {images.length > 0 && (
              <Reveal className="grid grid-cols-2 gap-4">
                {images.map((img, index) => (
                  <div key={index} className={`overflow-hidden rounded-lg shadow-lg ${index === 0 ? "col-span-2 h-80" : "h-48"}`}>
                    <img
                      src={img}
                      alt={`${tour.title} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </Reveal>
            )}

            {/* Description */}
            <Reveal delay={150} className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About {tour.title}</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed whitespace-pre-line">{tour.description}</p>

              <button
                onClick={handleBookNow}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-glow transform hover:-translate-y-1 active:translate-y-0 self-start"
              >
                Book Now
              </button>
            </Reveal>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white py-16">
          <Reveal className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore {tour.title}?</h2>
            <p className="text-lg mb-8">Book your {tour.title} tour package today and create unforgettable memories</p>
            <button
              onClick={handleBookNow}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
            >
              Book Your Trip Now
            </button>
          </Reveal>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DestinationDetail;
