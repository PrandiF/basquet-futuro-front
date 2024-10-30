import { useState } from "react";
import HeaderLogin from "../HeaderHome";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function Authentication() {
  const [register, setRegister] = useState(false);

  const handleCangeForm = async () => {
    try {
      setRegister((prev) => !prev);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="absolute flex flex-col w-full">
      <HeaderLogin />
      <div className="xl:mt-[16%] md:mt-[20%] mt-[40%] xl:w-[45%] w-[90%] flex justify-center mx-auto relative">
        <div
          className={`transition-all duration-500 transform ${
            register ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          } absolute w-full`}
        >
          <LoginForm onClick={handleCangeForm} />
        </div>
        <div
          className={`transition-all duration-500 transform ${
            register ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } absolute w-full`}
        >
          <RegisterForm onClick={handleCangeForm} />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
