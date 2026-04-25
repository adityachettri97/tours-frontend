import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Darjeeling1 from "../images/Darjeeling1.jpeg";
import Darjeeling2 from "../images/Darjeeling2.jpeg";
import Darjeeling3 from "../images/Darjeeling3.jpeg";
import Darjeeling4 from "../images/Darjeeling4.jpeg";
import Kalimpong1 from "../images/Kalimpong1.jpeg";
import Kalimpong2 from "../images/Kalimpong2.jpeg";
import Kalimpong3 from "../images/Kalimpong3.jpeg";
import Kalimpong4 from "../images/Kalimpong4.jpeg";
import Sikkim1 from "../images/sikkim1.jpeg";
import Sikkim2 from "../images/sikkim2.jpeg";
import Sikkim3 from "../images/sikkim3.jpeg";
import Sikkim4 from "../images/sikkim4.jpeg";

const Destinations = () => {
  const { destination } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (destination) {
      const element = document.getElementById(destination.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [destination]);

  const destinations = {
    darjeeling: {
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
    },
    kalimpong: {
      name: "Kalimpong",
      title: "The Hill Station Paradise",
      description:
        "Kalimpong is a serene hill station known for its Buddhist monasteries, stunning orchids, and panoramic views of the Himalayas. This charming town offers a peaceful retreat with its colonial architecture and vibrant local markets.",
      highlights: ["Durpin Monastery", "Deolo Hill", "Kalimpong Cactus Nursery", "Mangal Dham Temple", "Pine View Nursery", "Dr. Graham's Homes"],
      images: [Kalimpong1, Kalimpong2, Kalimpong3, Kalimpong4],
      bestTime: "March to June, September to November",
      duration: "2-3 Days",
    },
    sikkim: {
      name: "Sikkim",
      title: "The Land of Mystical Mountains",
      description:
        "Sikkim is a breathtaking state in Northeast India, known for its pristine beauty, snow-capped peaks, and rich Buddhist culture. From the majestic Kanchenjunga to serene monasteries and vibrant festivals, Sikkim offers an unforgettable Himalayan experience.",
      highlights: ["Tsomgo Lake", "Nathula Pass", "Rumtek Monastery", "Gangtok City Tour", "Yumthang Valley", "Pelling Skywalk"],
      images: [Sikkim1, Sikkim2, Sikkim3, Sikkim4],
      bestTime: "March to June, September to December",
      duration: "5-7 Days",
    },
  };

  const handleBookNow = (destinationName) => {
    navigate("/book-now", { state: { destination: destinationName } });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 mt-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Explore Our Destinations</h1>
            <p className="text-xl">Discover the beauty of the Eastern Himalayas</p>
          </div>
        </div>

        {/* Destinations */}
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
          {Object.entries(destinations).map(([key, dest]) => (
            <section key={key} id={key} className="scroll-mt-32">
              {/* Destination Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-3">{dest.name}</h2>
                <p className="text-xl text-blue-600 italic">{dest.title}</p>
              </div>

              {/* Main Content */}
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-4">
                  {dest.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${dest.name} ${index + 1}`}
                      className={`rounded-lg shadow-lg object-cover ${index === 0 ? "col-span-2 h-80" : "h-48"}`}
                    />
                  ))}
                </div>

                {/* Description */}
                <div className="flex flex-col justify-center">
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">{dest.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-gray-800 mb-2">🗓️ Best Time to Visit</h4>
                      <p className="text-gray-600">{dest.bestTime}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-gray-800 mb-2">⏱️ Recommended Duration</h4>
                      <p className="text-gray-600">{dest.duration}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBookNow(dest.name)}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Book Now
                  </button>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Top Attractions</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {dest.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                      <span className="text-blue-600 text-2xl">✓</span>
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-lg mb-8">Contact us today to plan your perfect Himalayan getaway</p>
            <button
              onClick={() => navigate("/book-now")}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold"
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Destinations;
