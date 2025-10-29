import { useState } from "react";
import Button from "../../components/Button";
import AddReviewsPopup from "./AddReviewsPopup";

function AboutGame({ gameData, handleAdd }) {
  const { releasedOn, genre, platforms, description } = gameData;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 border border-gray-200 rounded-2xl">
        {/* Header */}
        <h2 className="mb-6 pb-3 border-white/10 border-b font-bold text-3xl">
          About This Game
        </h2>

        {/* Game Info Grid */}
        <section className="gap-x-8 gap-y-4 grid grid-cols-2 max-w-xl">
          <div className="space-y-3 font-medium text-gray-800">
            <p>Released On:</p>
            <p>Genre:</p>
            <p>Platforms:</p>
            <p>Description:</p>
          </div>

          <div className="space-y-3 text-gray-700">
            <p className="font-semibold">{releasedOn}</p>
            <p className="font-semibold">{genre}</p>
            <p className="font-semibold">{platforms}</p>
            <p className="font-normal text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        {/* Button */}
        <div className="mt-8">
          <Button
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl w-full font-semibold transition-colors"
            onClick={() => setIsOpen(true)}
          >
            Review This Game
          </Button>
        </div>
      </div>
      <AddReviewsPopup
        onSetReview={handleAdd}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        gameData={gameData}
        reviewToEdit={null}
      />
    </>
  );
}

export default AboutGame;
