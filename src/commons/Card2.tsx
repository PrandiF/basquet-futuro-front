type CardProps = {
  cat: string;
  onClick?: () => void;
  pathVideo: string;
};

function Card2({ cat, onClick, pathVideo }: CardProps) {
  return (
    <div
      className="div xl:min-h-[90px] xl:w-1/5 md:w-[50%] w-[90%] bg-white m-auto rounded-[1em] relative group px-4 pb-6 pt-4 cursor pointer  z-0 overflow-hidden hover:text-white"
      onClick={onClick}
    >
      <div className="absolute inset-0 z-[-1]">
        <video
          className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          autoPlay
          loop
          muted
        >
          <source src={`${pathVideo}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1 className="text-black z-20 font-bold font-Poppin xl:text-lg md:text-lg text-sm group-hover:text-white    duration-100 mb-4">
        {cat}
      </h1>
    </div>
  );
}

export default Card2;
{
  /* <div className="h-[7em] xl:w-1/10 md:w-[25%] w-[45%] bg-[#FF8C00] rounded-full absolute bottom-full -left-[3.5em] group-hover:scale-[550%] z-[-1] duration-[400ms]"></div>
      <div className="h-[6em] w-[40%] bg-[#8B4513] rounded-full absolute bottom-full -left-[3.5em] group-hover:scale-[400%] z-[-1] duration-[400ms]"></div>
      <div className="h-[5em] w-[35%] bg-[#4B4B4B] rounded-full absolute bottom-full -left-[3.5em] group-hover:scale-[300%] z-[-1] duration-[400ms]"></div> */
}
