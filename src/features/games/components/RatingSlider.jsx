import { useState } from "react";

const ratingCategories = [
  {
    label: "Highly Recommended",
    range: [9, 10],
    color: "bg-green-600 border-green-600",
    lightColor: "bg-green-200 border-green-300",
    description: "An exceptional experience worth every minute.",
  },
  {
    label: "Recommended",
    range: [7, 8],
    color: "bg-lime-600 border-lime-600",
    lightColor: "bg-lime-200 border-lime-300",
    description: "Solid and enjoyable, with minor flaws.",
  },
  {
    label: "Mixed",
    range: [5, 6],
    color: "bg-yellow-500 border-yellow-500",
    lightColor: "bg-yellow-200 border-yellow-300",
    description: "Has its moments, but inconsistent or average.",
  },
  {
    label: "Poor",
    range: [3, 4],
    color: "bg-orange-500 border-orange-500",
    lightColor: "bg-orange-200 border-orange-300",
    description: "Struggles to deliver on its promise.",
  },
  {
    label: "Not Recommended",
    range: [1, 2],
    color: "bg-red-600 border-red-600",
    lightColor: "bg-red-200 border-red-300",
    description: "Frustrating, broken, or just not fun.",
  },
];

function RatingSlider({ onSelect, value }) {
  const [selected, setSelected] = useState(value);
  const [hovered, setHovered] = useState(0);

  const ratings = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleSelect = (num) => {
    setSelected(num);
    if (onSelect) onSelect(num);
  };

  const getCategory = (num) => {
    return (
      ratingCategories.find(
        (cat) => num >= cat.range[0] && num <= cat.range[1]
      ) || {}
    );
  };

  const activeNum = hovered || selected;

  return (
    <div className="flex flex-col gap-2 mx-auto py-2 w-full max-w-md">
      {/* Label and description */}

      <div className="text-center">
        <h3 className="font-semibold text-gray-800">
          {activeNum > 0 ? getCategory(activeNum).label : "My Rating"}
        </h3>
        <p className="text-gray-600 text-sm">
          {activeNum > 0
            ? getCategory(activeNum).description
            : "Hover and click to lock in rating"}
        </p>
        <h4 className="font-semibold text-gray-700">
          {activeNum > 0 ? activeNum : "-"}
        </h4>
      </div>

      {/* Slider */}
      <div className="flex gap-1">
        {ratings.map((num) => {
          const category = getCategory(num);
          const isActive = num <= activeNum;
          const colorClass = isActive ? category.color : category.lightColor;

          return (
            <button
              type="button"
              key={num}
              onClick={() => handleSelect(num)}
              onMouseEnter={() => setHovered(num)}
              onMouseLeave={() => setHovered(0)}
              className={`w-10 h-4 rounded-md border transition-all duration-200 ${colorClass}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RatingSlider;
