import { useState, useEffect } from 'react';
import {
  useNavigate,
  Link,
  useLocation,
  useSearchParams,
} from 'react-router-dom';

export const Movies = ({ API }) => {
  const [movieInquiry, setMovieInquiry] = useState('');
  const [searchterm, setSearchterm] = useState('');
  const [searchresults, setSearchResult] = useState();

  const imagePath = 'https://image.tmdb.org/t/p/w500/';

  const location = useLocation();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  // console.log(query, typeof query);

  useEffect(() => {
    setSearchResult('');
    query && getMovieByWord(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    setSearchResult('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = e => {
    setMovieInquiry(e.currentTarget.value);
  };

  let navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    navigate(`/movies?query=${movieInquiry}`);
    // getMovieByWord(movieInquiry);
    setSearchterm(movieInquiry);
    setMovieInquiry('');
  };

  const getMovieByWord = word => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${word
        .split(' ')
        .join('+')}`
    ).then(response =>
      response.json().then(response => setSearchResult(response.results))
    );
  };

  const Markup = () => {
    return (
      searchresults && (
        <div className="search_results--thumb">
          <h2 className="search_results--title">
            Search results for {searchterm}
          </h2>
          <ul className="search_results--list">
            {searchresults.map(movie => {
              return (
                <li key={movie.id} className="search_results--item">
                  <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    {movie.poster_path ? (
                      <img
                        src={imagePath + movie.poster_path}
                        alt=""
                        className="search_results--image"
                      />
                    ) : (
                      <img
                        src="https://media.comicbook.com/files/img/default-movie.png"
                        alt=""
                        className="search_results--image"
                      />
                    )}

                    {movie.title.includes('http') ? movieInquiry : movie.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )
    );
  };

  return (
    <div className="movies_search">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="movies_search--input"
          value={movieInquiry}
          placeholder="Enter name of movie that you are looking for"
          onChange={onChange}
        />

        <button type="submit">Search</button>
      </form>

      {searchresults && Markup()}
      {/* <Outlet /> */}
    </div>
  );
};
