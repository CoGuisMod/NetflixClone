import React from "react";
import { FaRegBookmark, FaPlay } from "react-icons/fa";

const BrowseHero = ({ movieTitle, movieOverview, movieImage }) => {
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <section className="relative">
      <img
        src={`https://image.tmdb.org/t/p/original${movieImage}`}
        alt=""
        className="w-full h-screen object-cover object-center"
      />
      <div className="absolute left-0 top-0 flex justify-start items-center bg-gradient-to-r from-black/50 w-full max-w-7xl h-screen mx-auto px-4 md:px-20">
        <div className="max-w-xl">
          <h1 className="font-bold text-5xl">{movieTitle}</h1>
          <div className="flex gap-3 mt-4">
            <button className="flex items-center gap-2 bg-white rounded font-medium text-black text-xl px-2 py-1">
              <FaPlay className="text-lg" />
              Play
            </button>
            <button className="flex items-center gap-2 bg-neutral-400/50 rounded font-medium text-xl px-2 py-1">
              <FaRegBookmark className="text-lg" />
              Watch Later
            </button>
          </div>
          <p className="mt-4">{truncateString(movieOverview, 150)}</p>
        </div>
      </div>
    </section>
  );
};

export default BrowseHero;
