import Link from "next/link";
import artData from "../../data/artData";
import categoryData from "../../data/categoryData";
import { motion } from "framer-motion";

export default function PortfolioCategories() {
  const categorized = {};

  // Group by category
  artData.forEach((art) => {
    const categories = art.category?.length ? art.category : ["Uncategorized"];
    categories.forEach((cat) => {
      const lower = cat.toLowerCase();
      if (!categorized[lower]) categorized[lower] = [];
      categorized[lower].push(art);
    });
  });

  const sortedCategories = Object.entries(categorized);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8ede7] to-[#cfe8cc] px-4 py-10 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Link href="/" className="text-blue-600 text-sm hover:underline">
            ← back to home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-10 text-center">Categories</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCategories.map(([category, artworks]) => {
            const slug = category.toLowerCase();

            // Sort artworks in this category by year (newest to oldest)
            const sortedArtworks = [...artworks].sort((a, b) => {
              const yearA = parseInt(a.year) || 0;
              const yearB = parseInt(b.year) || 0;
              return yearB - yearA;
            });

            // Choose cover image: from categoryData or from sorted artworks
            const coverImage =
              categoryData[slug]?.coverImage ||
              sortedArtworks[0]?.thumbnailUrl ||
              sortedArtworks[0]?.imgUrl ||
              "/fallback.jpg";

            return (
              <Link
                key={category}
                href={`/portfolio/${category}`}
                className="group relative rounded-2xl overflow-hidden shadow-lg"
              >
                <motion.img
                  src={coverImage}
                  alt={`${category} cover`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition" />

                {/* Category text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-2xl sm:text-3xl font-semibold capitalize drop-shadow-lg backdrop-blur-sm bg-white/10 px-4 py-2 rounded-xl">
                    {category}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
