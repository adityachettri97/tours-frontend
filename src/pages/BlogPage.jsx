import React from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Example images, you can replace these with real ones
import BlogImg1 from "../images/Darjeeling2.jpeg";
import BlogImg2 from "../images/Kalimpong2.jpeg";
import BlogImg3 from "../images/sikkim2.jpeg";
import Blog from "../images/Sikkim.jpg";
import Footer from "../components/Footer";

const BlogPage = () => {
  const carouselImages = [Blog];
  const blogs = [
    {
      slug: "top-10-tips-for-first-time-travelers",
      title: "Top 10 Tips for First-Time Travelers",
      date: "August 20, 2025",
      image: BlogImg1,
      content: `Traveling for the first time can be overwhelming.
      From packing efficiently to understanding local cultures, here are 10 essential tips...`,
    },
    {
      slug: "why-solo-travel-can-change-your-life",
      title: "Why Solo Travel Can Change Your Life",
      date: "August 15, 2025",
      image: BlogImg2,
      content: `Solo travel opens doors to self-discovery, confidence, and freedom.
      In this article, we explore why everyone should try it at least once...`,
    },
    {
      slug: "hidden-gems-in-europe-you-must-visit",
      title: "Hidden Gems in Europe You Must Visit",
      date: "August 10, 2025",
      image: BlogImg3,
      content: `Skip the crowded tourist spots and discover these lesser-known towns and villages across Europe...`,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Carousel */}
      <div className="pt-36">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="h-[60vh] md:h-[70vh] lg:h-[80vh]"
        >
          {carouselImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="pt-44 px-6 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full">
                {/* Image */}
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
                  <p className="text-gray-700 mb-4">{blog.content}</p>
                  <a href={`/blogPage/${blog.slug}`} className="text-blue-600 hover:underline font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
