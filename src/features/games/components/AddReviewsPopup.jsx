import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Button from "components/Button";
import Modal from "components/Modal";
import RatingSlider from "games/components/RatingSlider";
import ReviewTextBox from "games/components/ReviewTextBox";

function AddReviewsPopup({
  isOpen,
  setIsOpen,
  gameData,
  reviewToEdit = null,
  onSetReview,
}) {
  const { id, title, imageUrl, platforms } = gameData;
  const [rating, setRating] = useState(reviewToEdit?.reviewScore || null);
  const [review, setReview] = useState({
    title: reviewToEdit?.reviewTitle || "",
    body: reviewToEdit?.reviewBody || "",
  });
  const [selectedPlatform, setSelectedPlatform] = useState(
    reviewToEdit?.platform || platforms?.[0] || ""
  );

  useEffect(() => {
    if (!reviewToEdit) return;

    setRating(reviewToEdit.reviewScore);
    setReview({
      title: reviewToEdit.reviewTitle,
      body: reviewToEdit.reviewBody,
    });
    setSelectedPlatform(reviewToEdit.platform);
  }, [reviewToEdit]);

  const handleAdd = () => {
    const newReview = {
      reviewId: Date.now(),
      id,
      title,
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
            <p className="">Share your thoughts about {title}!</p>
          </div>

          <section className="flex items-center gap-4 py-2">
            <img
              src={imageUrl}
              alt={title}
              className="rounded-lg w-24 h-24 object-cover"
            />
            <div className="flex flex-col w-full">
              <h2 className="font-semibold text-gray-800">{title}</h2>
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
