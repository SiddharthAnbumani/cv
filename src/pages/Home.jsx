import '.././index.css';
import Spline from '@splinetool/react-spline';
import GitHubHeatmap from '../components/GithubHeatMap';
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import TechStack from '../components/stacks/TechStack';
import Services from '../components/stacks/Services';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="spline-background">
        <Spline scene="/spline/lines.spline" />
      </div>

      <div className="overlay"></div>

      <div className="content">
        {/* Centering Section */}
        <div className="flex flex-col justify-center items-center min-h-[70vh]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-3xl p-5 font-extrabold text-white font-[anton] text-center [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
              This is Siddharth Anbumani
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
            <h1 className="text-5xl text-white font-extrabold font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] px-3 text-center sm:text-7xl md:text-7xl lg:text-9xl xl:text-9xl 2xl:text-9xl">
              Web Designer <br/> + Web Developer
            </h1>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <div className='flex flex-col justify-center items-center md:mt-32'>
          <h1 className='slide-down text-2xl text-white font-extrabold m-5 text-center font-serif [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-12 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-1 md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl'>My Tech Stack</h1>
          <TechStack className='w-full'/>
        </div>

        {/* GitHub Contributions */}
        <div className='slide-left flex flex-col justify-center items-center mx-auto mt-10'>
          <h1 className='md:py-10 text-white font-extrabold text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] text-lg md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl'>Open Source Contributions</h1>
          <GitHubHeatmap />
        </div>

        {/* Services Section */}
        <div className="flex flex-col justify-center">
          <h1 className='md:py-10 text-2xl slide-down text-white font-extrabold text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-10 md:mt-20 lg:text-5xl xl:text-5xl 2xl:text-5xl lg:mt-15 xl:my-15 2xl:mt-15'>My Services</h1>
          <Services />
        </div>

        {/* View My Works Button */}
        <div className="flex justify-center slide-up ">
          <a href="/project" className="bg-white p-2 my-10 md:my-20 md:px-4 md:py-2 rounded-3xl font-extrabold text-lg transition-transform duration-300 hover:scale-110">
            <p className='text-black text-sm w-50 text-center'>
              View My Works
            </p> 
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="content">
        <Footer className='footer'/>
      </div>
    </div>
  )
}


// import '.././index.css'
// import Spline from '@splinetool/react-spline'
// import GitHubHeatmap from '../components/GithubHeatMap'
// import Navbar from "../components/Navbar"
// import { motion } from "framer-motion";
// import TechStack from '../components/stacks/TechStack'
// import Services from '../components/stacks/Services'
// import Footer from '../components/Footer'
// // import Socials from '../components/Socials'


// export default function Home() {
//   return (

//     <div>

//     <div>
//       <Navbar/>
//       <div className="spline-background">
//         <Spline scene="/spline/lines.spline" />
//       </div>

//       <div className="overlay"></div>


//       <div className="content2">
//         <div className="flex-col justify-start items-end">
//           <div className="self-center">
//           <div className="container px-4 my-15 sm:px-8 md:px-12 lg:px-20 md:my-20 lg:my-30 xl:my-30 2xl:my-30">

//             <div className="flex flex-col lg:flex-row justify-center items-center w-full">
//             <div className="w-full lg:w-full  flex flex-col justify-center items-center">
//             <motion.div
//                 initial={{ opacity: 0 }} 
//                 animate={{ opacity: 1 }} 
//                 transition={{ duration: 1 }}
//               > 

//                 <h1 className="text-3xl font-extrabold text-white font-[anton] text-center [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)]
//                                 sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl
//                                 ">
//                   This is Siddharth Anbumani
//                 </h1>
//             </motion.div>
                
//             <motion.div
//                 initial={{ opacity: 0 }} // Start fully transparent
//                 animate={{ opacity: 1 }} // Gradually become visible
//                 transition={{ duration: 3 }}
//               > 
//               <h1 className="text-5xl text-white font-extrabold font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] my-5 px-3 text-center
//                               sm:text-7xl sm:my-2 md:text-7xl lg:text-9xl xl:text-9xl 2xl:text-9xl
//                               ">
//                   Web Designer + Web Developer
//                 </h1>
//               </motion.div>


//                 {/* <Socials/> */}

//               </div>
//             </div>
//           </div>
//           </div>
//           <div className='flex flex-col justify-center items-center '>
//             <h1 className=' slide-down text-2xl text-white font-extrabold m-5 text-center font-serif [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-12 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-1
//                              md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl'>My Tech Stack</h1>
//             <TechStack className='w-full'/>
//           </div>

//           <div className='slide-left flex flex-col justify-center items-center mx-auto mt-10'>
//             {/* <h1 className='text-5xl text-white font-extrabold m-5 text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-20'>Open Source Contributions</h1> */}
//             <h1 className='md:py-10  text-white font-extrabold  text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)]
//                            text-lg md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl '>Open Source Contributions</h1>
//             <GitHubHeatmap />
//           </div>

//           <div className="flex flex-col justify-center">
//             {/* <h1 className=' slide-down text-5xl text-white font-extrabold m-15 text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-20'>My Services</h1> */}
//             <h1 className='md:py-10 text-2xl slide-down text-white font-extrabold text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-10 md:mt-20
//                             lg:text-5xl xl:text-5xl 2xl:text-5xl lg:mt-15 xl:my-15 2xl:mt-15 '>My Services</h1>
//             <Services/>
//           </div>

//           <div className="flex justify-center slide-up ">
//             <a href="/project" className="bg-white p-2 my-10  md:my-20  md:px-4 md:py-2 rounded-3xl font-extrabold text-lg transition-transform duration-300 hover:scale-110
//             ">
//                 <p className='text-black text-sm w-50 text-center'>
//                   View My Works
//                 </p> 
//             </a>
//           </div>
//         </div>
      
//       </div>
//       <div className="content">
//         < Footer className='footer'/>
//       </div>
//     </div>

// </div>
//   )
// }


