// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const Movie = () => {
//   const { imdbID } = useParams();
  
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState();
//   const [searchInput, setSearchInput] = useState(imdbID);

//   let navigate = useNavigate();

//         // `http://www.omdbapi.com/?s=${searchInput}&apikey=${apiKey}`

//   return (
//     <>
//       {loading
//         ? new Array(10)
//             .fill(0)
//             .map((_) => <p className="loading">🍿 Loading movies...</p>)
//         : movies && (
//             <div className="movie-list">
//               <div className="movie">
//                 <div
//                   class="movie-card"
//                   onClick={() => navigate(`/movies/${movies.imdbID}`)}
//                 >
//                   <div class="movie-card__container">
//                     <img src={movies.Poster} alt="" />
//                     <div class="movie-card__info">
//                       <h4>{movies.Title}</h4>
//                       <p>
//                         <b>Year:</b> {movies.Year}
//                       </p>
//                       <p>Click the card for more details</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//     </>
//   );
// };

// export default Movie;

// // skeleton loading 
// {/* <>
//           <div className="movie__img--skeleton"></div>
//           <div className="skeleton movie__title--skeleton"></div>
//           <div className="skeleton movie__year--skeleton"></div>
//           <div className="skeleton movie__description--skeleton"></div>
//         </> */}