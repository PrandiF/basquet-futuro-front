import InputText from "../../commons/InputText";
import InputPsw from "../../commons/InputPsw";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../services/user.service";
import { Report } from "notiflix/build/notiflix-report-aio";
import InputSelect from "../../commons/InputSelect";
import { ClipLoader } from "react-spinners";
import InputNumber from "../../commons/InputNumber";

type FormProps = {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type UserProps = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirm_password: string;
  username: string;
  role: string;
  position?: string;
  weight?: number;
  height?: number;
};

function RegisterForm({ onClick }: FormProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserProps>({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
    username: "",
    role: "",
    position: "",
    weight: 0, // Opcional, puede ser undefined o algún valor por defecto
    height: 0, // Opcional, lo mismo aquí
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
      const res = await register(userData);
      if (userData.password != userData.confirm_password) {
        setIsLoading(false);
        Report.failure(
          "Error al crear la cuenta",
          "Las contraseñas no coinciden",
          "Ok",
          () => {}
        );
      }
      if (!res) {
        setIsLoading(false);
        Report.failure(
          "Error al crear la cuenta",
          "Lo siento, no se ha podido crear la cuenta",
          "Ok",
          () => {
            setUserData({
              name: "",
              lastname: "",
              email: "",
              password: "",
              confirm_password: "",
              username: "",
              role: "",
              position: "",
              weight: 0,
              height: 0,
            });
          }
        );
      }
      if (res) {
        setIsLoading(false);
        Report.success(
          "Cuenta creada correctamente",
          "Felicitaciones, tu cuenta se ha creado con exito",
          "Iniciar Sesión",
          () => {
            navigate("/");
          }
        );
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      throw error;
    }
  };
  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-10">
      <div className="relative mx-4 -mt-6 mb-4 grid h-24 place-items-center overflow-hidden rounded-xl bg-gradient-to-r from-[#304c5e] via-[#08293e] to-[#304c5e] bg-clip-border text-white shadow-lg shadow-[#304c5e]/40">
        <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
          Registrarse
        </h3>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex gap-2">
          {" "}
          <InputText
            width="full"
            placeholder="Nombre"
            name="name"
            onChange={handleChange}
            value={userData.name}
          />
          <InputText
            width="full"
            placeholder="Apellido"
            name="lastname"
            onChange={handleChange}
            value={userData.lastname}
          />
        </div>

        <InputText
          width="full"
          placeholder="Usuario"
          name="username"
          onChange={handleChange}
          value={userData.username}
        />
        <InputText
          width="full"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
        <InputSelect
          width="full"
          placeholder="Rol"
          name="role"
          onChange={handleChange}
          value={userData.role}
          options={["Entrenador", "Jugador"]}
        />

        {userData.role == "Jugador" ? (
          <div className="flex flex-col gap-4">
            <InputSelect
              width="full"
              placeholder="Posición"
              name="position"
              onChange={handleChange}
              value={userData.position}
              options={["Base", "Escolta", "Alero", "Ala pivot", "Pivot"]}
            />
            <div className="flex gap-2">
              <InputNumber
                width="full"
                placeholder="Altura"
                name="height"
                onChange={handleChange}
                value={userData.height}
                unit="cm"
              />
              <InputNumber
                width="full"
                placeholder="Peso"
                name="weight"
                onChange={handleChange}
                value={userData.weight}
                unit="kg"
              />
            </div>
          </div>
        ) : userData.role == "Entrenador" ? (
          ""
        ) : (
          ""
        )}
        <div className="flex xl:flex-row md:flex-row flex-col gap-2">
          {" "}
          <InputPsw
            value={userData.password}
            placeholder="Contraseña"
            name="password"
            onChange={handleChange}
          />
          <InputPsw
            value={userData.confirm_password}
            placeholder="Confirmar contraseña"
            name="confirm_password"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="p-6 pt-0">
        <button
          onClick={handleSubmit}
          data-ripple-light="true"
          type="button"
          className="block w-full select-none rounded-lg bg-gradient-to-r from-[#304c5e] via-[#08293e] to-[#304c5e] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#304c5e]/20 transition-all hover:shadow-lg hover:[#304c5e]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Registrarse
        </button>
        <p className="mt-6 flex justify-center font-sans text-sm font-light">
          Ya tienes cuenta?
          <a
            className="ml-1 block font-sans text-sm font-bold text-[#304c5e]  cursor-pointer"
            onClick={onClick}
          >
            Iniciar Sesión
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

export default RegisterForm;
