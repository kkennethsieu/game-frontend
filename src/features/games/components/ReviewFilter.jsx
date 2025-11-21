import { useState } from "react";

function ReviewFilter() {
  const [active, setActive] = useState("All Reviews");

  const filters = [
    "All Reviews",
    "Positive Reviews",
    "Mixed Reviews",
    "Negative Reviews",
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            active === filter
              ? "bg-orange-500 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default ReviewFilter;
