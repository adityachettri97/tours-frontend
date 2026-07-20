import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";

const EditReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchReview = async () => {
      const res = await axios.get(`${config.API_URL}/api/reviews`);
      const review = res.data.find((r) => r._id === id);
      if (review) {
        setName(review.name);
        setLocation(review.location);
        setQuote(review.quote);
      }
    };
    fetchReview();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${config.API_URL}/api/reviews/${id}`,
        { name, location, quote },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      navigate("/reviews");
    } catch (err) {
      console.error("Update failed", err);
      alert("Update failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Traveler Name"
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="w-full border border-gray-300 p-2 rounded"
        />

        <textarea
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Review Quote"
          required
          rows={4}
          className="w-full border border-gray-300 p-2 rounded"
        />

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
          Update Review
        </button>
      </form>
    </div>
  );
};

export default EditReview;
