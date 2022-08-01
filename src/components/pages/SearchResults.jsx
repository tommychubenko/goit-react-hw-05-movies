import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const SearchResults = ({ API }) => {
  const [searchresult, setSearchResult] = useState('');
  const { word } = useParams();

  const getMovieByWord = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${word
        .split(' ')
        .join('+')}`
    ).then(response =>
      response.json().then(response => setSearchResult(response.results))
    );
  };

  const imagePath = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getMovieByWord();
  }, [word]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="search_results--thumb">
      <h2 className="search_results--title">Search results for {word}</h2>
      <ul className="search_results--list">
        {searchresult &&
          searchresult.map(movie => {
            return (
              <li key={movie.id} className="search_results--item">
                <Link to={`/movies/${movie.id}`}>
                  {movie.poster_path ? (
                    <img
                      src={imagePath + movie.poster_path}
                      alt=""
                      srcset=""
                      className="search_results--image"
                    />
                  ) : (
                    <img
                      src="https://media.comicbook.com/files/img/default-movie.png"
                      alt=""
                      srcset=""
                      className="search_results--image"
                    />
                  )}

                  {movie.title.includes('http') ? word : movie.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
