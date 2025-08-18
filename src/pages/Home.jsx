import SearchBar from "../components/SearchBar";
import Featured from "../components/Featured";

function Home() {

  return (
    <>
      <div className="App">
        <section id="navigation">
          <SearchBar />
        </section>
        <Featured />
      </div>
    </>
  );
}

export default Home;
