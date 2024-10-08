import logo from "/assets/basquetFutLogo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function HeaderLogin() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="absolute top-0 left-0 w-full py-6 z-40 flex items-center justify-center bg-transparent"
      data-aos="fade-down"
      data-aos-duration="2200"
      data-aos-delay="200"
    >
      <img src={logo} className="xl:w-[220px] w-[150px]" />
    </div>
  );
}

export default HeaderLogin;
