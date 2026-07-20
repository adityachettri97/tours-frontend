import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";
import getImageUrl from "../utils/getImageUrl";
import LogoutButton from "./LogoutButton";
import AdminNav from "./AdminNav";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const EditAbout = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/api/about`);
        setTitle(res.data.title || "");
        setDescription(res.data.description || "");
        setCurrentImageUrl(res.data.imageUrl || "");
      } catch (err) {
        console.error("Error fetching about content", err);
      }
    };
    fetchAbout();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setSuccess(false);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (newImage) formData.append("image", newImage);

    try {
      const res = await axios.put(`${config.API_URL}/api/about`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCurrentImageUrl(res.data.imageUrl || "");
      setNewImage(null);
      setSuccess(true);
      setMessage("About section updated successfully!");
    } catch (err) {
      console.error("Error updating about content", err);
      setMessage(err.response?.data?.message || "Update failed.");
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-100">
      <div className="flex items-center justify-between mb-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Edit About Section</h2>
        <LogoutButton />
      </div>

      <AdminNav />

      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6 mt-4 relative">
        <IconButton
          onClick={() => navigate("/tours")}
          aria-label="Cancel"
          className="!absolute !top-3 !right-3 !text-gray-500 hover:!text-gray-700"
        >
          <CloseIcon />
        </IconButton>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={6}
            className="w-full border border-gray-300 p-2 rounded"
          />

          {currentImageUrl && (
            <div>
              <p className="text-sm text-gray-500 mb-2">Current image</p>
              <img src={getImageUrl(currentImageUrl)} alt="About" className="w-full h-48 object-cover rounded border" />
            </div>
          )}

          <div>
            <label className="block mb-2 font-medium">Replace Image</label>
            <input type="file" accept="image/*" onChange={(e) => setNewImage(e.target.files[0])} className="w-full" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Save Changes
          </button>
        </form>

        {message && (
          <div className={`alert ${success ? "alert-success" : "alert-danger"} mt-4 mb-0 text-center py-2`} role="alert">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditAbout;
