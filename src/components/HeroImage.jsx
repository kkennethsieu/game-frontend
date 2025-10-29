// src/components/Hero.jsx
import React from "react";
import SearchBar from "./SearchBar";

const HeroImage = ({
  image,
  title,
  subtitle,
  showSearch = false,
  textAlign = "center",
}) => {
  let alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <section className="relative w-full h-64 md:h-96 lg:h-[550px]">
      <img
        src={image}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div
        className={`relative z-10 flex flex-col justify-center h-full px-4 gap-4 ${alignmentClasses[textAlign]}`}
      >
        <h3 className="font-arvo font-semibold text-gray-100 text-2xl">
          {title}
        </h3>
        {subtitle && <p className="mt-2 max-w-xl text-gray-200">{subtitle}</p>}
        {showSearch && <SearchBar />}
      </div>
    </section>
  );
};

export default HeroImage;
