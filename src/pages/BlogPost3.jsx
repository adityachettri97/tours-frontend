import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogImg3 from "../images/sikkim2.jpeg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BlogPost3 = () => {
  return (
    <>
      <Navbar />
      <div className="pt-36 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <img
            src={BlogImg3}
            alt="Hidden Gems in Europe"
            className="w-full h-72 object-cover rounded-2xl mb-8 shadow-md"
          />
          <p className="text-gray-500 text-sm mb-3">August 10, 2025</p>
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Hidden Gems in Europe You Must Visit
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Europe's most iconic cities — Paris, Rome, Barcelona — are magnificent, but they're
            also crowded, expensive, and increasingly shaped around tourists rather than real life.
            If you're willing to go slightly off the beaten path, you'll find places that are just
            as beautiful, far less hectic, and far more authentic.
          </p>

          <div className="space-y-8 text-gray-700 text-base leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                1. Kotor, Montenegro
              </h2>
              <p>
                Tucked between dramatic limestone mountains and a glittering bay, Kotor is a
                medieval walled city that feels like it belongs in a fairytale. Wander its
                labyrinthine old town, climb the fortress walls at sunrise, and enjoy a seafood
                dinner for a fraction of what you'd pay in Dubrovnik.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                2. Ghent, Belgium
              </h2>
              <p>
                While Bruges gets all the attention, Ghent quietly offers canals, Gothic
                architecture, world-class street art, and a thriving local food scene — without
                the tour-group crowds. The Gravensteen castle alone is worth the detour.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                3. Plovdiv, Bulgaria
              </h2>
              <p>
                One of Europe's oldest cities, Plovdiv charms visitors with its colourful
                19th-century old town, Roman amphitheatre, and buzzing café culture. It's
                affordable, walkable, and genuinely welcoming — everything an overcrowded capital
                city isn't.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                4. Sintra, Portugal
              </h2>
              <p>
                Just 40 minutes from Lisbon, Sintra feels like it exists in another dimension.
                Pastel palaces perch on misty hilltops, surrounded by dense forest and secret
                gardens. Visit early in the morning before the day-trippers arrive.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                5. Matera, Italy
              </h2>
              <p>
                Carved into a ravine in southern Italy, Matera is one of the world's oldest
                continuously inhabited cities. Its ancient cave dwellings — the Sassi — have
                been transformed into unique hotels, restaurants, and art spaces. It's unlike
                anywhere else on earth.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                6. Hallstatt, Austria
              </h2>
              <p>
                This tiny lakeside village in the Austrian Alps looks almost too picturesque to
                be real. Salt mines, alpine trails, and crystal-clear water make it a perfect
                escape. Go in the shoulder season to enjoy it without the selfie-stick crowds.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                7. Faroe Islands, Denmark
              </h2>
              <p>
                For those who crave raw, dramatic landscapes — towering sea cliffs, cascading
                waterfalls, and villages perched at the edge of the world — the Faroe Islands
                deliver in ways few places can. Infrastructure is improving, but the islands
                still feel gloriously remote.
              </p>
            </div>
          </div>

          <p className="mt-8 text-gray-700 text-lg leading-relaxed">
            Europe's lesser-known corners reward the curious traveler with authenticity,
            affordability, and the rare feeling of discovering something before everyone else does.
            Next time you're planning a European trip, consider stepping off the well-worn path —
            you won't regret it.
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

export default BlogPost3;
