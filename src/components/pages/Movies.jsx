import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const Movies = () => {
  const [movieInquiry, setMovieInquiry] = useState('');

  const onChange = e => {
    setMovieInquiry(e.currentTarget.value);
  };

  let navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    navigate(`/movies/search/${movieInquiry}`);
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

        <button type="submit">Search</button>
      </form>
      <Outlet />
    </div>
  );
};
