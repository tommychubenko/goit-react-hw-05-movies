import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getExactMovieDetails } from '../../api/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const imagePath = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getExactMovieDetails(movieId).then(r => setMovie(r));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <ul className="cast_actor--list">
      {movie &&
        movie.credits.cast
          .filter((actor, index) => {
            return index < 9;
          })
          .map((actor, index) => {
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
          })}
    </ul>
  );
};
