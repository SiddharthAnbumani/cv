import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  // Track scroll position
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
      className={`sticky top-2 z-50 p-2 m-2 rounded-4xl transition-all duration-300 ${
        scrolling ? 'bg-black/60 shadow-lg' : 'bg-white/10'
      }`}
    >
      <ul className="flex justify-between">
        <div className="sm:text-sm md:text-md lg:text-lg">
          <li className="font-bold px-4 py-2 rounded-md">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                isActive ? 'text-amber-500 font-bold' : 'text-white'
              }
            >
              <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">
                Siddharth Anbumani 
              </p>
            </NavLink>
          </li>
        </div>

        <div className="flex sm:text-sm md:text-md lg:text-lg">
          <li className="font-bold px-4 py-2 rounded-md">
            <NavLink 
              to="/home" 
              className={({ isActive }) =>
                isActive ? 'text-amber-500 font-bold' : 'text-white'
              }
            >
              <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">Home</p>
            </NavLink>
          </li>

          <li className="font-bold px-4 py-2 rounded-md">
            <NavLink 
              to="/contact" 
              className={({ isActive }) =>
                isActive ? 'text-amber-500 font-bold' : 'text-white'
              }
            >
              <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">About</p>
            </NavLink>
          </li>

          <li className="font-bold px-4 py-2 rounded-md">
            <NavLink 
              to="/project"
              className={({ isActive }) =>
                isActive ? 'text-amber-500 font-bold' : 'text-white'
              }
            >
              <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">Projects</p>
            </NavLink>
          </li>
          

          <li className="font-bold px-4 py-2 rounded-md">
            <a className="text-white" href="/resume.pdf" download="Siddharth_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resumé
            </a>
          </li>

        </div>
      </ul>
    </div>
  );
}


// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <div className="bg-white/10 sticky top-0 z-50 p-2 m-2 rounded-4xl">
//       <ul className="flex justify-between">
//         <div className="sm:text-sm md:text-md lg:text-lg">
//           <li className="font-bold px-4 py-2 rounded-md">
//             <NavLink 
//               to="/" 
//               className={({ isActive }) =>
//                 isActive ? 'text-amber-500 font-bold' : 'text-white'
//               }
//             >
//               <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">
//                 Siddharth Anbumani
//               </p>
//             </NavLink>
//           </li>
//         </div>

//         <div className="flex sm:text-sm md:text-md lg:text-lg">
//           <li className="font-bold px-4 py-2 rounded-md">
//             <NavLink 
//               to="/home" 
//               className={({ isActive }) =>
//                 isActive ? 'text-amber-500 font-bold' : 'text-white'
//               }
//             >
//               <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">Home</p>
//             </NavLink>
//           </li>

//           <li className="font-bold px-4 py-2 rounded-md">
//             <NavLink 
//               to="/project"
//               className={({ isActive }) =>
//                 isActive ? 'text-amber-500 font-bold' : 'text-white'
//               }
//             >
//               <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">Projects</p>
//             </NavLink>
//           </li>

//           <li className="font-bold px-4 py-2 rounded-md">
//             {/* <NavLink 
//               to="/resume" 
//               className={({ isActive }) =>
//                 isActive ? 'text-amber-500 font-bold' : 'text-white'
//               }
//             > */}
//               {/* <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">Resumé</p> */}
//               <a className="text-white" href="/resume.pdf" download="Siddharth_Resume.pdf" target="_blank" rel="noopener noreferrer">
//                 Resumé
//               </a>

//             {/* </NavLink> */}
//           </li>

//           <li className="font-bold px-4 py-2 rounded-md">
//             <NavLink 
//               to="/contact" 
//               className={({ isActive }) =>
//                 isActive ? 'text-amber-500 font-bold' : 'text-white'
//               }
//             >
//               <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">Connect</p>
//             </NavLink>
//           </li>
//         </div>
//       </ul>
//     </div>
//   );
// }



// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <div className="bg-white/10 sticky top-0 z-50 p-2 m-2 rounded-4xl">
//       <ul className="flex justify-between text-lg ">
//         <div className="sm:text-sm">
//         <li className=" text-lg font-bold  px-4 py-2 rounded-md">
//           <NavLink 
//             to="/" 
//             className={({ isActive }) =>
//               isActive ? 'text-amber-500 font-bold' : 'text-white'
//             }
//           >
//            <p className=" text-lg hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">Siddharth Anbumani</p>
//           </NavLink>
//         </li>
//         </div>
        
//         <div  className="flex">
//         <li className="text-lg font-bold px-4 py-2 rounded-md">
//           <NavLink 
//             to="/home" 
//             className={({ isActive }) =>
//               isActive ? 'text-amber-500 font-bold' : 'text-white'
//             }
//           >
//             <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">Home</p>
//           </NavLink>
//         </li>

//         <li className="text-lg font-bold px-4 py-2 rounded-md">
//           <NavLink 
//             to="/resume" 
//             className={({ isActive }) =>
//               isActive ? 'text-amber-500 font-bold' : 'text-white'
//             }
//           >
//             <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">Resumé</p>
//           </NavLink>
//         </li>

//         <li className="text-lg font-bold px-4 py-2 rounded-md">
//           <NavLink 
//             to="/projects"
//             className={({ isActive }) =>
//               isActive ? 'text-amber-500 font-bold' : 'text-white'
//             }
//           >
//             <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">Projects</p>
//           </NavLink>
//         </li>

//         <li className="btext-lg font-bold px-4 py-2 rounded-md">
//           <NavLink 
//             to="/connect" 
//             className={({ isActive }) =>
//               isActive ? 'text-amber-500 font-bold' : 'text-white'
//             }
//           >
//             <p className="hover:text-xl hover:font-extrabold transition-all duration-300 ease-in-out">Connect</p>
//           </NavLink>
//         </li>
//         </div>
//       </ul>
//     </div>
//   );
// }


// import { NavLink } from "react-router-dom"

// export default function Navbar(){
//   return (
// <div className="bg-amber-50">
//   <ul className="flex justify-between p-5">
//       <li className="bg-blue-500 text-lg text-bold hover:bg-amber-400">
//         <NavLink to='/' 
//         className={
//           ({isActive})=> 
//           isActive ? 
//           'text-blue-500 font-bold'
//            : 
//            'text-white'}>Siddharth Anbumani</NavLink>
//       </li>

//       <li className="bg-blue-500 text-lg text-bold hover:bg-amber-400">
//         <NavLink to='/' 
//         className={
//           ({isActive})=>
//            isActive ? 
//            'text-blue-500 font-bold' 
//            : 
//            'text-white'} >Home</NavLink>
//       </li>

//       <li className="bg-blue-500 text-lg text-bold hover:bg-amber-400">
//         <NavLink to='/' 
//         className={
//           ({isActive})=> 
//           isActive ?
//            'text-blue-500 font-bold' 
//            : 
//            'text-white'}>Resume</NavLink>
//       </li>


//       <li className="bg-blue-500 text-lg text-bold hover:bg-amber-400">
//         <NavLink to='/' className={
//           ({isActive})=> 
//           isActive ? 
//           'text-blue-500 font-bold'
//            : 
//            'text-white'}>Project</NavLink>
//       </li>

//       <li className="bg-blue-500 text-lg text-bold hover:bg-amber-400">
//         <NavLink to='/' 
//         className={
//           ({isActive})=>
//            isActive ? 
//            'text-blue-500 font-bold' 
//            :
//             'text-white'}>Connect</NavLink>
//       </li>
//     </ul>
// </div>
  
//   )
// }
