import { useState } from "react";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import AddReviewsPopup from "./AddReviewsPopup";
import ReviewBar from "./ReviewBar";
import ReviewCard from "./ReviewCard";
import ReviewFilter from "./ReviewFilter";

function Reviews({
  gameData,
  currentPage,
  setCurrentPage,
  totalPages,
  currentReviews,
  handleAdd,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="space-y-8 p-6 md:p-8">
        <h2 className="font-bold text-3xl">Reviews: {gameData.gameName}</h2>
        <section className="flex flex-col justify-center items-center mx-auto">
          {/* maybe for this we can do the math within db */}
          {/* <ReviewBar reviews={reviews} /> */}
          <ReviewFilter />
          {currentReviews.map((review) => (
            <ReviewCard key={review.reviewId} review={review} />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
          <div className="mt-8">
            <Button
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl w-full font-semibold transition-colors"
              onClick={() => setIsOpen(true)}
            >
              Leave a review for {gameData.gameName}
            </Button>
          </div>
        </section>
      </div>
      {isOpen && (
        <AddReviewsPopup
          onSetReview={handleAdd}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          gameData={gameData}
          reviewToEdit={null}
        />
      )}
    </>
  );
}

export default Reviews;
