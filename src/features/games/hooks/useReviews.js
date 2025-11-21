import { useQuery } from "@tanstack/react-query";
import { fetchReviewsWithUser } from "../api";

export const useReviews = (gameId) => {
  return useQuery({
    queryKey: ["reviews", gameId],
    queryFn: () => fetchReviewsWithUser(gameId),
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    retry: 1,
    select: (data) => data,
    onSuccess: (data) => console.log("Fetched reviews with user", data),
    onError: (err) => console.error("Error fetching reviews with user:", err),
  });
};
