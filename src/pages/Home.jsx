import '.././index.css'
import Spline from '@splinetool/react-spline'
import GitHubHeatmap from '../components/GithubHeatMap'
import Navbar from "../components/Navbar"
import { motion } from "framer-motion";
import TechStack from '../components/stacks/TechStack'
import Services from '../components/stacks/Services'
import Footer from '../components/Footer'
// import Socials from '../components/Socials'


export default function Home() {
  return (

    <div>
    <div>
      <Navbar/>

      {/* Spline Background */}
      <div className="spline-background">
        {/* <Spline scene="https://prod.spline.design/vglwSU-KXls6RsC0/scene.splinecode" /> */}
        {/* <Spline scene="/spline/home-gradient.spline" /> */}
        <Spline scene="/spline/lines.spline" />
      </div>

      {/* Overlay for Readability */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="content">
        <div className="flex-col  justify-start">
          {/* <div className="container px-4 my-30 sm:px-8 md:px-12 lg:px-20"> */}
          <div className="container px-4 my-15 sm:px-8 md:px-12 lg:px-20 md:my-20 lg:my-30 xl:my-30 2xl:my-30">

            {/* Name and Image */}
            <div className="flex flex-col lg:flex-row justify-center w-full">
              {/* Left Section - Text */}
            <div className="w-full lg:w-full  flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
              > 

                <h1 className="text-3xl font-extrabold text-white font-[anton] text-center [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)]
                                sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl
                                ">
                  This is Siddharth Anbumani
                </h1>
            </motion.div>
                
            <motion.div
                initial={{ opacity: 0 }} // Start fully transparent
                animate={{ opacity: 1 }} // Gradually become visible
                transition={{ duration: 3 }}
              > 
              {/* <h1 className="sm:text-2xl  text-9xl lg:text-8xl text-white font-extrabold font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] my-5 px-3 text-center"> */}
              <h1 className="text-5xl text-white font-extrabold font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] my-5 px-3 text-center
                              sm:text-7xl sm:my-2 md:text-7xl lg:text-9xl xl:text-9xl 2xl:text-9xl
                              ">
                  Web Designer + Web Developer
                </h1>
              </motion.div>


                {/* <Socials/> */}

              </div>

            </div>
          </div>
      
          <div className='flex flex-col justify-center items-center '>
            {/* <h1 className=' slide-down text-5xl text-white font-extrabold m-5 text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-10'>My Tech Stack</h1> */}
            <h1 className=' slide-down text-2xl text-white font-extrabold m-5 text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-12 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-1
                             md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl'>My Tech Stack</h1>
            <TechStack className='w-full'/>
          </div>

          <div className='slide-left flex flex-col justify-center items-center mx-auto'>
            {/* <h1 className='text-5xl text-white font-extrabold m-5 text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-20'>Open Source Contributions</h1> */}
            <h1 className='md:py-10  text-lg text-white font-extrabold  text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)]
                           sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-5xl '>Open Source Contributions</h1>
            <GitHubHeatmap />
          </div>

          <div className="flex flex-col justify-center">
            {/* <h1 className=' slide-down text-5xl text-white font-extrabold m-15 text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-20'>My Services</h1> */}
            <h1 className='md:py-10 text-2xl slide-down text-white font-extrabold text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-20
                            lg:text-5xl xl:text-5xl 2xl:text-5xl lg:mt-15 xl:my-15 2xl:mt-15 '>My Services</h1>
            <Services/>
          </div>

          <div className="flex justify-center slide-up mt-10">
            <a href="/project" className="bg-white p-2  md:px-4 md:py-2 rounded-3xl font-extrabold text-lg transition-transform duration-300 hover:scale-110
            ">
                <p className='text-black text-sm w-50 text-center'>
                  View My Works
                </p> 
            </a>
          </div>
          </div>
      
      </div>
    </div>
  <Footer className='footer'/>

</div>
  )
}

