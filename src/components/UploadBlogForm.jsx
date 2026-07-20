import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const UploadBlogForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    if (imageFile) data.append("image", imageFile);

    try {
      await axios.post(`${config.API_URL}/api/blog`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Blog post uploaded!");
      navigate("/blogs");
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Error uploading blog post.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md relative">
        <IconButton
          onClick={() => navigate("/blogs")}
          aria-label="Cancel"
          className="!absolute !top-3 !right-3 !text-gray-500 hover:!text-gray-700"
        >
          <CloseIcon />
        </IconButton>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Upload New Blog Post</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Post Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />

          <textarea
            name="description"
            placeholder="Post Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring focus:ring-blue-200"
            rows={5}
          />

          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} required className="w-full" />

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Upload Post
          </button>
        </form>

        {message && <p className="mt-4 text-red-600 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default UploadBlogForm;
