import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchQuery from "./SearchQuery";

const BASEURL = "http://localhost:8000";

const SearchBar = ({ placeholder = "Search..." }) => {
  const [searchedGames, setSearchedGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      setSearchedGames([]);
      return;
    }
    setIsLoading(true);
    const handler = setTimeout(async () => {
      try {
        const res = await fetch(`${BASEURL}/games/search/${searchQuery}`);
        const data = await res.json();
        setSearchedGames(data.searched);
      } catch (error) {
        console.error(error);
        setSearchedGames([]);
      } finally {
        setIsLoading(false);
      }
    }, 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  return (
    <>
      <div className="relative w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="py-2 pr-4 pl-10 border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <MagnifyingGlassIcon className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
        </div>
        {searchedGames?.length > 0 && (
          <div className="z-10 absolute bg-white shadow-lg mt-1 border border-gray-200 rounded-lg divide-y w-full">
            {searchedGames.map((game) => (
              <SearchQuery key={game.id} game={game} />
            ))}
          </div>
        )}
        {!isLoading &&
          searchQuery?.length > 0 &&
          searchedGames?.length === 0 && (
            <div className="z-10 absolute bg-white shadow-lg mt-1 p-2 border border-gray-200 rounded-lg divide-y w-full">
              <p>No results found</p>
            </div>
          )}
      </div>
    </>
  );
};

export default SearchBar;
