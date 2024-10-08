import logo from "/assets/basquetFutLogo.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full py-4 xl:px-16 md:px-8 px-3 z-40 flex items-center xl:justify-center justify-between xl:gap-12 mx-auto  md:gap-10 gap-8 bg-transparent">
      <div>
        <img
          src={logo}
          className="xl:w-[220px] xl:hidden flex  md:w-[120px] w-[100px]"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="200"
        />
      </div>
      <div className="xl:hidden flex gap-6">
        <button
          className="cursor-pointer hover:underline xl:text-xl"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="300"
          onClick={() => navigate("/")}
        >
          Inicio
        </button>
        <button
          className="cursor-pointer hover:underline xl:text-xl"
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="400"
          onClick={() => navigate("/categorias")}
        >
          Categorias
        </button>
      </div>

      <button
        className="cursor-pointer hover:underline xl:text-xl hidden xl:flex"
        data-aos="fade"
        data-aos-duration="2500"
        data-aos-delay="300"
        onClick={() => navigate("/")}
      >
        Inicio
      </button>
      <img
        src={logo}
        className="xl:w-[220px] hidden xl:flex  md:w-[120px] w-[100px]"
        data-aos="fade" data-aos-duration="2500" data-aos-delay="200"
      />
      <button
        className="cursor-pointer hover:underline xl:text-xl hidden xl:flex"
        data-aos="fade"
        data-aos-duration="2500"
        data-aos-delay="400"
        onClick={() => navigate("/categorias")}
      >
        Categorías
      </button>
    </div>
  );
}

export default Header;
