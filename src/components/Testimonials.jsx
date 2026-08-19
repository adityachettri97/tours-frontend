import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import Reveal from "./Reveal";

const fallbackReviews = [
  {
    id: "fallback-1",
    quote: "An unforgettable trip! Everything was organized perfectly and the team made sure we were comfortable.",
    name: "Sarah W.",
    location: "USA",
  },
  {
    id: "fallback-2",
    quote: "I booked the Maldives package and it was truly paradise. Highly recommend TravelPeak!",
    name: "Amit P.",
    location: "India",
  },
];

const Testimonials = () => {
  const [reviews, setReviews] = useState(fallbackReviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${config.API_URL}/api/reviews`);
        if (res.data.length) {
          setReviews(
            res.data.map((r) => ({
              id: r._id,
              quote: r.quote,
              name: r.name,
              location: r.location,
            }))
          );
        }
      } catch (err) {
        console.error("Error fetching reviews", err);
      }
    };
    fetchReviews();
  }, []);

  return (
    <section className="py-16 px-6">
      <Reveal>
        <h2 className="text-3xl font-bold text-center mb-10">What Our Travelers Say</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reviews.map((review, i) => (
          <Reveal
            key={review.id}
            delay={(i % 2) * 150}
            className="relative bg-gray-50 p-6 rounded-2xl shadow transition-all duration-300 hover:shadow-premium hover:-translate-y-1"
          >
            <span className="absolute top-2 left-4 text-6xl text-blue-100 font-serif select-none leading-none">"</span>
            <p className="relative text-gray-700 italic mb-4">"{review.quote}"</p>
            <h4 className="font-semibold">
              — {review.name}
              {review.location ? `, ${review.location}` : ""}
            </h4>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
