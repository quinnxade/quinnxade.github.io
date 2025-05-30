export default function ArtCard({ art }) {
    return (
      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
        <img src={art.imgUrl} alt={art.title} className="object-cover w-full h-60" />
        <div className="p-2 text-sm text-gray-700">
          <div className="font-medium">{art.title}</div>
          <div className="text-xs">{art.year} · {art.medium}</div>
        </div>
      </div>
    );
  }
  