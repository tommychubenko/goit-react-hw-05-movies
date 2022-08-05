const API = '9e6113c0b6a4b2fdad1879122d0c5886';

export const fetchPopularMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API}`
  ).then(response => response.json());
};

export const getMovieByWord = word => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${word
      .split(' ')
      .join('+')}`
  ).then(response => response.json());
};

export const getExactMovieDetails = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API}&append_to_response=credits,reviews`
  ).then(response => response.json());
};
