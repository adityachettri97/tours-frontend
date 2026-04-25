import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "./config";

const UploadTourForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    imageFile.forEach((file) => data.append("images", file));

    try {
      await axios.post(`${config.API_URL}/api/tours`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Tour uploaded!");
      // Navigate to tours list after successful upload
      navigate("/tours");
    } catch (err) {
      console.error(err);
      setMessage("❌ Error uploading tour.");
      alert("Upload failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Upload New Tour</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Tour Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />

          <textarea
            name="description"
            placeholder="Tour Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring focus:ring-blue-200"
            rows={4}
          />

          <input type="file" accept="image/*" multiple onChange={handleFileChange} required className="w-full" />

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Upload Tour
          </button>
        </form>

        {message && <p className="mt-4 text-red-600 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default UploadTourForm;
