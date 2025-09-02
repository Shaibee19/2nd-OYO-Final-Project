import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
const [searchInput, setSearchInput] = useState("");

  return (
    <>
       <header id="header">
            <div className="container">
              <h1 className="header__title">
                Trail through our Motion Pictures
              </h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="input__wrapper"
                id="search-form"
              >
                <input
                  type="text"
                  id="search-input"
                  value={searchInput}
                  placeholder="Graze by Title, Year, Genre, or even Rating"
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="search__wrapper"
                  onClick={(e) => setSearchInput(e.target.value)}
                >
                  <FontAwesomeIcon icon="magnifying-glass" />
                </button>
              </form>
            </div>
          </header>
    </>
  )
};

export default SearchBar;
