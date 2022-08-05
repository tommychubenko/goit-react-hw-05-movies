import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { StyledLink } from '../navigation/Navigation.module';
import { getExactMovieDetails } from '../../api/api';

export const MovieDetails = ({ selectedMovie }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  const location = useLocation();
  const imagePath = 'https://image.tmdb.org/t/p/w500/';

  const savedNavigate = useRef(location.state?.from);

  useEffect(() => {
    selectedMovie(movie);
    getExactMovieDetails(movieId).then(r => setMovie(r));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <div>
      {movie && (
        <div>
          <StyledLink
            to={savedNavigate.current ?? 'xxx'}
            state={{ from: location }}
          >
            BACK
          </StyledLink>

          <div className="movie_card">
            <div>
              <img
                src={imagePath + movie.poster_path}
                alt=""
                className="movie_image"
              />
            </div>
            <div>
              <h1>{movie.original_title}</h1>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres:</h2>
              <p>
                {movie.genres.map(genres => (
                  <span className="movie_genres" key={genres.name}>
                    {genres.name}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="additional-info">
            <h3>Additional information</h3>
            <hr />

            <StyledLink to="cast">Cast</StyledLink>

            <StyledLink to="reviews">Reviews</StyledLink>
            <hr />
            <div className="cast-and-reviews">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
