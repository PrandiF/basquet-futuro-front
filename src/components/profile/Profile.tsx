import BackButton from "../../commons/BackButton";
import Button4 from "../../commons/Button4";
import Header from "../Header";
import { FaUserCircle } from "react-icons/fa";
import { useUserStoreLocalStorage } from "../../store/userStore";

function Profile() {
  const { name, lastname, username, email, role, position, weight, height } =
    useUserStoreLocalStorage();
  return (
    <div className="absolute flex flex-col gap-6 w-full">
      <Header />
      <div
        className="mt-[30%] md:mt-[20%] xl:ml-[5%] ml-[5%]  xl:mt-[18%]"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-delay="300"
      >
        <BackButton />
      </div>
      <div className="flex w-[90%] flex-col">
        <div className="flex justify-center items-center w-full px-3">
          <FaUserCircle className="w-[90px] h-[70px] text-black bg-white rounded-full" />
          <div className="flex flex-col gap-1 justify-center items-center w-full">
            <p className="text-3xl relative flex mx-auto">{username}</p>
            <p className="text-3xl relative flex mx-auto">{role}</p>
          </div>
        </div>
        <div className="flex flex-col px-5 mt-4 gap-2 text-lg">
          <p>
            <b>Nombre:</b> {name}
          </p>
          <p>
            <b>Apellido:</b> {lastname}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>
          {role == "Jugador" ? (
            <div className="flex flex-col gap-2 text-lg">
              <p>
                <b>Posición:</b> {position}
              </p>
              <p>
                <b>Altura:</b> {height}cm
              </p>
              <p>
                <b>Peso:</b> {weight}kg
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-full flex justify-center mt-8">
          <Button4 text="Editar" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
