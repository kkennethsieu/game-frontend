import { useQuery } from "@tanstack/react-query";
import { fetchReviewsWithUser } from "../api";
const MOCKS = import.meta.env.VITE_USE_MOCKS === "true";

export const useReviews = (gameId) => {
  return useQuery({
    queryKey: ["reviews", String(gameId)],
    queryFn: () => fetchReviewsWithUser(gameId),
    staleTime: MOCKS ? 0 : 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    retry: 1,
    select: (data) => data,
    onSuccess: (data) => console.log("Fetched reviews with user", data),
    onError: (err) => console.error("Error fetching reviews with user:", err),
  });
};
