import { useQuery } from "@tanstack/react-query";
import { fetchGameWithId } from "../api";
export const useGame = (gameId) => {
  return useQuery({
    queryKey: ["game", gameId],
    queryFn: () => fetchGameWithId(gameId),
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    retry: 1,
    select: (data) => data,
    onSuccess: (data) => console.log("Fetched game", data),
    onError: (err) => console.error("Error fetching game", err),
  });
};
