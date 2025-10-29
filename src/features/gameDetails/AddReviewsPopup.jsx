import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Modal from "../../components/Modal";
import RatingSlider from "../../components/RatingSlider";
import ReviewTextBox from "../../components/ReviewTextBox";

function AddReviewsPopup({
  isOpen,
  setIsOpen,
  gameData,
  reviewToEdit = null,
  onSetReview,
}) {
  console.log("Received onSetReview prop", onSetReview);

  const { gameId, gameName, image, platforms } = gameData;
  const [rating, setRating] = useState(reviewToEdit?.rating || null);
  const [review, setReview] = useState({
    title: reviewToEdit?.reviewTitle || "",
    body: reviewToEdit?.reviewBody || "",
  });
  const [selectedPlatform, setSelectedPlatform] = useState(
    reviewToEdit?.platform || platforms?.[0] || ""
  );

  useEffect(() => {
    if (!reviewToEdit) return;

    setRating(reviewToEdit.rating);
    setReview({
      title: reviewToEdit.reviewTitle,
      body: reviewToEdit.reviewBody,
    });
    setSelectedPlatform(reviewToEdit.platform);
  }, [reviewToEdit]);

  const handleAdd = () => {
    const newReview = {
      reviewId: Date.now(),
      gameId,
      gameName,
      rating,
      author: "Kenny",
      reviewTitle: review.title,
      reviewBody: review.body,
      platform: selectedPlatform,
      date: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
      verified: true,
      language: "en-US",
    };
    onSetReview(newReview);
    setRating(null);
    setReview({ title: "", body: "" });
    setSelectedPlatform(platforms?.[0] || "");
  };

  const handleEdit = () => {
    const updatedReview = {
      ...reviewToEdit,
      rating,
      reviewTitle: review.title,
      reviewBody: review.body,
      platform: selectedPlatform,
    };
    console.log("edited");
    onSetReview(updatedReview);
  };

  const handleSubmit = () => {
    if (reviewToEdit) {
      handleEdit();
      toast.success("Review successfully edited");
    } else {
      toast.success("Review successfully added");
      handleAdd();
    }
    setIsOpen(false);
  };

  const handleCancel = () => {
    setRating(reviewToEdit?.rating || null);
    setReview({
      title: reviewToEdit?.reviewTitle || "",
      body: reviewToEdit?.reviewBody || "",
    });
    setSelectedPlatform(reviewToEdit?.platform || platforms?.[0] || "");
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <main className="space-y-2 divide-y divide-gray-300">
          <div className="space-y-3">
            <p className="font-bold text-xl">
              {reviewToEdit ? "Edit Review" : "Leave a Review"}
            </p>
            <p className="">Share your thoughts about {gameName}!</p>
          </div>

          <section className="flex items-center gap-4 py-2">
            <img src={image} className="shadow-lg rounded-lg w-28 h-28" />
            <div className="flex flex-col w-full">
              <h2 className="font-semibold text-gray-800">{gameName}</h2>
              <Dropdown
                label="Select your platform"
                options={platforms}
                selected={selectedPlatform}
                onChange={setSelectedPlatform}
              />
            </div>
          </section>

          <RatingSlider onSelect={setRating} value={rating} />
          <ReviewTextBox onChange={setReview} value={review} />
        </main>

        <div className="flex gap-3">
          <Button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 w-full"
            onClick={() => handleCancel()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 w-full"
          >
            {reviewToEdit ? "Update Review" : "Submit"}
          </Button>
        </div>
        <p className="text-sm text-center">
          {reviewToEdit
            ? "Clicking 'Cancel' will discard your changes and restore your original review."
            : "Clicking 'Cancel' will permanently delete your review."}
        </p>
      </form>
    </Modal>
  );
}

export default AddReviewsPopup;
