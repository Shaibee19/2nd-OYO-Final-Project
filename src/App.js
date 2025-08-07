import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Searches from "./pages/Searches";
import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/searches" element={<Searches />}></Route>
          <Route path="/movie" element={<Movies />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
