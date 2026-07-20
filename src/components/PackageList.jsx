import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import config from "../config";
import getImageUrl from "../utils/getImageUrl";
import AdminNav from "./AdminNav";

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  const fetchPackages = async () => {
    try {
      const res = await axios.get(`${config.API_URL}/api/packages`);
      setPackages(res.data);
    } catch (err) {
      console.error("Error fetching packages", err);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${config.API_URL}/api/packages/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      fetchPackages();
    } catch (err) {
      console.error("Error deleting package", err);
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">All Packages</h2>
        <div className="flex gap-4">
          <button onClick={() => navigate("/upload-package")} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Upload Package
          </button>
          <LogoutButton />
        </div>
      </div>

      <AdminNav />

      <div className="space-y-6">
        {packages.map((pkg) => (
          <div key={pkg._id} className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{pkg.title}</h3>
            <p className="text-blue-600 font-bold mb-2">{pkg.price}</p>
            <p className="text-gray-600 mb-4">{pkg.description}</p>

            {pkg.imageUrl && (
              <div className="mb-4">
                <img src={getImageUrl(pkg.imageUrl)} alt={pkg.title} className="w-40 h-30 object-cover rounded" />
              </div>
            )}

            <div className="flex gap-4">
              <button onClick={() => handleDelete(pkg._id)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Delete
              </button>
              <button
                onClick={() => navigate(`/edit-package/${pkg._id}`)}
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

export default PackageList;
