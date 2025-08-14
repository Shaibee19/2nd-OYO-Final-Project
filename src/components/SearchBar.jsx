import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
    // const { imdbID } = useParams();
  // const [searchInput, setSearchInput] = useState(imdbID);

  // SEARCH BUTTON
// function onSearchChange(event) {
//   main(event.target.value);
//   searchName.innerHTML = event.target.value;

//   const searchForm = document.getElementById("search-form");
//   const searchInput = document.getElementById("search-input");

//   searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const query = searchInput.value.trim();
//     if (query) {
//       main(query);
//     }
//   });
// }

  // "<p>No mooviez found for your search. Please low a different term.</p>";
  // console.warn("OMDB API response:");=
  
  // fetchMovies();

  return (
    <>
      <header id="header">
        <div className="container">
          <h1 className="header__title">Trail through our Motion Pictures</h1>
          <form className="input__wrapper" id="search-form">
            <input
              type="text"
              id="search-input"
              // value={searchID}
              placeholder="Graze by Title, Year, Genre, or even Rating"
              onchange="onSearchChange(event)"
            />
            <button
              type="submit"
              className="search__wrapper"
              onClick="onSearchChange(event)"
            >
              <FontAwesomeIcon icon="magnifying-glass" />
            </button>
          </form>
        </div>
      </header>
    </>
  );
};

export default SearchBar;
