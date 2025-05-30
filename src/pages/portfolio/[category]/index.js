import { useRouter } from "next/router";
import Link from "next/link";
import artData from "../../../data/artData";

export default function CategoryPage() {
  const { query } = useRouter();
  const { category } = query;

  const filtered = artData.filter((art) =>
    art.category?.some((cat) => cat.toLowerCase() === category?.toLowerCase())
  );

  // ✅ Sort by year (newest to oldest)
  const sorted = [...filtered].sort((a, b) => {
    const yearA = parseInt(a.year) || 0;
    const yearB = parseInt(b.year) || 0;
    return yearB - yearA;
  });

  return (
    <div className="min-h-screen px-6 py-10 bg-[#f7f7f5] text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>
        <div className="mt-10">
          <Link href="/portfolio" className="text-blue-600 hover:underline text-sm">
            ← back to categories
          </Link>
        </div>
        <br></br>
        {sorted.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sorted.map((art) => (
              <Link
                key={art.id}
                href={`/portfolio/${category}/${art.id}`}
                className="block bg-white shadow hover:shadow-md transition rounded overflow-hidden"
              >
                <img
                  src={art.imgUrl}
                  alt={art.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-3">
                  <p className="font-semibold">{art.title}</p>
                  <p className="text-xs text-gray-500">
                    {art.year} · {art.medium}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>No artworks found in this category.</p>
        )}
      </div>
    </div>
  );
}
