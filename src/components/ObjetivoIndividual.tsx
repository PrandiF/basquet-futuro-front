import Header from "./Header";
import { useParams } from "react-router-dom";
import Title from "../commons/Title";
import { useEffect, useState } from "react";
import { categorias } from "../data/categoriasData";
import AOS from "aos";
import "aos/dist/aos.css";
import BackButton from "../commons/BackButton";

type Objetivo =
  | "Defensa"
  | "Ataque"
  | "Fundamentos_individuales"
  | "Tiro"
  | "uno_contra_uno";

function ObjetivoIndividual() {
  const { cat, objetivo } = useParams<{ cat: string; objetivo: Objetivo }>();
  const [filteredData, setFilteredData] = useState<
    { nombre: string; url: string }[]
  >([]);
  const formattedCat = cat
    ? cat.charAt(0).toUpperCase() + cat.slice(1)
    : "No Category";

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const selectedCategory = categorias.find(
      (category) => category.cat === cat
    );

    if (
      selectedCategory &&
      objetivo &&
      objetivo in selectedCategory.objetivos
    ) {
      const objectiveVideos = selectedCategory.objetivos[objetivo];
      setFilteredData(objectiveVideos);
    }
  }, [cat, objetivo]);
  return (
    <div className="absolute flex flex-col w-full">
      <Header />
      <div
        className="mt-[30%] md:mt-[20%] ml-[5%] xl:ml-[28%] xl:mt-[18%]"
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
        <Title text={`${formattedCat} - ${objetivo?.split("_").join(" ")}`} />
      </div>

      <div
        className="xl:w-[50%] md:[50%] w-[95%] bg-gray-100 px-3 pb-6 pt-4 rounded-lg shadow-lg flex flex-col gap-2 xl:items-center xl:justify-center mx-auto mt-[5%]"
        data-aos="fade"
        data-aos-duration="2500"
        data-aos-delay="400"
      >
        {filteredData.length == 0 ? (
          <p>No existe el objetivo seleccionado.</p>
        ) : (
          filteredData.map((video, index) => (
            <div
              key={index}
              className="text-black flex xl:text-lg md:text-lg text-sm w-full gap-1 md:gap-4 xl:gap-6 xl:mx-auto xl:items-center xl:justify-center md:items-center md:justify-center"
            >
              <b className="w-1/4 xl:w-fit md:w-fit">{video.nombre}:</b>
              <a
                href={video.url}
                target="e_blank"
                className="text-blue-600 underline cursor-pointer xl:w-fit md:w-fit w-3/4"
              >
                {video.url}
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ObjetivoIndividual;
