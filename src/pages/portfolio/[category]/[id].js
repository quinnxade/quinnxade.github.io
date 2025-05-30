import { useRouter } from "next/router";
import Link from "next/link";
import artData from "../../../data/artData";

export default function ArtworkPage() {
  const { query } = useRouter();
  const { id, category } = query;

  const artwork = artData.find(
    (art) =>
      art.id === id &&
      art.category?.some((cat) => cat.toLowerCase() === category?.toLowerCase())
  );

  if (!artwork) return <p className="p-10">Artwork not found</p>;

  return (
    <div className="min-h-screen px-6 py-12 bg-[#f7f7f5] text-gray-800">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Title & Metadata */}
        <div>
          <h1 className="text-3xl font-bold">{artwork.title}</h1>
          {(artwork.year || artwork.medium) && (
            <p className="text-gray-600 mt-1">
              {artwork.year} {artwork.year && artwork.medium ? "·" : ""} {artwork.medium}
            </p>
          )}
          {artwork.description && (
            <p className="italic text-[#444] mt-4">{artwork.description}</p>
          )}
        </div>

        {/* Main Image */}
        <div>
          <img
            src={artwork.imgUrl}
            alt={artwork.title}
            className="w-full h-auto rounded shadow-md"
          />
        </div>

        {/* Additional Images (only if they exist) */}
        {artwork.additionalImages?.length > 0 && (
          <div className="pt-4">
            <h2 className="text-xl font-semibold mb-4">More images / WIP</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {artwork.additionalImages.map((img, index) => (
                <img
                  key={index}
                  src={`/artwork/${img}`}
                  alt={`Additional view ${index + 1}`}
                  className="w-full object-cover rounded-md shadow-sm"
                />
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="pt-6">
          <Link
            href={`/portfolio/${category}`}
            className="text-blue-600 hover:underline text-sm"
          >
            ← back to {category}
          </Link>
        </div>
      </div>
    </div>
  );
}
