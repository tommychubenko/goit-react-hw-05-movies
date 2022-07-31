import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// 9e6113c0b6a4b2fdad1879122d0c5886

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const fetchMovies = () => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=9e6113c0b6a4b2fdad1879122d0c5886'
    ).then(response =>
      response.json().then(response => setPopularMovies(response.results))
    );
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const MarkupMoviesTitles = () => {
    return (
      <ul className="book-list">
        {popularMovies.map(movie => (
          <li key={movie.id} className="book-item">
            <Link className="book-link" to={`/movies/${movie.id}`}>
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
