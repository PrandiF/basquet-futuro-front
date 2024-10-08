import Home from "./components/Home";
import "./index.css";
import imageBackgroundMobile from "../dist/assets/fondo2BF.jpg";
import imageBackgroundDesktop from "../dist/assets/BFDesktop.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categorias from "./components/Categorias";
import CategoriaIndividual from "./components/CategoriaIndividual";
import ObjetivoIndividual from "./components/ObjetivoIndividual";

function App() {
  return (
    <div className="relative min-h-screen w-full font-roboto scroll-smooth flex flex-col font-montserrat">
      <img
        src={imageBackgroundMobile}
        alt="fondo"
        className="xl:hidden flex top-0 left-0 inset-0 w-screen h-full object-cover"
      />
      <img
        src={imageBackgroundDesktop}
        alt="fondo"
        className="xl:flex hidden absolute  top-0 left-0 inset-0 w-screen h-full object-cover"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categorias/:cat" element={<CategoriaIndividual />} />
          <Route
            path="/categorias/:cat/:objetivo"
            element={<ObjetivoIndividual />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
