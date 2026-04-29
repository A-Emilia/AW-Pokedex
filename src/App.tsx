import { Routes, Route, Link } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import PokedexEntry from "./pages/PokedexEntry";
import About from "./pages/About";

// Bro wtf is that {" "} just to add a fucking space man.
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Pokedex</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:name" element={<PokedexEntry />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;