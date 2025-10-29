function ReviewBar({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  const totalReviews = reviews.length;

  // Calculate average rating
  const avgRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews;

  // Determine category
  let category = "";
  if (avgRating >= 8) category = "Highly Favorable";
  else if (avgRating >= 6) category = "Mostly Positive";
  else if (avgRating >= 4) category = "Mixed";
  else category = "Negative";

  // Calculate % positive, negative, neutral
  const positiveReviews = reviews.filter((r) => r.rating >= 7).length;
  const negativeReviews = reviews.filter((r) => r.rating <= 4).length;
  const neutralReviews = totalReviews - positiveReviews - negativeReviews;

  const positivePercent = Math.round((positiveReviews / totalReviews) * 100);
  const negativePercent = Math.round((negativeReviews / totalReviews) * 100);
  const neutralPercent = 100 - positivePercent - negativePercent;

  return (
    <div className="bg-white shadow-sm hover:shadow-md mb-5 p-5 border border-gray-200 rounded-2xl w-full transition-all duration-200">
      <h2 className="mb-3 font-bold text-gray-600 text-lg">Reviews Summary</h2>

      {/* Rating and category */}
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold text-green-600 text-xl">
          ★ {avgRating.toFixed(1)}/10
        </div>
        <div
          className={`font-medium text-sm ${
            avgRating >= 8
              ? "text-green-400"
              : avgRating >= 6
              ? "text-green-300"
              : avgRating >= 4
              ? "text-yellow-300"
              : "text-red-400"
          }`}
        >
          {category}
        </div>
      </div>

      {/* Multi-color Progress Bar */}
      <div className="flex bg-gray-800 mb-2 rounded-full w-full h-4 overflow-hidden">
        {positivePercent > 0 && (
          <div
            className="bg-green-500 h-full"
            style={{ width: `${positivePercent}%` }}
          />
        )}
        {neutralPercent > 0 && (
          <div
            className="bg-yellow-400/70 h-full"
            style={{ width: `${neutralPercent}%` }}
          />
        )}
        {negativePercent > 0 && (
          <div
            className="bg-red-500 h-full"
            style={{ width: `${negativePercent}%` }}
          />
        )}
      </div>

      <div className="flex justify-between mb-2 text-gray-300 text-sm">
        <span>👍 {positivePercent}% Positive</span>
        <span>⚖ {neutralPercent}% Mixed</span>
        <span>👎 {negativePercent}% Negative</span>
      </div>

      <p className="text-gray-400 text-sm">
        Based on {totalReviews} review{totalReviews > 1 ? "s" : ""}
      </p>
    </div>
  );
}

export default ReviewBar;
