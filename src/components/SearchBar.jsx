import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ placeholder = "Search...", value, onChange }) => {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="py-2 pr-4 pl-10 border border-gray-300 focus:border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      <MagnifyingGlassIcon className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
    </div>
  );
};

export default SearchBar;
