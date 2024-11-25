import Title from "../commons/Title";
import Header from "./Header";
import { categorias } from "../data/categoriasData";
// import Card from "../commons/Card";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BackButton from "../commons/BackButton";
import Card2 from "../commons/Card2";
import FooterMenuResponsive from "../commons/FooterMenuResponsive";
import HeaderLogin from "./HeaderHome";

function Categorias() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="absolute flex flex-col w-full">
       <div className="xl:flex hidden w-full">
        <Header />
      </div>
      <div className="flex xl:hidden w-full">
        <HeaderLogin />
      </div>

      <div
        className="mt-[30%] md:mt-[20%] xl:ml-[5%] ml-[12%]  xl:mt-[18%]"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="300"
      >
        <BackButton />
      </div>
      <div
        className="mt-[10%] md:mt-5 xl:mt-2 text-center px-1"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="200"
      >
        <Title text="Categorías" />
      </div>
      <div
        className="w-[90%] xl:w-[90%] flex mx-auto xl:justify-center text-center mt-2 xl:mt-8 xl:text-xl"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="200"
      >
        <p>
          Encontrá los ejercicios ideales para cada etapa del desarrollo. Desde
          los más chicos hasta los jugadores avanzados, ¡tenemos el plan
          perfecto para vos!
        </p>
      </div>
      <div
        className="flex xl:flex-row flex-col w-full xl:w-[90%] items-center justify-center mx-auto xl:gap-5 gap-2 mt-[10%] xl:mt-[5%] pb-5"
        data-aos="fade"
        data-aos-duration="2500"
        data-aos-delay="400"
      >
        {categorias.map((categoria, index) => (
          // <div
          //   className="w-full flex items-center justify-center mx-auto"
          //   data-aos="fade"
          //   data-aos-duration="2000"
          //   data-aos-delay="200"
          // >
          <Card2
            cat={categoria.cat}
            key={index}
            onClick={() => navigate(`/categorias/${categoria.cat}`)}
            pathVideo="/public/assets/fondo2Card2.mp4"
          />
          // </div>
        ))}
      </div>
      <div className="xl:hidden flex w-full mt-[12%]">
        <FooterMenuResponsive />
      </div>
    </div>
  );
}

export default Categorias;
