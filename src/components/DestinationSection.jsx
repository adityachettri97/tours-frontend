import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import config from "../config";
import getImageUrl from "../utils/getImageUrl";
import Reveal from "./Reveal";

const DestinationSection = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/api/tours`);
        setTours(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTours();
  }, []);

  return (
    <section className="px-4 py-10 bg-white">
      <Reveal>
        <h2 className="text-3xl font-bold text-center mb-10">Popular Destinations</h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tours.map((tour, idx) => {
          const images = (Array.isArray(tour.imageUrls) ? tour.imageUrls : tour.imageUrls ? [tour.imageUrls] : []).filter(Boolean);

          return (
          <Reveal
            key={tour._id}
            delay={(idx % 3) * 120}
            className="bg-gray-100 rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-premium hover:-translate-y-2"
          >
            {/* Slider for each tour */}
            {images.length > 0 && (
              <Swiper
                modules={[EffectCoverflow, Pagination, Autoplay]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={images.length > 1}
                loopedSlides={Math.max(images.length, 6)}
                // slidesPerView={1.5}
                autoplay={images.length > 1 ? { delay: 2500, disableOnInteraction: false } : false}
                // pagination={{ clickable: true }}
                coverflowEffect={{
                  rotate: 30,
                  stretch: 10,
                  depth: 150,
                  modifier: 2,
                  slideShadows: true,
                }}
                breakpoints={{
                  0: { slidesPerView: 1 }, // mobile
                  640: { slidesPerView: 1.2 }, // small screens
                  768: { slidesPerView: 1.5 }, // tablets
                  1024: { slidesPerView: 2 }, // desktops
                }}
                className="h-60 bg-blue-100"
              >
                {images.map((url, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-60 overflow-hidden rounded">
                      <img
                        src={getImageUrl(url)}
                        alt={`${tour.title}-${index}`}
                        className="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            {/* Title + Description */}
            {/* Title + Description */}
            <Link to={`/destinations/${tour.title}`} className="block">
              <div className="text-center mt-4 cursor-pointer group">
                <h3 className="text-xl font-semibold transition duration-300 group-hover:text-blue-600">{tour.title}</h3>

                <p className="text-gray-600 text-sm mt-2 transition duration-300 group-hover:text-blue-500 group-hover:underline">
                  {tour.description.length > 100 ? tour.description.slice(0, 100) + "..." : tour.description}
                </p>
              </div>
            </Link>
            {/* <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">{tour.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {tour.description.length > 100 ? tour.description.slice(0, 100) + "..." : tour.description}
              </p>
            </div> */}
          </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default DestinationSection;
