
import { NavLink } from "react-router-dom";

export default function ProjectProfile({ title, description, img, page, tag }) {
  return (
    <div className="flex justify-center items-center  w-[250px] md:w-[350px] lg:w-[450px] xl:w-full md:p-10 p-1">
      <div className="flex flex-col items-center bg-white/20 backdrop-blur-3xl rounded-3xl p-5 transition-transform duration-200 hover:scale-110 w-full max-w-[400px]">
        <h1 className="text-2xl m-2 font-extrabold">{title}</h1>
        {tag ? (
          <p className="bg-black/50 font-extrabold text-center w-full rounded-4xl text-[12px] p-2">{tag}</p>
        ) : (
          <p className="text-[12px] bg-white/30 font-extrabold text-center w-full p-2 rounded-4xl">General</p>
        )}

        <img src={img} alt="" className="w-30 h-20 m-2 rounded-xl" />
        <p className="m-2 text-center text-md">{description}</p>
        <NavLink
          className="bg-white/50 font-extrabold p-3 rounded-3xl w-[60%] text-center hover:bg-white hover:text-blue-950 transition-transform hover:scale-110 duration-300"
          to={page}
        >
          View More
        </NavLink>
      </div>
    </div>
  );
}
