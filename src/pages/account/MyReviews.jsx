import { useState } from "react";

import BF6Img from "../../assets/battlefield6.jpg";
import MyReviewCard from "../../features/account/MyReviewCard";
import Pagination from "../../components/Pagination.jsx";
import toast from "react-hot-toast";

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
    category: "Highly Recommended",
    image: BF6Img,
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
    category: "Highly Recommended",
    image: BF6Img,
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
    category: "Recommended",
    image: BF6Img,
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
    category: "Highly Recommended",
    image: BF6Img,
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
    category: "Mixed",
    image: BF6Img,
  },
];

const fakeData = [
  {
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
  },
  {
    gameId: 2,
    gameName: "Legends of Arathia",
    image: BF6Img,
    rating: 8.4,
    reviews: 98,
    description:
      "Legends of Arathia immerses players in a breathtaking fantasy world filled with secrets, dungeons, and mythical creatures. Master deep combat systems, explore vast kingdoms, and uncover the ancient lore that shapes the fate of Arathia.",
    category: "Highly Favorable",
    releasedOn: "June 10, 2024",
    genre: "Action RPG",
    platforms: ["PlayStation 5", "PC", "Xbox Series X|S"],
  },
  {
    gameId: 3,
    gameName: "Neon Drift: Velocity",
    image: BF6Img,
    rating: 7.5,
    reviews: 76,
    description:
      "Neon Drift: Velocity puts players behind the wheel of high-speed, cyberpunk-inspired vehicles through glowing cityscapes. Customize your ride, outmaneuver rivals, and dominate in intense night races accompanied by an electric synthwave soundtrack.",
    category: "Favorable",
    releasedOn: "August 2, 2024",
    genre: "Racing / Arcade",
    platforms: ["Xbox Series X|S", "PlayStation 5", "PC"],
  },
  {
    gameId: 4,
    gameName: "Echoes of the Abyss",
    image: BF6Img,
    rating: 9.6,
    reviews: 182,
    description:
      "Echoes of the Abyss is a hauntingly beautiful narrative-driven adventure that blends emotional storytelling with atmospheric exploration. Players descend into mysterious ruins, uncovering long-lost truths through puzzles, art, and sound.",
    category: "Critically Acclaimed",
    releasedOn: "March 30, 2025",
    genre: "Adventure / Narrative",
    platforms: ["PC", "PlayStation 5"],
  },
  {
    gameId: 5,
    gameName: "Starfront Tactics",
    image: BF6Img,
    rating: 6.8,
    reviews: 59,
    description:
      "Starfront Tactics offers a blend of tactical space combat and base-building strategy. Command fleets, colonize planets, and wage interstellar wars across procedurally generated galaxies. Ambitious but still finding its balance.",
    category: "Mixed Reception",
    releasedOn: "November 5, 2024",
    genre: "Strategy / Sci-Fi",
    platforms: ["PC", "Xbox Series X|S"],
  },
];

function MyReviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [myReviews, setMyReviews] = useState(fakeReviews);
  const [gameData, setGameData] = useState(fakeData);

  const limit = 3;
  const totalPages = Math.ceil(myReviews.length / limit);
  const currentReviews = myReviews.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const handleEdit = (updatedReview) => {
    setMyReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.reviewId === updatedReview.reviewId ? updatedReview : review
      )
    );

    // later update the backend
  };

  const handleDelete = (reviewId) => {
    setMyReviews((prev) => prev.filter((r) => r.reviewId !== reviewId));
    toast.success("Successfully deleted review.");
    // update later for backend deleting
  };

  return (
    <div className="flex flex-col gap-2 space-y-3 p-4">
      <h2 className="mb-6 pb-1 font-extrabold text-gray-900 text-2xl">
        My Reviews
        <span className="block mt-1 border-gray-300 border-b w-40"></span>
      </h2>
      <div className="gap-6 grid grid-cols-3">
        {currentReviews.map((review) => (
          <MyReviewCard
            key={review.reviewId}
            review={review}
            openMenuId={openMenuId === review.reviewId}
            setOpenMenuId={setOpenMenuId}
            gameData={gameData.find((data) => data.gameId === review.gameId)}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="flex justify-center mx-auto">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default MyReviews;
