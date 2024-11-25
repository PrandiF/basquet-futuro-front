import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Title from "../commons/Title";
// import Card from "../commons/Card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackButton from "../commons/BackButton";
import Card2 from "../commons/Card2";
import { categorias } from "../data/categoriasData";
import HeaderLogin from "./HeaderHome";
import FooterMenuResponsive from "../commons/FooterMenuResponsive";

const objetivos = [
  "Defensa",
  "Táctico",
  "Dribbling",
  "Lanzamiento",
  "1 vs 1",
  "Movimiento de pies",
  "Definiciones",
  "Pase",
];
function CategoriaIndividual() {
  const navigate = useNavigate();
  const { cat } = useParams<{ cat: string }>();

  const formattedCat = cat
    ? cat.charAt(0).toUpperCase() + cat.slice(1)
    : "No Category";

  const categoria = categorias.find((item) => item.cat === formattedCat);

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
        <Title text={formattedCat} />
      </div>
      <div
        className="w-[90%] xl:w-[90%] flex mx-auto xl:justify-center text-center mt-2 xl:mt-8 xl:text-xl"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="200"
      >
        <p>{categoria?.bajada}</p>
      </div>
      <div
        className="w-[80%] xl:w-[95%] pt-[5%] xl:mb-[-3%] mb-[-5%] flex mx-auto justify-center xl:justify-start"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="400"
      >
        <span className="text-transparent bg-clip-text bg-white font-bold text-xl xl:full md:w-[50%] w-full">
          Objetivos:
        </span>
      </div>
      <div
        className="flex xl:flex-row flex-col w-full xl:w-[95%]  items-center justify-center mx-auto xl:gap-5 gap-2 mt-[10%] xl:mt-[4%] mb-5"
        data-aos="fade"
        data-aos-duration="2500"
        data-aos-delay="400"
      >
        {objetivos.map((objetivo, index) => (
          <Card2
            cat={objetivo.split("_").join(" ")}
            key={index}
            onClick={() => navigate(`/categorias/${cat}/${objetivo}`)}
            pathVideo="/public/assets/fondo6Card2.mp4"
          />
        ))}
      </div>
      <div className="xl:hidden flex w-full mt-[12%]">
        <FooterMenuResponsive />
      </div>
    </div>
  );
}

export default CategoriaIndividual;
