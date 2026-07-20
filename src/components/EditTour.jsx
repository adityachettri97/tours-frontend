// src/pages/EditTour.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";
import getImageUrl from "../utils/getImageUrl";

const EditTour = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [existingImageUrls, setExistingImageUrls] = useState([]);
  const [newImages, setNewImages] = useState([]);

  useEffect(() => {
    const fetchTour = async () => {
      const res = await axios.get(`${config.API_URL}/api/tours`);
      const tour = res.data.find((t) => t._id === id);
      if (tour) {
        setTitle(tour.title);
        setDescription(tour.description);
        setExistingImageUrls(tour.imageUrls || []);
      }
    };
    fetchTour();
  }, [id]);

  const handleNewImagesChange = (e) => {
    setNewImages((prev) => [...prev, ...Array.from(e.target.files)]);
  };

  const removeExistingImage = (urlToRemove) => {
    setExistingImageUrls((prev) => prev.filter((url) => url !== urlToRemove));
  };

  const removeNewImage = (indexToRemove) => {
    setNewImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("existingImages", JSON.stringify(existingImageUrls));
    newImages.forEach((img) => formData.append("images", img));

    try {
      await axios.put(`${config.API_URL}/api/tours/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/tours");
    } catch (err) {
      console.error("Update failed", err);
      alert("Update failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit Tour</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <div>
          <label className="block mb-2 font-medium">Upload New Images</label>
          <input type="file" accept="image/*" multiple onChange={handleNewImagesChange} className="w-full" />
        </div>

        {/* Existing images */}
        <div>
          <h4 className="font-semibold mt-4 mb-2">Existing Images</h4>
          {existingImageUrls.length === 0 ? (
            <p className="text-gray-500">No existing images</p>
          ) : (
            existingImageUrls.map((url, index) => (
              <div key={index} className="flex items-center mb-3">
                <img src={getImageUrl(url)} alt="tour" className="w-24 h-30 object-cover mr-4 rounded border" />
                <button type="button" onClick={() => removeExistingImage(url)} className="text-red-600 hover:text-red-800">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* New image previews */}
        <div>
          <h4 className="font-semibold mt-4 mb-2">New Images</h4>
          {newImages.length === 0 ? (
            <p className="text-gray-500">No new images</p>
          ) : (
            newImages.map((img, index) => (
              <div key={index} className="flex items-center mb-3">
                <img src={URL.createObjectURL(img)} alt="preview" className="w-24 h-30 object-cover mr-4 rounded border" />
                <button type="button" onClick={() => removeNewImage(index)} className="text-red-600 hover:text-red-800">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
          Update Tour
        </button>
      </form>
    </div>
  );
};

export default EditTour;
