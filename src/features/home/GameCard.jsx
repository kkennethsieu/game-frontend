// src/features/Home/GameCard.jsx
import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition duration-300">
      {/* Game image */}
      <img
        src={game.image}
        alt={game.name}
        className="w-full h-60 object-cover"
      />

      {/* Game info */}
      <div className="p-4">
        <h3 className="mb-1 font-semibold text-lg">{game.name}</h3>
        <p className="mb-2 text-gray-500 text-sm">{game.description}</p>

        {/* Rating & reviews */}
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <span>⭐ {game.rating}/10</span>
          <span>{game.reviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
