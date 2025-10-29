import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import GameCard from "./GameCard";
import BF6Img from "../../assets/battlefield6.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

// src/data/gamesData.js

const gamesData = [
  {
    id: 1,
    name: "Battlefield 6",
    image: BF6Img,
    rating: 8,
    reviews: 45,
    description: "Highly favorable",
  },
  {
    id: 2,
    name: "CyberQuest",
    image: BF6Img,
    rating: 9,
    reviews: 120,
    description: "Critically acclaimed",
  },
  {
    id: 3,
    name: "Fantasy World",
    image: BF6Img,
    rating: 7,
    reviews: 80,
    description: "Good reception",
  },
  {
    id: 4,
    name: "Speed Racer X",
    image: BF6Img,
    rating: 8,
    reviews: 60,
    description: "Very popular",
  },
  {
    id: 5,
    name: "Random Racer X",
    image: BF6Img,
    rating: 8,
    reviews: 60,
    description: "Very popular",
  },
  {
    id: 6,
    name: "Rnadom3 Racer X",
    image: BF6Img,
    rating: 8,
    reviews: 60,
    description: "Very popular",
  },
];

function GameList({ title }) {
  const [currentPage, setCurrentPage] = useState(1);

  // When we fetch we need to change all this
  // const [reviews, setReviews] = useState([fakeReviews]);
  // const [totalPages, setTotalPages] = useState(1);
  const limit = 4;

  const totalPages = Math.ceil(gamesData.length / limit);

  const currentGames = gamesData.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  return (
    <div className="space-y-6">
      <section className="flex justify-between">
        <h2 className="font-bold text-3xl">{title}</h2>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </section>
      <motion.div
        className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        key={currentPage}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
      >
        {currentGames.map((game) => (
          <Link to={`/game/${game.id}`}>
            <GameCard key={game.id} game={game} />
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

export default GameList;
