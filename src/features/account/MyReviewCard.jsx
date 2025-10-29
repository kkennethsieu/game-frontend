import { useState } from "react";
import ConfirmModal from "../../components/ConfirmModal";
import AddReviewsPopup from "../gameDetails/AddReviewsPopup";
import ReviewBody from "./ReviewBody";
import ReviewHeader from "./ReviewHeader";

function MyReviewCard({
  review,
  openMenuId,
  setOpenMenuId,
  gameData,
  handleEdit,
  handleDelete,
}) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 shadow-md p-4 border border-gray-200 rounded-xl divide-y divide-gray-300">
        <ReviewHeader
          review={review}
          openMenuId={openMenuId}
          setOpenMenuId={setOpenMenuId}
          setOpenEditModal={setOpenEditModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
        <ReviewBody review={review} />
      </div>

      <ConfirmModal
        isOpen={openDeleteModal}
        setIsOpen={setOpenDeleteModal}
        onConfirm={() => handleDelete(review.reviewId)}
        title="Delete Review"
        message="Are you sure you want to delete this review? This action cannot be undone."
        confirmText="Delete"
        confirmClassName="bg-red-500 hover:bg-red-600 text-white"
      />

      {openEditModal && (
        <AddReviewsPopup
          onSetReview={handleEdit}
          isOpen={openEditModal}
          setIsOpen={setOpenEditModal}
          gameData={gameData}
          reviewToEdit={review}
        />
      )}
    </>
  );
}

export default MyReviewCard;
