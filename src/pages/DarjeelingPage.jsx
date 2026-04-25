import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Darjeeling1 from "../images/Darjeeling1.jpeg";
import Darjeeling2 from "../images/Darjeeling2.jpeg";
import Darjeeling3 from "../images/Darjeeling3.jpeg";
import Darjeeling4 from "../images/Darjeeling4.jpeg";

const DarjeelingPage = () => {
  const navigate = useNavigate();

  const destination = {
    name: "Darjeeling",
    title: "The Queen of Hills",
    description:
      "Darjeeling, known as the 'Queen of Hills,' is a picturesque town nestled in the Eastern Himalayas. Famous for its tea gardens, stunning views of Kanchenjunga, and the iconic toy train, Darjeeling offers a perfect blend of natural beauty and colonial charm.",
    highlights: [
      "Tiger Hill Sunrise View",
      "Darjeeling Himalayan Railway (Toy Train)",
      "Tea Garden Tours",
      "Batasia Loop",
      "Peace Pagoda",
      "Himalayan Mountaineering Institute",
    ],
    images: [Darjeeling1, Darjeeling2, Darjeeling3, Darjeeling4],
    bestTime: "March to May, October to December",
    duration: "3-4 Days",
  };

  const handleBookNow = () => {
    navigate("/book-now", { state: { destination: destination.name } });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 mt-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">{destination.name}</h1>
            <p className="text-2xl italic">{destination.title}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {destination.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${destination.name} ${index + 1}`}
                  className={`rounded-lg shadow-lg object-cover ${index === 0 ? "col-span-2 h-80" : "h-48"}`}
                />
              ))}
            </div>

            {/* Description */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About {destination.name}</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">{destination.description}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">🗓️ Best Time to Visit</h4>
                  <p className="text-gray-600">{destination.bestTime}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">⏱️ Recommended Duration</h4>
                  <p className="text-gray-600">{destination.duration}</p>
                </div>
              </div>

              <button
                onClick={handleBookNow}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Top Attractions</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {destination.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-blue-600 text-2xl">✓</span>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">How to Reach</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✈️</span>
                  <span>
                    <strong>By Air:</strong> Bagdogra Airport (95 km)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🚂</span>
                  <span>
                    <strong>By Train:</strong> New Jalpaiguri Railway Station (88 km)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">🚗</span>
                  <span>
                    <strong>By Road:</strong> Well connected by road from major cities
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What to Pack</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Warm clothing (especially for early mornings)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Comfortable walking shoes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Sunscreen and sunglasses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Camera for capturing scenic views</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Darjeeling?</h2>
            <p className="text-lg mb-8">Book your Darjeeling tour package today and create unforgettable memories</p>
            <button
              onClick={handleBookNow}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Book Your Trip Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DarjeelingPage;
