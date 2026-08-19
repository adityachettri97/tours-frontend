import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Import images directly from src/images
import Kalimpong from "../images/Kalimpong.jpg";
import Darjeeling from "../images/Darjeeling.jpg";
import Sikkim from "../images/Sikkim.jpg";

const HeroCarousel = () => {
  const navigate = useNavigate();
  const slides = [
    {
      image: Sikkim,
      title: "Discover Sikkim",
      subtitle: "Experience the beauty of the Himalayas.",
    },
    {
      image: Kalimpong,
      title: "Travel. Explore. Live.",
      subtitle: "Let every trip be your best memory.",
    },
    {
      image: Darjeeling,
      title: "Adventure Awaits",
      subtitle: "From mountains to seas — find your next journey.",
    },
  ];

  return (
    <div className="pt-32">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        slidesPerView={1}
        className="h-[80vh] overflow-hidden"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full overflow-hidden flex items-center justify-center text-white">
              <div
                className="hero-slide-bg absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
              <div className="hero-text relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{slide.title}</h1>
                <p className="text-lg md:text-2xl mb-6 drop-shadow">{slide.subtitle}</p>
                <button
                  onClick={() => navigate("/book-now")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-glow"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
