import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../Request";
import {
  FaBookmark,
  FaRegBookmark,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";

import { firebaseFirestore } from "../../firebase/config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import Movie from "../Movie/Movie";

const Row = ({ rowID, rowTitle, fetchURL }) => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movies, "movies row");

  const slideLeft = () => {
    var slider = document.getElementById(rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-bold text-2xl">{rowTitle}</h2>
      <div className="relative group mt-4">
        <FaChevronLeft
          onClick={slideLeft}
          className="cursor-pointer absolute left-2 top-1/2 bg-white rounded-full text-black text-4xl z-10 p-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
        />
        <div
          id={rowID}
          className="w-full h-full whitespace-nowrap space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
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

export default Row;
