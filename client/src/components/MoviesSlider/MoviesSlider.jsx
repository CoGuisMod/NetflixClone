import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MovieCard from "../MovieCard/MovieCard";

const MoviesSlider = ({ msID, msTitle, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const slideLeft = () => {
    var slider = document.getElementById(msID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(msID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4">
      <h2 className="font-bold text-2xl">{msTitle}</h2>
      <div className="relative group mt-4">
        <FaChevronLeft
          onClick={slideLeft}
          className="cursor-pointer absolute left-2 top-1/2 bg-white rounded-full text-black text-4xl z-10 p-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
        />
        <div
          id={msID}
          className="w-full h-full pl-10 whitespace-nowrap space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {movies.map((movie, id) => (
            <MovieCard key={id} movie={movie} />
          ))}
        </div>
        <FaChevronRight
          onClick={slideRight}
          className="cursor-pointer absolute right-2 top-1/2 bg-white rounded-full text-black text-4xl z-10 p-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default MoviesSlider;
