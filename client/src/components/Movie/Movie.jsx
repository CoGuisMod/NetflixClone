import React, { useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { UserAuth } from "../../context/AuthContext";
import { firebaseFirestore } from "../../firebase/config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ movie }) => {
  const { user } = UserAuth();
  const [bookmarked, setBookmarked] = useState(false);

  const movieID = doc(firebaseFirestore, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setBookmarked(!bookmarked);
      await updateDoc(movieID, {
        bookmarks: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <div className="cursor-pointer relative rounded w-40 md:w-64 inline-block overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="absolute left-0 top-0 flex justify-center items-center bg-black/50 font-bold text-xl text-center w-full h-full px-4 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out">
        <div onClick={saveShow} className="absolute right-2 top-2">
          {bookmarked ? (
            <FaBookmark className="text-lg" />
          ) : (
            <FaRegBookmark className="text-lg" />
          )}
        </div>
        <h3 className="whitespace-normal w-full">{movie.title}</h3>
      </div>
    </div>
  );
};

export default Movie;
