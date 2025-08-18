import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/${searchInput}`);
    }
  };

  return (
    <>
      <header id="header">
        <div className="container">
          <h1 className="header__title">Trail through our Motion Pictures</h1>
          <form onSubmit={handleSearch} className="input__wrapper" id="search-form">
            <input
              type="text"
              id="search-input"
              value={searchInput}
              placeholder="Graze by Title, Year, Genre, or even Rating"
              // onChange={(e) => onSearchChange(e.target.value)}
            />
            <button
              type="submit"
              className="search__wrapper"
              // onClick={(e) => onSearchChange(e.target.value)}
            >
              <FontAwesomeIcon icon="magnifying-glass" />
            </button>
          </form>
        </div>
      </header>
      <div></div>
    </>
  );
};

export default SearchBar;
