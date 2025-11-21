import { useEffect, useState } from "react";

// Images
import BgImage from "assets/sonicHero.webp";
import HeroImage from "features/home/components/HeroImage";

//Component
import GameList from "features/home/components/GameList";

const BASEURL = `http://localhost:8000`;

function HomePage() {
  const [trendingGames, setTrendingGames] = useState([]);
  const [featuredGames, setFeaturedGames] = useState([]);
  const [staffGames, setStaffGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const [trendingRes, featuredRes, staffRes] = await Promise.all([
          fetch(`${BASEURL}/games/lists/trending`),
          fetch(`${BASEURL}/games/lists/featured`),
          fetch(`${BASEURL}/games/lists/staff-picks`),
        ]);

        const [trendingData, featuredData, staffData] = await Promise.all([
          trendingRes.json(),
          featuredRes.json(),
          staffRes.json(),
        ]);

        setTrendingGames(trendingData.trendingGames);
        setFeaturedGames(featuredData.featured);
        setStaffGames(staffData.staffPicks);
      } catch (err) {
        console.error(err);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      <HeroImage
        image={BgImage}
        title="Find a game and share a review with the community"
      />
      <div className="flex flex-col gap-10 mx-auto p-20 max-w-[1700px]">
        <GameList header="Trending" games={trendingGames} />
        <GameList header="Highly Rated" games={featuredGames} />
        <GameList header="Staff Picks" games={staffGames} />
      </div>
    </div>
  );
}

export default HomePage;
