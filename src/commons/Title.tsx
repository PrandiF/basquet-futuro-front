type TitleProps = {
  text: string | undefined;
};

function Title({ text }: TitleProps) {
  return (
    <div className="z-20 text-white w-full flex justify-center items-center">
      <p className="xl:text-6xl md:text-4xl text-4xl font-bold z-20">{text}</p>
      <p></p>
    </div>
  );
}

export default Title;
