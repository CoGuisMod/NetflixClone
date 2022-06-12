import React from "react";
import { UserAuth } from "../../context/AuthContext";
import BookmarkedMovies from "../../components/BookmarkedMovies/BookmarkedMovies";

const Account = () => {
  const { user } = UserAuth();

  return (
    <>
      <section className="bg-hero-image bg-center bg-cover text-white h-[75vh]">
        <div className="flex items-center bg-neutral-900/50 w-full h-full p-4 md:p-8">
          <h1 className="font-bold text-3xl md:text-5xl">{user?.email}</h1>
        </div>
      </section>
      <section className="bg-neutral-900">
        <BookmarkedMovies />
      </section>
    </>
  );
};

export default Account;
