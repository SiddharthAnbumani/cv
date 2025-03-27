import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-2 z-50 py-4 m-1 md:px-10 md:py-4 lg:py-3 xl:py:3 2xl:py-3 rounded-4xl transition-all duration-300 ${
        scrolling ? "bg-black/60 shadow-lg" : "bg-white/10"
      }`}
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
              <p className="hover:text-[12px] md:hover:text-2xl hover:font-extrabold transition-all duration-300 ease-in-out">
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
              <p className="hover:text-[12px] md:hover:text-2xl hover:font-extrabold transition-all duration-300 ease-in-out">
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
              <p className="hover:text-[12px] md:hover:text-2xl hover:font-extrabold transition-all duration-300 ease-in-out">
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
              <p className="hover:text-[12px] md:hover:text-2xl hover:font-extrabold transition-all duration-300 ease-in-out">
                Projects
              </p>
            </NavLink>
          </li>

          <li className="font-bold px-1 md:px-4 py-1 sm:py-2 rounded-md">
            <a
              className="text-white"
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


// import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`sticky top-2 z-50 p-1 m-1 md:px-10 md:py-4 rounded-4xl transition-all duration-300 ${
//         scrolling ? "bg-black/60 shadow-lg" : "bg-white/10"
//       }`}
//     >
//       <ul className="flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="text-[10px] md:text-lg lg:text-xl">
//           <li className="font-bold px-1 md:px-4 py-1 rounded-md">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500 font-bold" : "text-white"
//               }
//             >
//               <p className="hover:text-[12px] md:hover:text-2xl hover:font-extrabold transition-all duration-300 ease-in-out">
//                 Siddharth Anbumani
//               </p>
//             </NavLink>
//           </li>
//         </div>

//         {/* Links Section */}
//         <div className="flex gap-1 text-[10px] md:text-lg lg:text-xl">
//           <li className="font-bold px-1 md:px-4 py-1 rounded-md">
//             <NavLink
//               to="/home"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500 font-bold" : "text-white"
//               }
//             >
//               <p className="hover:text-[12px] md:hover:text-2xl hover:font-extrabold transition-all duration-300 ease-in-out">
//                 Home
//               </p>
//             </NavLink>
//           </li>

//           <li className="font-bold px-1 md:px-4 py-1 rounded-md">
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500 font-bold" : "text-white"
//               }
//             >
//               <p className="hover:text-[12px] md:hover:text-2xl hover:font-extrabold transition-all duration-300 ease-in-out">
//                 About
//               </p>
//             </NavLink>
//           </li>

//           <li className="font-bold px-1 md:px-4 py-1 rounded-md">
//             <NavLink
//               to="/project"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500 font-bold" : "text-white"
//               }
//             >
//               <p className="hover:text-[12px] md:hover:text-2xl hover:font-extrabold transition-all duration-300 ease-in-out">
//                 Projects
//               </p>
//             </NavLink>
//           </li>

//           <li className="font-bold px-1 md:px-4 py-1 rounded-md">
//             <a
//               className="text-white"
//               href="/resume.pdf"
//               download="Siddharth_Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Resumé
//             </a>
//           </li>
//         </div>
//       </ul>
//     </div>
//   );
// }


// import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`sticky top-2 z-50 p-1 m-1 rounded-4xl transition-all duration-300 ${
//         scrolling ? "bg-black/60 shadow-lg" : "bg-white/10"
//       }`}
//     >
//       <ul className="flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="text-[10px] md:text-lg lg:text-xl">
//           <li className="font-bold px-1 md:px-2 py-1 rounded-md">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500 font-bold" : "text-white"
//               }
//             >
//               <p className="hover:text-[12px] md:hover:text-2xl hover:font-extrabold transition-all duration-300 ease-in-out">
//                 Siddharth Anbumani
//               </p>
//             </NavLink>
//           </li>
//         </div>

//         {/* Links Section */}
//         <div className="flex gap-1 text-[10px] md:text-lg lg:text-xl">
//           <li className="font-bold px-1 md:px-2 py-1 rounded-md">
//             <NavLink
//               to="/home"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500 font-bold" : "text-white"
//               }
//             >
//               <p className="hover:text-[12px] md:hover:text-2xl hover:font-extrabold transition-all duration-300 ease-in-out">
//                 Home
//               </p>
//             </NavLink>
//           </li>

//           <li className="font-bold px-1 md:px-2 py-1 rounded-md">
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500 font-bold" : "text-white"
//               }
//             >
//               <p className="hover:text-[12px] md:hover:text-2xl hover:font-extrabold transition-all duration-300 ease-in-out">
//                 About
//               </p>
//             </NavLink>
//           </li>

//           <li className="font-bold px-1 md:px-2 py-1 rounded-md">
//             <NavLink
//               to="/project"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500 font-bold" : "text-white"
//               }
//             >
//               <p className="hover:text-[12px] md:hover:text-2xl hover:font-extrabold transition-all duration-300 ease-in-out">
//                 Projects
//               </p>
//             </NavLink>
//           </li>

//           <li className="font-bold px-1 md:px-2 py-1 rounded-md">
//             <a
//               className="text-white"
//               href="/resume.pdf"
//               download="Siddharth_Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Resumé
//             </a>
//           </li>
//         </div>
//       </ul>
//     </div>
//   );
// }


// import { NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`sticky top-2 z-50 p-1 m-1 rounded-4xl transition-all duration-300 ${
//         scrolling ? "bg-black/60 shadow-lg" : "bg-white/10"
//       }`}
//     >
//       <ul className="flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="sm:text-[10px] md:text-xs lg:text-sm">
//           <li className="font-bold px-1 md:px-2 py-1 rounded-md">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500 font-bold" : "text-white"
//               }
//             >
//               <p className="hover:text-[12px] md:hover:text-lg hover:font-extrabold transition-all duration-300 ease-in-out">
//                 Siddharth Anbumani
//               </p>
//             </NavLink>
//           </li>
//         </div>

//         {/* Links Section */}
//         <div className="flex gap-1 sm:text-[10px] md:text-xs lg:text-sm">
//           <li className="font-bold px-1 md:px-2 py-1 rounded-md">
//             <NavLink
//               to="/home"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500 font-bold" : "text-white"
//               }
//             >
//               <p className="hover:text-[12px] md:hover:text-lg hover:font-extrabold transition-all duration-300 ease-in-out">
//                 Home
//               </p>
//             </NavLink>
//           </li>

//           <li className="font-bold px-1 md:px-2 py-1 rounded-md">
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500 font-bold" : "text-white"
//               }
//             >
//               <p className="hover:text-[12px] md:hover:text-lg hover:font-extrabold transition-all duration-300 ease-in-out">
//                 About
//               </p>
//             </NavLink>
//           </li>

//           <li className="font-bold px-1 md:px-2 py-1 rounded-md">
//             <NavLink
//               to="/project"
//               className={({ isActive }) =>
//                 isActive ? "text-amber-500 font-bold" : "text-white"
//               }
//             >
//               <p className="hover:text-[12px] md:hover:text-lg hover:font-extrabold transition-all duration-300 ease-in-out">
//                 Projects
//               </p>
//             </NavLink>
//           </li>

//           <li className="font-bold px-1 md:px-2 py-1 rounded-md">
//             <a
//               className="text-white"
//               href="/resume.pdf"
//               download="Siddharth_Resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Resumé
//             </a>
//           </li>
//         </div>
//       </ul>
//     </div>
//   );
// }

