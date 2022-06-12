import React, { useEffect, useState } from "react";
import requests from "../../Request";
import axios from "axios";
import BrowseHero from "../../components/Hero/BrowseHero";
import MoviesSlider from "../../components/MoviesSlider/MoviesSlider";

const Browse = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="bg-neutral-900 text-white">
      <BrowseHero
        movieTitle={movie?.title}
        movieOverview={movie?.overview}
        movieImage={movie?.backdrop_path}
      />
      <MoviesSlider
        msID="msOne"
        msTitle="Upcoming"
        fetchURL={requests.requestUpcoming}
      />
      <MoviesSlider
        msID="msRowTwo"
        msTitle="Trending this week"
        fetchURL={requests.requestTrending}
      />
      <MoviesSlider
        msID="msThree"
        msTitle="Top Rated"
        fetchURL={requests.requestTopRated}
      />
      <MoviesSlider
        msID="msFour"
        msTitle="Horror Movies"
        fetchURL={requests.requestHorror}
      />
    </div>
  );
};

export default Browse;
