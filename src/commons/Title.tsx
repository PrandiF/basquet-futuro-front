type TitleProps = {
  text: string | undefined;
};

function Title({ text }: TitleProps) {
  return (
    <div className="z-20 text-white w-full flex justify-center items-center font-raleway">
      <p className="xl:text-4xl md:text-4xl text-2xl font-bold z-20">{text}</p>
    </div>
  );
}

export default Title;
