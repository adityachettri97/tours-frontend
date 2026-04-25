import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import config from "./config";

const TourList = () => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

  const fetchTours = async () => {
    try {
      const res = await axios.get(`${config.API_URL}/api/tours`);
      setTours(res.data);
    } catch (err) {
      console.error("Error fetching tours", err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${config.API_URL}/api/tours/${id}`);
      fetchTours();
    } catch (err) {
      console.error("Error deleting tour", err);
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-100">
      {/* Header with Upload and Logout */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">All Tours</h2>
        <div className="flex gap-4">
          <button onClick={() => navigate("/upload")} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Upload Tour
          </button>
          <LogoutButton /> {/* 🔁 Add logout button here */}
        </div>
      </div>

      {/* Tour Cards */}
      <div className="space-y-6">
        {tours.map((tour) => (
          <div key={tour._id} className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{tour.title}</h3>
            <p className="text-gray-600 mb-4">{tour.description}</p>

            {tour.imageUrls && tour.imageUrls.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-4">
                {tour.imageUrls.map((url, index) => (
                  <img key={index} src={`${config.API_URL}${url}`} alt={`tour-${index}`} className="w-40 h-30 object-cover rounded" />
                ))}
              </div>
            )}

            <div className="flex gap-4">
              <button onClick={() => handleDelete(tour._id)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Delete
              </button>
              <button
                onClick={() => navigate(`/edit/${tour._id}`)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourList;
