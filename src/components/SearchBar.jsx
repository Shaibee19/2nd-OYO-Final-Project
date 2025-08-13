import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
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
