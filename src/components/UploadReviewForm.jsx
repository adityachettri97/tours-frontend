import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const UploadReviewForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    quote: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${config.API_URL}/api/reviews`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Review added!");
      navigate("/reviews");
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Error adding review.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md relative">
        <IconButton
          onClick={() => navigate("/reviews")}
          aria-label="Cancel"
          className="!absolute !top-3 !right-3 !text-gray-500 hover:!text-gray-700"
        >
          <CloseIcon />
        </IconButton>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Review</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Traveler Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />

          <input
            type="text"
            name="location"
            placeholder="Location (e.g. USA)"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />

          <textarea
            name="quote"
            placeholder="Review Quote"
            value={formData.quote}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring focus:ring-blue-200"
            rows={4}
          />

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Add Review
          </button>
        </form>

        {message && <p className="mt-4 text-red-600 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default UploadReviewForm;
