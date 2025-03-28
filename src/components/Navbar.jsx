import { NavLink } from "react-router-dom";

export default function Navbar() {


  return (
    <div
      className="sticky top-1 z-50 p-4 m-1 md:px-10 md:py-4 lg:py-3 xl:py:3 2xl:py-3 rounded-2xl md:rounded-3xl transition-all duration-300 backdrop-blur-3xl bg-black/40 md:bg-black/50"
    >
      <ul className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-[10px] md:text-lg lg:text-xl">
          <li className="font-bold px-1 md:px-4 py-1 rounded-md">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-amber-500 font-bold" : "text-white"
              }
            >
              <p className="md:hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">
                Siddharth Anbumani
              </p>
            </NavLink>
          </li>
        </div>

        {/* Links Section */}
        <div className="flex gap-1 text-[10px] md:text-lg lg:text-xl">
          <li className="font-bold px-1 md:px-4 py-1 sm:py-2 rounded-md">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-amber-500 font-bold" : "text-white"
              }
            >
              <p className=" md:hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">
                Home
              </p>
            </NavLink>
          </li>

          <li className="font-bold px-1 md:px-4 py-1 sm:py-2 rounded-md">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-amber-500 font-bold" : "text-white"
              }
            >
              <p className=" md:hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">
                About
              </p>
            </NavLink>
          </li>

          <li className="font-bold px-1 md:px-4 py-1 sm:py-2 rounded-md">
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "text-amber-500 font-bold" : "text-white"
              }
            >
              <p className=" md:hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">
                Projects
              </p>
            </NavLink>
          </li>

          <li className="font-bold px-1 md:px-4 py-1 sm:py-2 rounded-md">
            <a
              className="text-white hover:text-blue-500"
              href="/resume.pdf"
              download="Siddharth_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resumé
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

