import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Cast = ({ API }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const imagePath = 'https://image.tmdb.org/t/p/w500';

  const getExactMovieDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API}&append_to_response=credits,reviews`
    ).then(response => response.json().then(response => setMovie(response)));
  };

  useEffect(() => {
    getExactMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <ul className="cast_actor--list">
      {movie &&
        movie.credits.cast.map((actor, index) => {
          if (index < 9) {
            return (
              <li key={actor.id} className="cast_actor--item">
                {actor.profile_path ? (
                  <img
                    src={imagePath + actor.profile_path}
                    alt=""
                    className="cast_actor--image"
                  />
                ) : (
                  <img
                    src="https://dbis-informatik.uibk.ac.at/sites/default/files/default_images/default-avatar_0.png"
                    alt=""
                    className="cast_actor--image"
                  />
                )}
                <p>{actor.name}</p>
              </li>
            );
          }
        })}{' '}
    </ul>
  );
};
