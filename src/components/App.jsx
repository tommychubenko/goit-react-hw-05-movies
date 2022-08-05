import { AppBar } from './appBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { NotFound } from './pages/NotFoud';
import { MovieDetails } from './pages/MovieDetails';
import { Cast } from './pages/Cast';
import { Reviews } from './pages/Reviews';

export const App = () => {
  const [selectedMovie, setSelectedMovie] = useState('');

  const getSelectedMovie = selectedMovie => {
    setSelectedMovie(selectedMovie);
  };

  return (
    <div
      style={{
        padding: '10px 24px',
      }}
    >
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goit-react-hw-05-movies/" element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route
          path="movies/:movieId"
          element={<MovieDetails selectedMovie={getSelectedMovie} />}
        >
          <Route path="cast" element={<Cast selectedMovie={selectedMovie} />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
