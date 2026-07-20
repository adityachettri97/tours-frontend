import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";
import getImageUrl from "../utils/getImageUrl";

const EditPackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    const fetchPackage = async () => {
      const res = await axios.get(`${config.API_URL}/api/packages`);
      const pkg = res.data.find((p) => p._id === id);
      if (pkg) {
        setTitle(pkg.title);
        setDescription(pkg.description);
        setPrice(pkg.price);
        setCurrentImageUrl(pkg.imageUrl || "");
      }
    };
    fetchPackage();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    if (newImage) formData.append("image", newImage);

    try {
      await axios.put(`${config.API_URL}/api/packages/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate("/packages");
    } catch (err) {
      console.error("Update failed", err);
      alert("Update failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit Package</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
          className="w-full border border-gray-300 p-2 rounded"
        />

        {currentImageUrl && (
          <div>
            <p className="text-sm text-gray-500 mb-2">Current image</p>
            <img src={getImageUrl(currentImageUrl)} alt={title} className="w-40 h-30 object-cover rounded border" />
          </div>
        )}

        <div>
          <label className="block mb-2 font-medium">Replace Image</label>
          <input type="file" accept="image/*" onChange={(e) => setNewImage(e.target.files[0])} className="w-full" />
        </div>

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
          Update Package
        </button>
      </form>
    </div>
  );
};

export default EditPackage;
