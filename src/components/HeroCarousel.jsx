import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Import images directly from src/images
import Sikkim from "../images/Sikkim.jpg";
import Kalimpong from "../images/Kalimpong.jpg";
import Darjeeling from "../images/Darjeeling.jpg";

const HeroCarousel = () => {
  const slides = [
    {
      image: Sikkim,
      title: "Discover the World",
      subtitle: "Unleash your wanderlust with our curated trips.",
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
    <div className="pt-32 md:pt-0">
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
          <div
            className="relative h-full bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default HeroCarousel;
