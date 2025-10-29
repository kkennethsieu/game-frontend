export default function ReviewCard({ review }) {
  const {
    date,
    rating,
    author,
    reviewTitle,
    reviewBody,
    platform,
    likes,
    dislikes,
    verified,
  } = review;

  return (
    <div className="bg-white shadow-sm hover:shadow-md mb-5 p-5 border border-gray-200 rounded-2xl w-full transition-all duration-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 text-gray-600 text-sm">
        <p>
          {new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <div className="flex items-center gap-2">
          {verified && (
            <span className="bg-green-100 px-2 py-0.5 rounded-md font-semibold text-green-700 text-xs">
              ✔ Verified
            </span>
          )}
          <p className="italic">
            by <span className="font-semibold text-orange-600">{author}</span>
          </p>
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-2 font-semibold text-gray-900 text-lg">
        {reviewTitle}
      </h3>

      {/* Body */}
      <p className="mb-4 text-gray-700 text-sm leading-relaxed">{reviewBody}</p>

      {/* Footer */}
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <span className="bg-orange-100 px-2.5 py-1 rounded-md font-semibold text-orange-600">
            ★ {rating}/10
          </span>
          {platform && (
            <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-600 text-xs uppercase tracking-wide">
              {platform}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span>👍 {likes}</span>
          <span>👎 {dislikes}</span>
        </div>
      </div>
    </div>
  );
}
