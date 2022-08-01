import { AppBar } from './appBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { NotFound } from './pages/NotFoud';
import { MovieDetails } from './pages/MovieDetails';
import { Cast } from './pages/Cast';
import { Reviews } from './pages/Reviews';
import { SearchResults } from './pages/SearchResults';

export const App = () => {
  const API = '9e6113c0b6a4b2fdad1879122d0c5886';
  // const [movieInquiry, setMovieInquiry] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  const getSelectedMovie = selectedMovie => {
    setSelectedMovie(selectedMovie);
  };

  const getMovieInquiry = data => {
    console.log(data);
  };

  return (
    <div
      style={{
        padding: '10px 24px',
      }}
    >
      <AppBar />
      <Routes>
        <Route path="/" element={<Home API={API} />} />
        <Route
          path="movies"
          element={<Movies API={API} sendMovieInquiry={getMovieInquiry} />}
        >
          <Route
            // !!! Я намагався вписати закоментований варіант, але він не працює, праює тільки коли випадковий параметрипісля слеша ('/')
            // path="/movies?query=:word"
            path="/movies/search/:word"
            element={<SearchResults API={API} />}
          />
        </Route>
        <Route
          path="movies/:movieId"
          element={<MovieDetails API={API} selectedMovie={getSelectedMovie} />}
        >
          <Route
            path="cast"
            element={<Cast API={API} selectedMovie={selectedMovie} />}
          />
          <Route path="reviews" element={<Reviews API={API} />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
