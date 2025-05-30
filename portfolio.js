import { motion } from "framer-motion";
import Link from "next/link";
import artData from "../data/artData";

export default function Portfolio() {
  // Group the artwork by category
  const categorized = {};

  artData.forEach((art) => {
    if (!art.category || art.category.length === 0) {
      // Place in "Uncategorized" if no category is defined
      if (!categorized["Uncategorized"]) categorized["Uncategorized"] = [];
      categorized["Uncategorized"].push(art);
    } else {
      art.category.forEach((cat) => {
        if (!categorized[cat]) categorized[cat] = [];
        categorized[cat].push(art);
      });
    }
  });

  const sortedCategories = Object.keys(categorized);

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-gray-800 px-4 py-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {sortedCategories.map((cat) => (
          <div key={cat} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{cat}</h2>

            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {categorized[cat].map((art) => (
                <motion.div
                  key={art.id}
                  layout
                  className="bg-white shadow rounded overflow-hidden hover:shadow-md transition"
                >
                  <Link href={`/artworks/${art.id}`} className="block">
                    <img
                      src={art.imgUrl}
                      alt={art.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-3 text-sm text-gray-700" > 
                      <p className="font-semibold">{art.title}</p>
                      <p className="text-xs text-gray-500">
                        {art.year} · {art.medium}
                      </p>
                      {art.description && (
                        <p className="mt-1 text-gray-600 italic">
                          {art.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* Back Button */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block text-sm text-blue-600 hover:underline"
          >
            ← back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
3