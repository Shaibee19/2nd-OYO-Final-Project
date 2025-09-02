import SearchBar from "../components/ui/SearchBar";
import Featured from "../components/ui/Featured";


function Home() {
  

  return (
    <>
      <div className="App">
        <section id="navigation">
         <SearchBar />
        </section>
        <Featured />
        {/*const randomIndex = Math.floor(Math.random() * movies.length) return movies[randomIndex] */}
      </div>
    </>
  );
}

export default Home;
