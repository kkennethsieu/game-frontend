import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReview } from "../api/createReview";
import toast from "react-hot-toast";

const MOCKS = import.meta.env.VITE_USE_MOCKS === "true";

export const useCreateReview = (gameId, userId) => {
  const queryClient = useQueryClient();
  const gameIdKey = String(gameId);

  return useMutation({
    mutationFn: createReview,
    onMutate: async (newReview) => {
      // Cancel any outgoing fetches for this game reviews
      await queryClient.cancelQueries({ queryKey: ["reviews", gameId] });
      // Snapshot the previous reviews so we can rollback if the mutation fails
      const previousReviews = queryClient.getQueryData(["reviews", gameId]);

      const optimisticId = `temp-${Date.now()}`; // Track the optimistic entry

      // Optimistically update the cache by adding the new review
      queryClient.setQueryData(["reviews", gameId], (old = []) => [
        ...old,
        {
          // this is technically fake data just for the UI until the server reponds
          ...newReview,

          reviewId: optimisticId,
          likesCount: { likes: 0, dislikes: 0 },
          user: {
            username: "You",
            avatarURL: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            phoneNumber: null,
            userBio: null,
          },
          createdAt: new Date().toISOString(),
        },
      ]);

      // Return context to rollback if needed
      return { previousReviews, optimisticId };
    },
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData(["reviews", gameIdKey], (old = []) => {
        const updated = old.map((review) =>
          review.reviewId === context.optimisticId ? data : review
        );
        return updated;
      });

      toast.success("Review added successfully");
    },
    onError: (err, newReview, context) => {
      // Rollback to previous state if API call fails
      toast.error("Failed to add review");
      queryClient.setQueryData(["reviews", gameIdKey], context.previousReviews);
    },
    onSettled: () => {
      // Refetch to make sure the cache is synced with the server
      if (MOCKS) {
        // For mocks, refetch to get the updated mockReviewsStore
        queryClient.refetchQueries({ queryKey: ["reviews", gameIdKey] });
      } else {
        // For real API, just invalidate
        queryClient.invalidateQueries({ queryKey: ["reviews", gameIdKey] });
        queryClient.invalidateQueries({
          queryKey: ["reviews-with-games", userId],
        });
      }
    },
  });
};
