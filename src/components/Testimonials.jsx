import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Travelers Say</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-2xl shadow">
          <p className="text-gray-700 italic mb-4">
            “An unforgettable trip! Everything was organized perfectly and the team made sure we were comfortable.”
          </p>
          <h4 className="font-semibold">— Sarah W., USA</h4>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow">
          <p className="text-gray-700 italic mb-4">“I booked the Maldives package and it was truly paradise. Highly recommend Wanderlust Tours!”</p>
          <h4 className="font-semibold">— Amit P., India</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
