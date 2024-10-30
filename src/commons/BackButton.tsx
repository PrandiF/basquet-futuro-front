import { GoArrowLeft } from "react-icons/go";

function BackButton() {
  return (
    <div className="cursor-pointer text-black bg-white  underline flex items-center w-fit p-1.5 rounded-lg hover:scale-110 transition-all duration-300 shadow-xl" onClick={() => window.history.back()}>
      <GoArrowLeft />
    </div>
  );
}

export default BackButton;
