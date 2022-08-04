import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchPopularMovies } from '../../api/api';

export const Home = ({ API }) => {
  const [popularMovies, setPopularMovies] = useState([]);

  const location = useLocation();
  // const { from } = location.state;

  const fetchMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API}`
    ).then(response =>
      response.json().then(response => setPopularMovies(response.results))
    );
  };

  useEffect(() => {
    fetchMovies();

    // const GetPopularMovies = async () => {
    //   const r = await fetchPopularMovies();
    //   console.log(r);
    // };
    // GetPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const MarkupMoviesTitles = () => {
    return (
      <ul className="book-list">
        {popularMovies.map(movie => (
          <li key={movie.id} className="book-item">
            <Link
              className="book-link"
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Trending today</h1>
      {popularMovies && MarkupMoviesTitles()}
    </div>
  );
};
