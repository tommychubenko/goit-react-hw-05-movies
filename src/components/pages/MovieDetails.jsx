import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { StyledLink } from '../navigation/Navigation.module';

export const MovieDetails = ({ API, actors }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  const imagePath = 'https://image.tmdb.org/t/p/w500/';

  const getExactMovieDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API}&append_to_response=credits,reviews`
    ).then(response => response.json().then(response => setMovie(response)));
  };

  useEffect(() => {
    getExactMovieDetails();
  }, []);

  //   actors(movie.credits.cast);

  //   useEffect(() => {
  //     actors(movie.credits.cast);
  //   }, [movie]);

  return (
    <div>
      {movie && (
        <div className="movie_card">
          <img src={imagePath + movie.poster_path} alt="" />
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
          <div className="additional-info">
            <h3>Additional information</h3>
            <hr />

            <StyledLink to="cast">Cast</StyledLink>

            <StyledLink to="reviews">Reviews</StyledLink>
            <hr />
            <Outlet
            //   actors={movie.credits.cast}
            />

            {/* <Routes>
              <Route path="cast" element={<Cast />}></Route>
            </Routes> */}

            {/* <AdditionalInfo /> */}

            {/* <h4>Cast:</h4> */}

            {/* <ul>
              {movie.credits.cast.map((actor, index) => {
                if (index < 5) {
                  return <li key={actor.id}>{actor.name}</li>;
                }
              })}
            </ul> */}
          </div>
        </div>
      )}
    </div>
  );
};
