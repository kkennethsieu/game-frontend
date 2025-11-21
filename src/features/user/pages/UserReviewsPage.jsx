//Packages
import { useEffect, useState } from "react";
//Images
import BF6Img from "assets/battlefield6.jpg";
//Components
import UserReviewCard from "features/user/components/UserReviewCard";
import Pagination from "components/Pagination.jsx";
//Other
import toast from "react-hot-toast";
import { useAuth } from "provider/AuthProvider";

function UserReviewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsWithGames, setReviewsWithGames] = useState([]);

  const limit = 3;
  const totalPages = Math.ceil(reviewsWithGames.length / limit);
  const currentReviews = reviewsWithGames.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:9000/user/${user.userId}/reviews-with-games`
        );
        if (!res.ok) {
          throw new Error("Error FETCHING");
        }
        const data = await res.json();
        setReviewsWithGames(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user.userId]);

  const handleEdit = (updatedReview) => {
    setReviewsWithGames((prevReviews) =>
      prevReviews.map((review) =>
        review.reviewId === updatedReview.reviewId ? updatedReview : review
      )
    );

    // later update the backend
  };

  const handleDelete = (reviewId) => {
    setReviewsWithGames((prev) => prev.filter((r) => r.reviewId !== reviewId));
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
        {currentReviews.map((reviewAndData) => (
          <UserReviewCard
            key={reviewAndData.reviewId}
            reviewAndData={reviewAndData}
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

export default UserReviewsPage;
