// import logo from "../assets/Mooviez logo.png";
// import React, { useEffect, useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

// function MovieSearches({movies: currentMovies}) => {

//   let navigate = useNavigate();
//   const { imdbID } = useParams();
//   const [movies, setMovies] = useState(currentMovies);
//   const [loading, setLoading] = useState();
//   const [searchID, setSearchID] = useState(imdbID);

 

// // GRABBING ELEMENTS FROM HTML
//   const movieListEl = document.querySelector(".movie-list");
//   const searchName = document.querySelector(".searchName");

//   let currentMovies = [];

//   // DISPLAYING MOVIES
//   // function displayMovies(movieList) {
//     // if (moviesDataResponse === "True" && movieList) {
//   //     movieListEl.innerHTML = movieList
//   //       // .map((movie) => movieHTML(movie))
//   //       .slice(0, 10)
//   //       .join("");
//   // } else {
//   //   movieListEl.innerHTML =
//   // "<p>No mooviez found for your search. Please low a different term.</p>";
//   // console.warn("OMDB API response:");
//   // }
//   // }



//   // SORT BUTTON
//   function onSortChange(event) {
//     const sortedMovies = [...currentMovies]; // A shallow copy to avoid mutating the original 'currentMovies'

//     if (onSortChange === "NEWEST") {
//       sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
//     } else if (onSortChange === "OLDEST") {
//       sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
//     } else if (onSortChange === "DESCENDING") {
//       sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
//     } else if (onSortChange === "ASCENDING") {
//       sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
//     }

//     // displayMovies(sortedMovies); // Pass the sorted array to displayMovies
//   }

//   return (
//     <>
//       <nav className="container">
//         <div className="row nav__row">
//           <div className="nav__logo--wrapper">
//             <figure className="nav__logo">
//               <img className="nav__logo--img" src={logo} alt="Logo" />;
//             </figure>
//             <div className="nav__logo--title">
//               <span className="purple">Mooviez</span>
//             </div>
//           </div>
//           <ul className="nav__links">
//             <li>
//               <a href="" className="nav__link link__hover-effect">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="" className="nav__link link__hover-effect">
//                 Find your Moovie
//               </a>
//             </li>
//             <li>
//               <button id="theme-toggle">Mode Toggle</button>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <section id="results">
//         <div className="container">
//           <div className="row results__row">
//             <h2 className="results__title">Search Results:</h2>
//             <span
//               className="searchName"
//               //   style="color: #f8f8f8; opacity: 0.5"
//             ></span>
//             <h3 className="results__subtitle">
//               Options:
//               <select name="" id="movieSort" onchange={(event) => setSearchID(event.target.value)}>
//                 <option value="" disabled selected>
//                   Sort
//                 </option>
//                 <option value="ASCENDING">Title: A-Z</option>
//                 <option value="DESCENDING">Title: Z-A</option>
//                 <option value="NEWEST">Year: Newest to Oldest</option>
//                 <option value="OLDEST">Year: Oldest to Newest</option>
//               </select>
//             </h3>
//           </div>
//           {loading
//             ? new Array(10)
//                 .fill(0)
//                 .map((_) => (
//                   <p className="loading">🍿 Loading movies...</p>
//                 ))
//             : movies.map((movie) => (
//                 <div className="movie-list">
//                   <div className="movie">
//                     <div class="movie-card" onClick={() => navigate("/{movie}")}>
//                       <div class="movie-card__container">
//                         <img src={movie.Poster} alt="" />
//                         <div class="movie-card__info">
//                           <h4>{movie.Title}</h4>
//                           <p>
//                             <b>Year:</b> {movie.Year}
//                           </p>
//                           <p>Click the card for more details</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//         </div>
//       </section>
//     </>
//   );
// }

// export default MovieSearches;
