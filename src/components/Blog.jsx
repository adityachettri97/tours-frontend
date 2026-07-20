import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

const fallbackPosts = [
  {
    id: "fallback-1",
    title: "Top 10 Tips for First-Time Travelers",
    description: "Pack smart, stay safe, and soak in every moment. Here's how to make your first trip unforgettable...",
    href: "/blogPage/top-10-tips-for-first-time-travelers",
  },
  {
    id: "fallback-2",
    title: "Why Solo Travel Can Change Your Life",
    description: "Traveling alone might seem scary, but it's also empowering. Here's why you should try it at least once...",
    href: "/blogPage/why-solo-travel-can-change-your-life",
  },
];

const Blog = () => {
  const [posts, setPosts] = useState(fallbackPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/api/blog`);
        if (res.data.length) {
          setPosts(
            res.data.slice(0, 2).map((post) => ({
              id: post._id,
              title: post.title,
              description: post.description,
              href: `/blogPage/post/${post._id}`,
            }))
          );
        }
      } catch (err) {
        console.error("Error fetching blog posts", err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Latest from Our Blog</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {posts.map((post) => (
          <div key={post.id}>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-2">{post.description}</p>
            <a href={post.href} className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
