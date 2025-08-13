import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

function Home() {

  // const { imdbID } = useParams();
  // const [searchID, setSearchID] = useState(imdbID);

  
  // SEARCH BUTTON
  // function onSearch() {
    // fetchMovies(searchID);
  // }

  // fetchMovies();

  return (
    <>
      <div className="App">
        <section id="navigation">
          <Nav />
          <SearchBar />
        </section>
        <Modal />
        <Footer />
      </div>
    </>
  );
}

export default Home;
