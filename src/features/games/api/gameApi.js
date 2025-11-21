export const fetchGameWithId = async (gameId) => {
  const res = await fetch(
    `${import.meta.env.VITE_CATALOG_API}/games/id/${gameId}`
  );
  if (!res.ok) throw new Error("Error fetching game");
  return res.json();
};
