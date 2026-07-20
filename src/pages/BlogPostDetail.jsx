import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import config from "../config";
import getImageUrl from "../utils/getImageUrl";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BlogPostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/api/blog/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching blog post", err);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="pt-36 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {post ? (
            <>
              {post.imageUrl && (
                <img src={getImageUrl(post.imageUrl)} alt={post.title} className="w-full h-72 object-cover rounded-2xl mb-8 shadow-md" />
              )}
              <h1 className="text-4xl font-bold mb-6 text-gray-800">{post.title}</h1>
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{post.description}</p>
            </>
          ) : (
            <p className="text-gray-500">Loading...</p>
          )}

          <div className="mt-10">
            <Link to="/blogPage" className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium text-base">
              <ArrowBackIcon fontSize="small" /> Back to Blog
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPostDetail;
