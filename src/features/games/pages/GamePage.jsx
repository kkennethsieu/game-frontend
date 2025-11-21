//Packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Components
import HeroImage from "features/games/components/HeroImage";
import Reviews from "features/games/components/Reviews";
import AboutGame from "features/games/components/AboutGame";
import GameList from "features/games/components/GameList";

//Game Not Found
import GameNotFound from "components/GameNotFound";

const BASEURL = `http://localhost:8000`;
const REVIEWURL = `http://localhost:4000`;

function GamePage() {
  const { id } = useParams();
  const [gameData, setGameData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([]);
  const limit = 3;

  const totalPages = Math.ceil(reviews.length / limit);

  const currentReviews = reviews.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );
  function handleAdd(newReview) {
    setReviews((prev) => [...prev, newReview]);
  }

  useEffect(() => {
    const fetchGame = async () => {
      setIsLoading(true);
      try {
        const [gameRes, reviewRes] = await Promise.all([
          fetch(`${BASEURL}/games/id/${id}`),
          fetch(`${REVIEWURL}/reviews/game/${id}`),
        ]);

        const gameData = await gameRes.json();
        const reviewData = await reviewRes.json();

        setGameData(gameData);
        setReviews(reviewData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-64 md:h-96 lg:h-[550px]">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const screenshotsArray = (() => {
    try {
      return JSON.parse(gameData?.screenshots || "[]");
    } catch {
      return [];
    }
  })();

  return (
    <div>
      {gameData ? (
        <>
          <HeroImage image={screenshotsArray[1] || ""} title={gameData.title} />
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
        </>
      ) : (
        <div className="mt-10">
          <GameNotFound />
        </div>
      )}
      <div className="flex flex-col gap-10 mx-auto p-20 max-w-[1700px]">
        <GameList header="Recommended for you" />
      </div>
    </div>
  );
}

export default GamePage;
