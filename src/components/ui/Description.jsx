// // FUTURE DETAIL DISPLAYING
// //   async function movieDetails() {
// // console.log("Displaying details for movie ID:", imdbID)
// // window.location.href = `movie-details.html?id=${imdbID}`;
// // const movieDetailsPromises = moviesData.Response.map(async (movie) => {
// //   const detailMovie = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`);
// //   const fullDetails = await detailMovie.json();
// //   return fullDetails;
// // });

// // const fullMovies = await Promise.all(movieDetailsPromises);
// // movieHTML(fullMovies);
// // alert("Haven't done this coding yet :'[");
// //   }

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Description = () => {
//   const apiKey = "4ea1d0b9";
//   const { imdbID } = useParams();
//   const [movieDescription, setMovieDescription] = useState([]);
//   const [loading, setLoading] = useState();

//   async function fetchMovieDescription(imdbID) {
//     setLoading(true);
//     const { data } = await axios.get(
//       `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`
//     );
//     setMovieDescription(data);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchMovieDescription();
//   }, []);
// };

// export default Description;
