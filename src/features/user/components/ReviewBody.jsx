import { Icon } from "@iconify/react";
import { useState } from "react";

function ReviewBody({ review }) {
  const { reviewTitle, reviewScore, reviewBody } = review;
  const [showMore, setShowMore] = useState(false);
  const maxLength = 175;

  if (!reviewBody) return null;

  const isLong = reviewBody.length > maxLength;
  const displayedText =
    showMore || !isLong ? reviewBody : reviewBody.slice(0, maxLength).trim();

  return (
    <section className="flex flex-col flex-1 space-y-2 mt-2 py-3">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-lg">{reviewTitle}</h4>
        <div className="flex items-center gap-1 bg-orange-200 px-2 py-1 rounded-md font-semibold text-orange-600 text-sm">
          <Icon icon="carbon:star-filled" width={16} height={16} />
          {reviewScore}/10
        </div>
      </div>

      <p className="mt-1 text-gray-700 text-sm">
        {displayedText}
        {isLong && (
          <span
            className="ml-1 text-orange-500 cursor-pointer"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "See less" : "See more"}
          </span>
        )}
      </p>
    </section>
  );
}

export default ReviewBody;
