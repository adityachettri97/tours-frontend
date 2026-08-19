import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import BlogImg1 from "../images/Darjeeling2.jpeg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BlogPost1 = () => {
  return (
    <>
      <Navbar />
      <div className="pt-36 bg-gray-50 min-h-screen">
        <Reveal className="max-w-3xl mx-auto px-6 py-12" as="div">
          <div className="overflow-hidden rounded-2xl mb-8 shadow-md">
            <img
              src={BlogImg1}
              alt="First-Time Travelers"
              className="w-full h-72 object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <p className="text-gray-500 text-sm mb-3">August 20, 2025</p>
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Top 10 Tips for First-Time Travelers
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Embarking on your first trip is one of the most exciting experiences life has to offer.
            But without the right preparation, it can quickly become stressful. Here are 10 essential
            tips to help you travel smart, stay safe, and make every moment count.
          </p>

          <ol className="space-y-6 text-gray-700 text-base leading-relaxed list-decimal list-inside">
            <li>
              <span className="font-semibold text-gray-800">Pack Light, Pack Right</span> — Resist
              the urge to bring everything. Stick to versatile clothing and only the essentials.
              A lighter bag means more freedom and less stress at airports.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Research Your Destination</span> —
              Learn basic local customs, currency, emergency numbers, and a few phrases in the
              local language. Locals appreciate the effort.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Get Travel Insurance</span> — It
              seems like an extra expense until you actually need it. Cover yourself for medical
              emergencies, trip cancellations, and lost luggage.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Keep Digital and Physical Copies of Documents</span> —
              Store scanned copies of your passport, visa, and tickets in email and on your phone.
              Keep a physical copy in a separate bag.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Notify Your Bank</span> — Let your
              bank know your travel dates and destinations to avoid your card being blocked for
              suspicious activity abroad.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Stay Connected Smartly</span> —
              Purchase a local SIM card or an international data plan. Download offline maps on
              Google Maps before you go.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Budget Wisely</span> — Keep track of
              daily spending. Always have a small amount of local cash on hand for small vendors
              or areas without card facilities.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Stay Safe</span> — Avoid displaying
              expensive gadgets in crowded places. Trust your instincts — if something feels off,
              it probably is.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Be Flexible</span> — Things won't
              always go to plan, and that's okay. Some of the best travel stories come from
              unexpected detours.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Soak It All In</span> — Put the
              phone down sometimes. Be present. The sounds, smells, and views of a new place
              are irreplaceable memories in the making.
            </li>
          </ol>

          <p className="mt-8 text-gray-700 text-lg leading-relaxed">
            Traveling for the first time is a milestone. With a bit of preparation and an open
            mind, you'll return home with stories, friendships, and a perspective that no
            classroom can teach. Happy travels!
          </p>

          <div className="mt-10">
            <a
              href="/blogPage"
              className="group inline-flex items-center gap-1 text-blue-600 hover:underline font-medium text-base"
            >
              <ArrowBackIcon fontSize="small" className="transition-transform duration-300 group-hover:-translate-x-1" /> Back to Blog
            </a>
          </div>
        </Reveal>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost1;
