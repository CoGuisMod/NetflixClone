import React, { useEffect, useState } from "react";
import requests from "../../Request";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Row from "../../components/Row/Row";

const Browse = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  console.log(movie, "movies hero");

  return (
    <div className="bg-neutral-900 text-white">
      <Hero
        movieTitle={movie?.title}
        movieOverview={movie?.overview}
        movieImage={movie?.backdrop_path}
      />
      <Row
        rowID="rowOne"
        rowTitle="Upcoming"
        fetchURL={requests.requestUpcoming}
      />
      <Row
        rowID="rowTwo"
        rowTitle="Trending this week"
        fetchURL={requests.requestTrending}
      />
      <Row
        rowID="rowThree"
        rowTitle="Top Rated"
        fetchURL={requests.requestTopRated}
      />
      <Row
        rowID="rowFour"
        rowTitle="Horror Movies"
        fetchURL={requests.requestHorror}
      />
    </div>
  );
};

export default Browse;
