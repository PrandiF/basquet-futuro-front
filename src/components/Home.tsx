import { useEffect } from "react";
import Button4 from "../commons/Button4";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import { useUserStoreLocalStorage } from "../store/userStore";

function Home() {
  const { name } = useUserStoreLocalStorage();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="absolute flex flex-col gap-12  w-full">
      <Header />
      <div className="flex flex-col z-10 text-white font-bold gap-5 xl:gap-8 text-2xl text-center items-center justify-center m-auto w-[80%] xl:w-[95%] mt-[45%] xl:mt-[15%]">
        <p data-aos="fade" data-aos-duration="3000" data-aos-delay="400">
          ¡Bienvenido {name} a Básquet Futuro!
        </p>
        <p data-aos="fade" data-aos-duration="3000" data-aos-delay="600">
          donde entrenamos el talento para convertirlo en grandeza.
        </p>
        <p data-aos="fade" data-aos-duration="3000" data-aos-delay="700">
          Preparate para llevar tu juego al siguiente nivel.
        </p>
      </div>
      <div
        className="flex m-auto"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="700"
      >
        <Button4 text="Comenzar" url="/categorias" />
      </div>
    </div>
  );
}

export default Home;
