import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogImg2 from "../images/Kalimpong2.jpeg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BlogPost2 = () => {
  return (
    <>
      <Navbar />
      <div className="pt-36 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <img
            src={BlogImg2}
            alt="Solo Travel"
            className="w-full h-72 object-cover rounded-2xl mb-8 shadow-md"
          />
          <p className="text-gray-500 text-sm mb-3">August 15, 2025</p>
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Why Solo Travel Can Change Your Life
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Traveling alone might sound daunting at first — no one to share the map, no familiar
            face at the dinner table. But ask any seasoned solo traveler and they'll tell you: it's
            one of the most transformative things you can do for yourself.
          </p>

          <div className="space-y-8 text-gray-700 text-base leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                1. You Discover Who You Really Are
              </h2>
              <p>
                When you're stripped of your usual routines and social circles, you're forced to
                confront yourself honestly. Solo travel reveals your strengths, your fears, and the
                kind of person you want to be. There's no one else to rely on — and that's exactly
                the point.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                2. You Make Decisions Entirely for Yourself
              </h2>
              <p>
                Want to spend the whole afternoon in a single museum? Go for it. Stumble upon a
                street food stall and spend an hour chatting with the vendor? Nobody's rushing you.
                Solo travel means complete freedom to follow your curiosity without compromise.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                3. You Become a Better Communicator
              </h2>
              <p>
                Navigating a foreign city alone pushes you to ask for directions, strike up
                conversations, and connect with strangers in ways group travel never demands.
                You'll be surprised how quickly your confidence grows.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                4. You Form Deeper Connections with Locals
              </h2>
              <p>
                Solo travelers are far more approachable than groups. Locals are more likely to
                invite you in, share a meal, or show you a hidden spot that doesn't make it onto
                any tourist map. These are the moments that stay with you forever.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                5. You Build Unshakeable Confidence
              </h2>
              <p>
                Missed a train? Solved it. Got lost in a maze of alleyways? Found your way out.
                Every small challenge you overcome on your own is proof that you're more capable
                than you thought. That feeling follows you home.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                6. You Return Home Changed
              </h2>
              <p>
                Solo travel has a way of reshuffling your priorities. Things that once seemed
                important may feel trivial, and things you overlooked — stillness, kindness,
                presence — become precious. You come home with a broader perspective and a quieter
                kind of confidence.
              </p>
            </div>
          </div>

          <p className="mt-8 text-gray-700 text-lg leading-relaxed">
            You don't need a travel partner to have the trip of a lifetime. You just need a
            destination, a bag, and the willingness to step out of your comfort zone. Try it
            at least once — your future self will thank you.
          </p>

          <div className="mt-10">
            <a
              href="/blogPage"
              className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium text-base"
            >
              <ArrowBackIcon fontSize="small" /> Back to Blog
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost2;
