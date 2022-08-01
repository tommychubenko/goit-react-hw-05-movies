import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = ({ API }) => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  // const imagePath = 'https://image.tmdb.org/t/p/w500';

  const getExactMovieDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API}&append_to_response=credits,reviews`
    ).then(response => response.json().then(response => setMovie(response)));
  };

  useEffect(() => {
    getExactMovieDetails();
  }, [movieId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {movie && movie.reviews.results.length > 0 ? (
        <ul className="review_list">
          {
            movie.reviews.results.map((review, index) => {
              if (index < 5) {
                return (
                  <li key={review.id} className="review_item">
                    <p>
                      <b>{review.author}</b>
                    </p>
                    <p>{review.content}</p>
                  </li>
                );
              } // eslint-disable-line react-hooks/exhaustive-deps
            }) // eslint-disable-line react-hooks/exhaustive-deps
          }
        </ul>
      ) : (
        'Sorry. We do not have any reviews for this movie.'
      )}
    </div>
  );
};
