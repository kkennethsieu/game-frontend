import { useParams } from "react-router-dom";
import BF6Img from "../assets/battlefield6.jpg";
import HeroImage from "../components/HeroImage";
import Reviews from "../features/gameDetails/Reviews";
import AboutGame from "../features/gameDetails/AboutGame";
import GameList from "../features/home/GameList";
import { useState } from "react";
const fakeData = {
  gameId: 1,
  gameName: "Battlefield 6",
  image: BF6Img,
  rating: 8.7,
  reviews: 124,
  description:
    "Battlefield 6 delivers massive-scale warfare with destructible environments, next-gen visuals, and chaotic multiplayer battles that push the boundaries of tactical combat. Players can engage in dynamic maps, pilot vehicles, and coordinate with squads across land, sea, and air.",
  category: "Highly Favorable",
  releasedOn: "October 15, 2023",
  genre: "First-Person Shooter",
  platforms: ["PC", "PlayStation 5", "Xbox Series X|S"],
};

const fakeReviews = [
  {
    reviewId: 1,
    gameId: 1,
    gameName: "Battlefield 6",
    date: "2025-10-14T09:22:00Z",
    rating: 9,
    author: "Maya R.",
    reviewTitle: "Beautiful, tense, and unforgettable",
    reviewBody:
      "Stunning art direction and excellent pacing. The stealth sections kept me on edge and the story stuck with me for days. A few minor bugs on PC but nothing game-breaking.",
    platform: "PC",
    likes: 32,
    dislikes: 2,
    verified: true,
    language: "en-US",
  },
  {
    reviewId: 2,
    gameId: 2,
    gameName: "Legends of Arathia",
    date: "2025-09-28T15:10:00Z",
    rating: 8,
    author: "Julian P.",
    reviewTitle: "Massive world, a bit overwhelming",
    reviewBody:
      "Exploration feels endless and rewarding. The combat system is deep once you learn it, but the menus can be confusing at first. Easily one of the most immersive RPGs this year.",
    platform: "PlayStation 5",
    likes: 24,
    dislikes: 4,
    verified: true,
    language: "en-US",
  },
  {
    reviewId: 3,
    gameId: 3,
    gameName: "Neon Drift: Velocity",
    date: "2025-10-02T21:35:00Z",
    rating: 7,
    author: "Carlos V.",
    reviewTitle: "Fun arcade racer with room to improve",
    reviewBody:
      "The driving mechanics are tight and satisfying, but there’s not enough track variety. Soundtrack absolutely slaps though — it feels straight out of a cyberpunk movie.",
    platform: "Xbox Series X",
    likes: 18,
    dislikes: 6,
    verified: false,
    language: "en-US",
  },
  {
    reviewId: 4,
    gameId: 4,
    gameName: "Echoes of the Abyss",
    date: "2025-10-20T17:50:00Z",
    rating: 10,
    author: "Sofia L.",
    reviewTitle: "Masterpiece of storytelling and design",
    reviewBody:
      "From start to finish, this game captivated me. The emotional writing, haunting soundtrack, and breathtaking visuals come together perfectly. Easily my Game of the Year.",
    platform: "PC",
    likes: 67,
    dislikes: 1,
    verified: true,
    language: "en-US",
  },
  {
    reviewId: 5,
    gameId: 5,
    gameName: "Starfront Tactics",
    date: "2025-09-15T12:42:00Z",
    rating: 6,
    author: "Liam N.",
    reviewTitle: "Solid mechanics, weak campaign",
    reviewBody:
      "Multiplayer is where this game shines — fast-paced and strategic. Unfortunately, the campaign feels rushed and lacks polish. Hoping future updates fix the balancing issues.",
    platform: "PC",
    likes: 11,
    dislikes: 8,
    verified: false,
    language: "en-US",
  },
];

function Game() {
  const { id } = useParams();
  const gameData = fakeData;

  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState(fakeReviews);
  const limit = 3;

  const totalPages = Math.ceil(reviews.length / limit);

  const currentReviews = reviews.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );
  function handleAdd(newReview) {
    setReviews((prev) => [...prev, newReview]);
  }

  return (
    <div>
      <HeroImage image={gameData.image} title={gameData.name} />
      <div className="flex lg:flex-row flex-col gap-6 mx-auto px-4 lg:px-8 py-6 max-w-[1700px]">
        {/* Left side - Reviews */}
        <div className="w-full lg:w-2/3">
          <Reviews
            gameData={gameData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentReviews={currentReviews}
            totalPages={totalPages}
            handleAdd={handleAdd}
          />
        </div>

        {/* Right side - About Game */}
        <div className="w-full lg:w-1/3">
          <AboutGame gameData={gameData} handleAdd={handleAdd} />
        </div>
      </div>
      <div className="flex flex-col gap-10 mx-auto p-20 max-w-[1700px]">
        <GameList title="Recommended for you" />
      </div>
    </div>
  );
}

export default Game;
