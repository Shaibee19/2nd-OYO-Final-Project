import logo from '../assets/Mooviez logo.png'

function Searches() {
  const apiKey = "4ea1d0b9";

  // GRABBING ELEMENTS FROM HTML
  const movieListEl = document.querySelector(".movie-list");
  // movieListEl.innerHTML = "<p class="loading">🍿 Loading movies...</p>";
  const searchName = document.querySelector(".searchName");

  // GLOBAL MOVIES VARIABLE
  let currentMovies = [];
  let moviesDataResponse = "";

  // DISPLAYING MOVIES
  function displayMovies(movieList) {
    if (moviesDataResponse === "True" && movieList) {
      movieListEl.innerHTML = movieList
        .map((movie) => movieHTML(movie))
        .slice(0, 10)
        .join("");
    } else {
      //   movieListEl.innerHTML =
      // "<p>No mooviez found for your search. Please low a different term.</p>";
      console.warn("OMDB API response:");
    }
  }

  // CALLING API
  async function main(searchInput) {
    try {
      const movies = await fetch(
        `http://www.omdbapi.com/?s=${searchInput}&apikey=${apiKey}`
      );
      const moviesData = await movies.json();
      currentMovies = moviesData.Search;
      moviesDataResponse = moviesData.Response;
      displayMovies(currentMovies);
    } catch (err) {
      console.error("Error fetching movies:", err);
        // movieListEl.innerHTML =
      //     "<p>An error occurred while rounding up those mooviez. Please try again later.</p>";
    }
  }

  function movieHTML(movie) {
    // console.log(movie)
    return `<div class="movie-card" onClick="movieDetails()">
            <div class="movie-card__container">
            <img src=${movie.Poster} alt=""/>
              <div class="movie-card__info">
                <h4>${movie.Title}</h4>
                <p><b>Year:</b> ${movie.Year}</p>
                <p>Click the card for more details</p>
              </div>
            </div>
          </div>`;
  }

  main("lion");

  // SORT BUTTON
  function onSortChange(event) {
    const sortOption = event.target.value;
    // document.getElementById("movieSort").addEventListener("change", onSortChange);

    let sortedMovies = [...currentMovies]; // A shallow copy to avoid mutating the original 'currentMovies'

    if (sortOption === "NEWEST") {
      sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    } else if (sortOption === "OLDEST") {
      sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (sortOption === "DESCENDING") {
      sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    } else if (sortOption === "ASCENDING") {
      sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    }
    console.log(sortedMovies);

    displayMovies(sortedMovies); // Pass the sorted array to displayMovies
  }

  return (
    <>
      <nav class="container">
        <div class="row nav__row">
          <div class="nav__logo--wrapper">
            <figure class="nav__logo">
              <img class="nav__logo--img" src={logo} alt="Logo" />;
            </figure>
            <div class="nav__logo--title">
              <span class="purple">Mooviez</span>
            </div>
          </div>
          <ul class="nav__links">
            <li>
              <a href="" class="nav__link link__hover-effect">
                Home
              </a>
            </li>
            <li>
              <a href="" class="nav__link link__hover-effect">
                Find your Moovie
              </a>
            </li>
            <li>
              <button id="theme-toggle">Mode Toggle</button>
            </li>
          </ul>
        </div>
      </nav>
      <section id="results">
        <div class="container">
          <div class="row results__row">
            <h2 class="results__title">Search Results:</h2>
            <span
              class="searchName"
              //   style="color: #f8f8f8; opacity: 0.5"
            ></span>
            <h3 class="results__subtitle">
              Options:
              <select name="" id="movieSort" onchange="onSortChange(event)">
                <option value="" disabled selected>
                  Sort
                </option>
                <option value="ASCENDING">Title: A-Z</option>
                <option value="DESCENDING">Title: Z-A</option>
                <option value="NEWEST">Year: Newest to Oldest</option>
                <option value="OLDEST">Year: Oldest to Newest</option>
              </select>
            </h3>
          </div>
          <p class="loading"></p>
          <div class="movie-list">
            <div class="movie">
              <div class="movie-card">
                <div class="movie-card__container">
                  <div class="movie-card__info">
                    <h4>Movie Name</h4>
                    <p>
                      <b>Year:</b>Movie Year
                    </p>
                    <p>
                      <b>Genre:</b>Movie Genre
                    </p>
                    <p>
                      <b>Rating:</b>Movie Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Searches;
