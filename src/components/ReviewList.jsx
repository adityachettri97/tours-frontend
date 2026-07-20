import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import config from "../config";
import AdminNav from "./AdminNav";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${config.API_URL}/api/reviews`);
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews", err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${config.API_URL}/api/reviews/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      fetchReviews();
    } catch (err) {
      console.error("Error deleting review", err);
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">All Reviews</h2>
        <div className="flex gap-4">
          <button onClick={() => navigate("/upload-review")} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Add Review
          </button>
          <LogoutButton />
        </div>
      </div>

      <AdminNav />

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review._id} className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <p className="text-gray-700 italic mb-3">"{review.quote}"</p>
            <h4 className="font-semibold text-gray-800 mb-4">
              — {review.name}
              {review.location ? `, ${review.location}` : ""}
            </h4>

            <div className="flex gap-4">
              <button onClick={() => handleDelete(review._id)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Delete
              </button>
              <button
                onClick={() => navigate(`/edit-review/${review._id}`)}
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

export default ReviewList;
