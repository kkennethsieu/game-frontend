export const fetchReviewsWithUser = async (gameId) => {
  const res = await fetch(
    `${import.meta.env.VITE_GATEWAY_API}/review/${gameId}/reviews-with-user`
  );
  if (!res.ok) throw new Error("Error fetching reviews with user");
  return res.json();
};
