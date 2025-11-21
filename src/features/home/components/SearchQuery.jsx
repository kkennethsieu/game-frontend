import { useNavigate } from "react-router-dom";

function SearchQuery({ game }) {
  const { id, title, releaseYear, imageUrl, tags } = game;
  const nav = useNavigate();

  return (
    <div
      className="flex items-center gap-3 bg-white hover:bg-gray-100 shadow-sm hover:shadow-md p-3 border border-gray-200 rounded-xl transition-all cursor-pointer"
      onClick={() => nav(`/game/${id}`)}
    >
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg w-20 h-14 object-cover"
      />

      <div className="flex flex-col flex-1">
        <p className="font-semibold text-gray-900 text-sm">{title}</p>

        <div className="flex justify-between items-center mt-1">
          <p className="text-gray-500 text-xs">{releaseYear}</p>

          <div className="flex gap-1">
            {tags?.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="bg-gray-100 px-2 py-[2px] rounded-full text-[10px] text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchQuery;
