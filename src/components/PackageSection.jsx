import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";
import getImageUrl from "../utils/getImageUrl";

// ✅ Import images directly from src/images
import Sikkim from "../images/Sikkim.jpg";
import Kalimpong from "../images/Kalimpong.jpg";
import Darjeeling from "../images/Darjeeling.jpg";

// Fallback packages if API fails or is empty
const fallbackPackages = [
  {
    title: "Darjeeling",
    desc: "5 nights in Darjeeling with city tours & tea plantation visits.",
    price: "₹899",
    img: Darjeeling,
  },
  {
    title: "Kalimpong",
    desc: "3 nights in luxury water villa with snorkeling package.",
    price: "₹1299",
    img: Kalimpong,
  },
  {
    title: "Sikkim",
    desc: "7 nights in Sikkim with train journey & hikes.",
    price: "₹1599",
    img: Sikkim,
  },
];

const PackageSection = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/packages`);
        setPackages(response.data.length ? response.data : fallbackPackages);
      } catch (error) {
        console.error("Error fetching packages:", error);
        setPackages(fallbackPackages);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Packages</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading packages...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={pkg.img || getImageUrl(pkg.imageUrl)} alt={pkg.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-700 mb-3">{pkg.desc || pkg.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold">{pkg.price}</span>
                  <button onClick={() => navigate("/book-now")} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PackageSection;
