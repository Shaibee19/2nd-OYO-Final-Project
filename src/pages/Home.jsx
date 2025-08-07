import logo from "../assets/Mooviez logo.png";
import altLogo from "../assets/Mooviez alternate logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const apiKey = "4ea1d0b9";
  // GRABBING ELEMENTS FROM HTML
  const movieListEl = document.querySelector(".movie-list");
  const searchName = document.querySelector(".searchName");

  // CALLING API
  async function main(searchInput) {
    try {
      const movies = await fetch(
        `http://www.omdbapi.com/?s=${searchInput}&apikey=${apiKey}`
      );
      const moviesData = await movies.json();
      // currentMovies = moviesData.Search
      // moviesDataResponse = moviesData.Response
      // displayMovies(currentMovies);
    } catch (err) {
      console.error("Error fetching movies:", err);
      movieListEl.innerHTML =
        "<p>An error occurred while rounding up those mooviez. Please try again later.</p>";
    }
  }

  // SEARCH BUTTON
  function onSearchChange(event) {
    main(event.target.value);
    searchName.innerHTML = event.target.value;

    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        main(query);
      }
    });
  }

  main();

  return (
    <>
      <div className="App">
        <section id="navigation">
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
                  <a
                    href="#"
                    onclick="toggleModal()"
                    class="nav__link nav__link--primary"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <button id="theme-toggle">Mode Toggle</button>
                </li>
              </ul>
            </div>
          </nav>
          <header id="header">
            <div class="container">
              <h1 class="header__title">Trail through our Motion Pictures</h1>
              <form class="input__wrapper" id="search-form">
                <input
                  type="text"
                  id="search-input"
                  placeholder="Graze by Title, Year, Genre, or even Rating"
                  onchange="onSearchChange(event)"
                />
                <button
                  type="submit"
                  class="search__wrapper"
                  onclick="onSearchChange(event)"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </form>
            </div>
          </header>
        </section>
        <footer id="footer">
          <div class="container">
            <div class="row footer__row">
              <div class="footer__top">
                <div class="footer__right">
                  <figure class="footer__logo">
                    <img
                      class="footer__logo--img"
                      src={altLogo}
                      alt="Alt Logo"
                    />
                  </figure>
                </div>
                <div class="footer__left">
                  <div class="footer__social--list">
                    <a
                      class="footer__social--link link__hover-effect"
                      href="https://github.com/Shaibee19"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    <a
                      class="footer__social--link link__hover-effect"
                      href="https://www.linkedin.com/in/shai-gray-woodland-aa285343/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                    <a
                      class="footer__social--link link__hover-effect"
                      href="#"
                      onclick="toggleModal()"
                    >
                      Contact
                    </a>
                    <a
                      class="footer__social--link link__hover-effect"
                      href=""
                      target="_blank"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
              <div class="footer__copyright">
                Copyright © 2025 Shai Gray-Woodland
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
