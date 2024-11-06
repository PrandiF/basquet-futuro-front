import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Title from "../commons/Title";
// import Card from "../commons/Card";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BackButton from "../commons/BackButton";
import { categorias } from "../data/categoriasData";
import Card2 from "../commons/Card2";

function Subobjetivos() {
  const navigate = useNavigate();
  const { cat, objetivo } = useParams<{ cat: string; objetivo: string }>();
  const [subobjetivos, setSubojetivos] = useState<string[]>([]);

  const formattedCat = cat
    ? cat.charAt(0).toUpperCase() + cat.slice(1)
    : "No Category";
  const formattedObjetivo = objetivo
    ? objetivo.split("_").join(" ")
    : "No Objective";

    useEffect(() => {
      AOS.init();
      if (cat && objetivo) {
        const categoriaSeleccionada = categorias.find((item) => item.cat === cat);
  
        if (categoriaSeleccionada) {
          const objetivos = categoriaSeleccionada.objetivos[objetivo as keyof typeof categoriaSeleccionada.objetivos];
          
          if (objetivos) {
            const nombresSubobjetivos = Object.keys(objetivos); 
            setSubojetivos(nombresSubobjetivos);
          } else {
            setSubojetivos([]); 
          }
        } else {
          setSubojetivos([]); 
        }
      }
    }, [cat, objetivo]);
  return (
    <div className="absolute flex flex-col w-full">
      <Header />
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
        <Title text={`${formattedCat} - ${formattedObjetivo}`} />
      </div>
      <div
        className="w-[80%] xl:w-[95%] pt-[5%] xl:mb-[-3%] mb-[-8%] flex mx-auto justify-center xl:justify-start"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="400"
      ></div>
      <div
        className="flex xl:flex-row flex-col w-[80%] xl:w-[95%]  items-center justify-center mx-auto xl:gap-5 gap-2 mt-[10%] xl:mt-[5%] mb-5"
        data-aos="fade"
        data-aos-duration="2500"
        data-aos-delay="400"
      >
        {subobjetivos.map((subobjetivo, index) => (
          <Card2
            cat={subobjetivo.split("_").join(" ")}
            key={index}
            onClick={() =>
              navigate(`/categorias/${cat}/${formattedObjetivo}/${subobjetivo}`)
            }
            pathVideo="/public/assets/fondo5Card2.mp4"
          />
        ))}
      </div>
    </div>
  );
}

export default Subobjetivos;
