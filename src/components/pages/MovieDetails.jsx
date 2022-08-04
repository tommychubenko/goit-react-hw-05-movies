// import { useEffect, useState, useRef } from 'react';
// import { useParams, Outlet, useLocation } from 'react-router-dom';
// import { StyledLink } from '../navigation/Navigation.module';

// export const MovieDetails = ({ API, selectedMovie, state }) => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState('');
//   // const [location, setLocation] = useState('');
//   const location = useLocation();
//   // const { from } = location.state.from;
//   // console.log(location);

//   const imagePath = 'https://image.tmdb.org/t/p/w500/';

//   const getExactMovieDetails = () => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API}&append_to_response=credits,reviews`
//     ).then(response => response.json().then(response => setMovie(response)));
//   };

//   // let navigate = useNavigate();

//   // console.log(location?.state);
//   const savedNavigate = useRef(location.state?.from);
//   // console.log(savedNavigate.current);

//   useEffect(() => {
//     selectedMovie(movie);
//     getExactMovieDetails();
//   }, [movieId]);

//   return (
//     <div>
//       {movie && (
//         <div>
//           <StyledLink
//             to={savedNavigate.current ?? 'xxx'}
//             state={{ from: location }}
//           >
//             BACK
//           </StyledLink>
//           {/* <button
//             onClick={() => {
//               NavigateBack();
//             }}
//           >
//             Go Back
//           </button> */}
//           <div className="movie_card">
//             <div>
//               <img
//                 src={imagePath + movie.poster_path}
//                 alt=""
//                 className="movie_image"
//               />
//             </div>
//             <div>
//               <h1>{movie.original_title}</h1>
//               <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
//               <h2>Overview</h2>
//               <p>{movie.overview}</p>
//               <h2>Genres:</h2>
//               <p>
//                 {movie.genres.map(genres => (
//                   <span className="movie_genres" key={genres.name}>
//                     {genres.name}
//                   </span>
//                 ))}
//               </p>
//             </div>
//           </div>

//           <div className="additional-info">
//             <h3>Additional information</h3>
//             <hr />

//             <StyledLink to="cast">Cast</StyledLink>

//             <StyledLink to="reviews">Reviews</StyledLink>
//             <hr />
//             <div className="cast-and-reviews">
//               <Outlet />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
