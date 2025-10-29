import SearchBar from "../components/SearchBar";
import BgImage from "../assets/sonicHero.webp";
import HeroImage from "../components/HeroImage";
import GameList from "../features/home/GameList";

function Home() {
  return (
    <div>
      <HeroImage
        image={BgImage}
        title="Find a game and share a review with the community"
        showSearch={true}
      />
      <div className="flex flex-col gap-10 mx-auto p-20 max-w-[1700px]">
        <GameList title="Trending" />
        <GameList title="Highly Rated" />
      </div>
    </div>
  );
}

export default Home;
