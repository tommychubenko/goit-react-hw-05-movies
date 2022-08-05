import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchPopularMovies } from '../../api/api';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetchPopularMovies().then(r => setPopularMovies(r.results));
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
