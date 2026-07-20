import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import config from "../config";
import getImageUrl from "../utils/getImageUrl";
import AdminNav from "./AdminNav";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${config.API_URL}/api/blog`);
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching blog posts", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${config.API_URL}/api/blog/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      fetchPosts();
    } catch (err) {
      console.error("Error deleting blog post", err);
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">All Blog Posts</h2>
        <div className="flex gap-4">
          <button onClick={() => navigate("/upload-blog")} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Upload Post
          </button>
          <LogoutButton />
        </div>
      </div>

      <AdminNav />

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.description}</p>

            {post.imageUrl && (
              <div className="mb-4">
                <img src={getImageUrl(post.imageUrl)} alt={post.title} className="w-40 h-30 object-cover rounded" />
              </div>
            )}

            <div className="flex gap-4">
              <button onClick={() => handleDelete(post._id)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Delete
              </button>
              <button
                onClick={() => navigate(`/edit-blog/${post._id}`)}
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

export default BlogList;
