import { GoHomeFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function FooterMenuResponsive() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex bg-gradient-to-b from-black via-slate-800 to-gray-500 h-[3.5rem] z-30 fixed bottom-0 mt-[3%]">
      <button
        className="bg-transparent w-[50%]  text-white text-xl flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <GoHomeFill />
      </button>
      <button
        className="bg-transparent w-[50%]  text-white text-xl flex items-center justify-center"
        onClick={() => navigate("/categorias")}
      >
        Categorías
      </button>
    </div>
  );
}

export default FooterMenuResponsive;
