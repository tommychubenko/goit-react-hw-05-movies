import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getExactMovieDetails } from '../../api/api';

export const Reviews = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    getExactMovieDetails(movieId).then(r => setMovie(r));
  }, [movieId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {movie && movie.reviews.results.length > 0 ? (
        <ul className="review_list">
          {movie.reviews.results
            .filter((review, index) => {
              return index < 5;
            })
            .map((review, index) => {
              return (
                <li key={review.id} className="review_item">
                  <p>
                    <b>{review.author}</b>
                  </p>
                  <p>{review.content}</p>
                </li>
              );
            })}
        </ul>
      ) : (
        'Sorry. We do not have any reviews for this movie.'
      )}
    </div>
  );
};
