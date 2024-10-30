import Home from "./components/Home";
import "./index.css";
import imageBackgroundMobile from "/assets/fondoMobile3.jpg";
import imageBackgroundDesktop from "/assets/BFDesktop.jpg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Categorias from "./components/Categorias";
import CategoriaIndividual from "./components/CategoriaIndividual";
import ObjetivoIndividual from "./components/ObjetivoIndividual";
import Authentication from "./components/login/Authentication";
import Profile from "./components/profile/Profile";
import { useUserStoreLocalStorage } from "./store/userStore";

function App() {
  const { isAuthenticated } = useUserStoreLocalStorage();
  return (
    <div className="relative min-h-screen w-full font-roboto scroll-smooth flex flex-col font-montserrat">
      <img
        src={imageBackgroundMobile}
        alt="fondo"
        className="xl:hidden fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <img
        src={imageBackgroundDesktop}
        alt="fondo"
        className="xl:flex hidden fixed top-0 left-0 inset-0 w-full h-full object-cover"
      />
      <Router>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Navigate to="/inicio" replace />} />
              <Route path="/inicio" element={<Home />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/perfil" element={<Profile />} />
              <Route
                path="/categorias/:cat"
                element={<CategoriaIndividual />}
              />
              <Route
                path="/categorias/:cat/:objetivo"
                element={<ObjetivoIndividual />}
              />
            </>
          ) : (
            <>
              <Route path="/" element={<Authentication />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
