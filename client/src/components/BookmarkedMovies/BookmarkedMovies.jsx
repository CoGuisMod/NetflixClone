import React, { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { firebaseFirestore } from "../../firebase/config";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";

const BookmarkedMovies = () => {
  const { user } = UserAuth();

  const [movies, setMovies] = useState([]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(firebaseFirestore, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.bookmarks);
    });
  }, [user?.email]);

  const movieRef = doc(firebaseFirestore, "users", `${user?.email}`);

  const unBookmark = async (passedID) => {
    try {
      const result = movies.filter((movie) => movie.id !== passedID);
      await updateDoc(movieRef, {
        bookmarks: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4">
      <h2 className="font-bold text-white text-2xl">My Bookmarks</h2>
      <div className="relative group mt-4">
        <FaChevronLeft
          onClick={slideLeft}
          className="cursor-pointer absolute left-2 top-1/2 bg-white rounded-full text-black text-4xl z-10 p-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
        />
        <div
          id={"slider"}
          className="w-full h-full pl-10 whitespace-nowrap space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="cursor-pointer relative rounded text-white w-40 md:w-64 inline-block overflow-hidden"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.image}`}
                alt={movie.title}
              />
              <div className="absolute left-0 top-0 flex justify-center items-center bg-black/50 font-bold text-xl text-center w-full h-full px-4 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out">
                <div
                  onClick={() => unBookmark(movie.id)}
                  className="absolute right-2 top-2"
                >
                  <FaPlus className="rotate-45" />
                </div>
                <h3 className="whitespace-normal w-full">{movie.title}</h3>
              </div>
            </div>
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

export default BookmarkedMovies;
