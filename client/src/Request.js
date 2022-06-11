const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=horror&page=1&include_adult=true`,
};

export default requests;
