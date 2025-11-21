import { useState } from "react";
//Components
import ReviewBody from "features/user/components/ReviewBody";
import ReviewHeader from "features/user/components/ReviewHeader";
//Modals
import ConfirmModal from "components/ConfirmModal";
//This is for editing
import AddReviewsPopup from "features/games/components/AddReviewsPopup";
function UserReviewCard({ handleEdit, handleDelete, reviewAndData }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-4 shadow-md p-4 border border-gray-200 rounded-xl divide-y divide-gray-300">
        <ReviewHeader
          review={reviewAndData}
          setOpenEditModal={setOpenEditModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
        <ReviewBody review={reviewAndData} />
      </div>

      {openDeleteModal && (
        <ConfirmModal
          isOpen={openDeleteModal}
          setIsOpen={setOpenDeleteModal}
          onConfirm={() => handleDelete(reviewAndData.reviewId)}
          title="Delete Review"
          message="Are you sure you want to delete this review? This action cannot be undone."
          confirmText="Delete"
          confirmClassName="bg-red-500 hover:bg-red-600 text-white"
        />
      )}

      {openEditModal && (
        <AddReviewsPopup
          onSetReview={handleEdit}
          isOpen={openEditModal}
          setIsOpen={setOpenEditModal}
          gameData={reviewAndData.game}
          reviewToEdit={reviewAndData}
        />
      )}
    </>
  );
}

export default UserReviewCard;
