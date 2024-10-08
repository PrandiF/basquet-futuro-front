type CardProps = {
  cat: string;
  onClick?: () => void;
};

function Card({ cat, onClick }: CardProps) {
  return (
    <div
      className="xl:w-1/5 md:w-[50%] w-[90%] xl:min-h-[90px] bg-gray-100 px-4 xl:pb-0 xl:pt-0 pb-6 pt-4 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex items-center md:justify-center xl:justify-start"
      onClick={onClick}
    >
      <h3 className="xl:text-start md:text-center text-start xl:text-lg md:text-lg text-sm text-black font-semibold mb-4">
        {cat}
      </h3>
    </div>
  );
}

export default Card;
