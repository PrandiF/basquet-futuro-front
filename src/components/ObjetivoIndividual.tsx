import Header from "./Header";
import { useParams } from "react-router-dom";
import Title from "../commons/Title";
import { useEffect, useState } from "react";
import { categorias } from "../data/categoriasData";
import AOS from "aos";
import "aos/dist/aos.css";
import BackButton from "../commons/BackButton";

function ObjetivoIndividual() {
  const { cat, objetivo, subobjetivo } = useParams<{
    cat: string;
    objetivo: string;
    subobjetivo: string;
  }>();

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
    console.log("cat:", cat);
    console.log("objetivo:", objetivo);
    console.log("subobjetivo:", subobjetivo);

    const selectedCategory = categorias.find(
      (category) => category.cat === cat
    );

    if (selectedCategory && objetivo) {
      const objectiveVideos = selectedCategory.objetivos[objetivo];

      if (objectiveVideos) {
        const videos =
          objectiveVideos[subobjetivo as keyof typeof objectiveVideos];

        if (videos) {
          setFilteredData(videos);
        } else {
          setFilteredData([]);
        }
      }
    }
  }, [cat, objetivo, subobjetivo]);

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
        <Title
          text={`${formattedCat} - ${subobjetivo?.split("_").join(" ")}`}
        />
      </div>

      <div
        className="xl:w-[50%] md:[50%] w-[95%] max-h-[400px] overflow-y-auto  bg-gray-100 px-3 pb-6 pt-4 rounded-lg shadow-lg flex flex-col gap-2 mx-auto mt-[5%]"
        data-aos="fade"
        data-aos-duration="2500"
        data-aos-delay="400"
      >
        {filteredData.length === 0 ? (
          <p className="text-black">
            No existen videos para el objetivo seleccionado.
          </p>
        ) : (
          filteredData.map((video, index) => (
            <div
            key={index}
            className="text-black flex xl:flex-row md:flex-row flex-col xl:text-lg md:text-lg text-sm w-full gap-1 items-start justify-start"
          >
            <b className="w-full">{video.nombre}:</b>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline cursor-pointer w-full xl:text-sm md:text-sm text-[12px]" 
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
