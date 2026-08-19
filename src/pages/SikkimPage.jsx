import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Sikkim1 from "../images/sikkim1.jpeg";
import Sikkim2 from "../images/sikkim2.jpeg";
import Sikkim3 from "../images/sikkim3.jpeg";
import Sikkim4 from "../images/sikkim4.jpeg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FlightIcon from "@mui/icons-material/Flight";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SikkimPage = () => {
  const navigate = useNavigate();

  const destination = {
    name: "Sikkim",
    title: "The Land of Mystical Mountains",
    description:
      "Sikkim is a breathtaking state in Northeast India, known for its pristine beauty, snow-capped peaks, and rich Buddhist culture. From the majestic Kanchenjunga to serene monasteries and vibrant festivals, Sikkim offers an unforgettable Himalayan experience.",
    highlights: ["Tsomgo Lake", "Nathula Pass", "Rumtek Monastery", "Gangtok City Tour", "Yumthang Valley", "Pelling Skywalk"],
    images: [Sikkim1, Sikkim2, Sikkim3, Sikkim4],
    bestTime: "March to June, September to December",
    duration: "5-7 Days",
  };

  const handleBookNow = () => {
    navigate("/book-now", { state: { destination: destination.name } });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-32 mt-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">{destination.name}</h1>
            <p className="text-2xl italic animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              {destination.title}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Image Gallery */}
            <Reveal className="grid grid-cols-2 gap-4">
              {destination.images.map((img, index) => (
                <div key={index} className={`overflow-hidden rounded-lg shadow-lg ${index === 0 ? "col-span-2 h-80" : "h-48"}`}>
                  <img
                    src={img}
                    alt={`${destination.name} ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </Reveal>

            {/* Description */}
            <Reveal delay={150} className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About {destination.name}</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">{destination.description}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-premium hover:-translate-y-1">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
                    <CalendarMonthIcon fontSize="small" /> Best Time to Visit
                  </h4>
                  <p className="text-gray-600">{destination.bestTime}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-premium hover:-translate-y-1">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
                    <AccessTimeIcon fontSize="small" /> Recommended Duration
                  </h4>
                  <p className="text-gray-600">{destination.duration}</p>
                </div>
              </div>

              <button
                onClick={handleBookNow}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-glow transform hover:-translate-y-1 active:translate-y-0 self-start"
              >
                Book Now
              </button>
            </Reveal>
          </div>

          {/* Highlights */}
          <Reveal className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Top Attractions</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {destination.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:bg-purple-50 hover:-translate-y-1 hover:shadow-md"
                >
                  <CheckCircleIcon className="text-purple-600" fontSize="medium" />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-premium">
              <h3 className="text-xl font-bold text-gray-800 mb-4">How to Reach</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <FlightIcon className="text-purple-600 mr-2" fontSize="small" />
                  <span>
                    <strong>By Air:</strong> Pakyong Airport (30 km from Gangtok)
                  </span>
                </li>
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <TrainIcon className="text-purple-600 mr-2" fontSize="small" />
                  <span>
                    <strong>By Train:</strong> New Jalpaiguri Railway Station (148 km)
                  </span>
                </li>
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <DirectionsCarIcon className="text-purple-600 mr-2" fontSize="small" />
                  <span>
                    <strong>By Road:</strong> Well connected via NH-10
                  </span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={150} className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-premium">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What to Pack</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <FiberManualRecordIcon className="text-purple-600 mr-2" style={{ fontSize: 10, marginTop: 6 }} />
                  <span>Heavy woolens (especially for high altitude areas)</span>
                </li>
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <FiberManualRecordIcon className="text-purple-600 mr-2" style={{ fontSize: 10, marginTop: 6 }} />
                  <span>Trekking shoes for mountain trails</span>
                </li>
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <FiberManualRecordIcon className="text-purple-600 mr-2" style={{ fontSize: 10, marginTop: 6 }} />
                  <span>Valid ID proof (required for permits)</span>
                </li>
                <li className="flex items-start transition-transform duration-200 hover:translate-x-1">
                  <FiberManualRecordIcon className="text-purple-600 mr-2" style={{ fontSize: 10, marginTop: 6 }} />
                  <span>Altitude sickness medication</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-purple-600 text-white py-16">
          <Reveal className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Sikkim?</h2>
            <p className="text-lg mb-8">Book your Sikkim tour package today and discover the magic of the Himalayas</p>
            <button
              onClick={handleBookNow}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
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

export default SikkimPage;
