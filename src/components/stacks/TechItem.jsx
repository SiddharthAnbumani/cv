export default function TechItem({ text, img }) {
    return (
      <div className="w-22 h-22 p-2 lg:w-32 lg:h-32 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
        <h1 className="text-md lg:text-xl font-extrabold text-white mt-2 font-[gulzar]">{text}</h1>
        <img src={img} alt={`${text} Logo`} className="w-12 h-10 lg:w-16 lg:h-14 mt-2" />
      </div>
    );
  }
  