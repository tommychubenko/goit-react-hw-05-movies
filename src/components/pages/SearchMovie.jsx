import { useState } from 'react';
import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { SearchResults } from './SearchResults';

export const SearchMovie = ({ sendMovieInquiry }) => {
  const [movieInquiry, setMovieInquiry] = useState('');

  const onChange = e => {
    setMovieInquiry(e.currentTarget.value);
  };

  let navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    sendMovieInquiry(movieInquiry);
    navigate(`/movies?query=${movieInquiry}`);
    setMovieInquiry('');
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
        {/* <Link to={`/movies?query=${movieInquiry}`}> */}
        <button type="submit">Search</button>
        {/* </Link> */}
      </form>
      <Outlet />
      {/* <SearchResults /> */}
    </div>
  );
};
