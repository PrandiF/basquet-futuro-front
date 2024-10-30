import { useNavigate } from "react-router-dom";
import InputPsw from "../../commons/InputPsw";
import InputText from "../../commons/InputText";
import { useState } from "react";
import { login } from "../../services/user.service";
import { Report } from "notiflix/build/notiflix-report-aio";
import { ClipLoader } from "react-spinners";
import { useUserStoreLocalStorage } from "../../store/userStore";

type FormProps = {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type UserProps = {
  username: string;
  password: string;
};

function LoginForm({ onClick }: FormProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserProps>({
    username: "",
    password: "",
  });

  const { loginState } = useUserStoreLocalStorage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    try {
      const res = await login(userData.username, userData.password);
      if (res == "invalid password") {
        setIsLoading(false);
        Report.failure(
          "Error al iniciar sesión",
          "Contraseña incorrecta",
          "Ok",
          () => {
            setUserData({ username: "", password: "" });
          }
        );
      } else if (res.message == "User has been logged") {
        setIsLoading(false);

        navigate("/inicio");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  };
  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 mb-4 grid h-24 place-items-center overflow-hidden rounded-xl bg-gradient-to-r from-[#304c5e] via-[#08293e] to-[#304c5e] bg-clip-border text-white shadow-lg shadow-[#304c5e]/40">
        <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
          Iniciar Sesión
        </h3>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <InputText
          width="full"
          placeholder="Usuario"
          value={userData.username}
          onChange={handleChange}
          name="username"
        />
        <InputPsw
          value={userData.password}
          onChange={handleChange}
          placeholder="Contraseña"
          name="password"
        />
      </div>
      <div className="p-6 pt-0">
        <button
          onClick={handleSubmit}
          data-ripple-light="true"
          type="button"
          className="block w-full select-none rounded-lg bg-gradient-to-r from-[#304c5e] via-[#08293e] to-[#304c5e] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#304c5e]/20 transition-all hover:shadow-lg hover:shadow-[#304c5e]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Iniciar Sesión
        </button>
        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
          No tienes cuenta?
          <a
            className="ml-1 block font-sans text-sm font-bold leading-normal text-[#304c5e] antialiased cursor-pointer"
            onClick={onClick}
          >
            Registrarse
          </a>
        </p>
      </div>
      {isLoading && (
        <div className="loading-spinner text-center">
          <ClipLoader color="#4D5061" loading={isLoading} size={50} />
        </div>
      )}
    </div>
  );
}

export default LoginForm;
