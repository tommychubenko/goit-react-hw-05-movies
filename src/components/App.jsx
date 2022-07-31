import { AppBar } from './appBar/AppBar';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { Actors } from './pages/Actors';
import { NotFound } from './pages/NotFoud';
import { MovieDetails } from './pages/MovieDetails';
import { Cast } from './pages/Cast';
import { Reviews } from './pages/Reviews';

export const App = () => {
  const API = '9e6113c0b6a4b2fdad1879122d0c5886';

  return (
    <div
      style={{
        padding: '10px 24px',
      }}
    >
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails API={API} />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="actors" element={<Actors />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// API KEY 9e6113c0b6a4b2fdad1879122d0c5886
// https://api.themoviedb.org/3/movie/550?api_key=9e6113c0b6a4b2fdad1879122d0c5886
