import React from "react";

const Home = () => {
  return (
    <section className="bg-hero-image bg-center bg-cover text-white h-screen">
      <div className="flex flex-col justify-center items-center gap-4 bg-neutral-900/50 text-center w-full h-full">
        <h1 className="font-bold text-6xl max-w-2xl">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="font-medium text-3xl">
          Watch anywhere. Cancel anytime.
        </h2>
      </div>
    </section>
  );
};

export default Home;
