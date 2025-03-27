import '.././index.css'
import SkillBox from '../components/stacks/SkillBox' 
import Spline from '@splinetool/react-spline'
import AppBarMui from '../components/AppBarMui'
import GitHubHeatmap from '../components/GithubHeatMap'
import Navbar from "../components/Navbar"
import { motion } from "framer-motion";
import TechStack from '../components/stacks/TechStack'
import Services from '../components/stacks/Services'
import Footer from '../components/Footer'



// <script type="module" src=""></script>
// <spline-viewer url="undefined"></spline-viewer>

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
          <div className="container px-4 my-30 sm:px-8 md:px-12 lg:px-20">

            {/* Name and Image */}
            <div className="flex flex-col lg:flex-row justify-center w-full">
              {/* Left Section - Text */}
              <div className="w-full lg:w-2/3  flex flex-col justify-start my-10 ">
              <motion.div
                initial={{ opacity: 0 }} // Start fully transparent
                animate={{ opacity: 1 }} // Gradually become visible
                transition={{ duration: 1 }}
              > 
                <h1 className="text-5xl sm:text-4xl lg:text-5xl text-white font-extrabold font-[anton]  [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)]  text-center">
                  This is Siddharth Anbumani
                </h1>
            </motion.div>
                
            <motion.div
                initial={{ opacity: 0 }} // Start fully transparent
                animate={{ opacity: 1 }} // Gradually become visible
                transition={{ duration: 3 }}
              > 
              <h1 className="text-9xl sm:text-6xl lg:text-8xl text-white font-extrabold font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] my-5 px-3 text-center">
                  Web Designer + Web Developer
                </h1>
              </motion.div>

                

                {/* <p className="text-sm text-center sm:text-base lg:text-lg text-white font-bold mt-5 [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)]">
                  I am Vehement about web development, delving into React, Next.js, Node.js,
                  and Express to build robust full-stack applications. Well-versed in MongoDB
                  and PostgreSQL for efficient database management. Exploring Three.js for
                  immersive 3D experiences and GSAP for smooth, interactive animations.
                </p> */}

                {/* Social Buttons */}
                <div className="flex space-x-3 mt-5 justify-center self-center">
                  <a className="backdrop-blur-3xl text-white   bg-white/30 rounded-md px-10 py-3 hover:border-2" 
                    href='https://www.linkedin.com/in/siddharth-anbumani-778b0124a/'>
                    <img src="linkedin.png" alt="" srcset="" className='w-20 h-5' />
                  </a>
                  <a className="backdrop-blur-3xl text-white  bg-white/30 rounded-md px-10 py-3 hover:border-2" 
                    href='https://github.com/SiddharthAnbumani'>
                    <img src="github.png" alt="" srcset="" className='w-20 h-7' />
                  </a>
                  <button className="backdrop-blur-3xl bg-white/30 text-white rounded-md px-10 py-3 hover:border-2"><img src="instagram.webp" alt="" srcset="" className='w-5 h-5' /> </button>
                  <button className="backdrop-blur-3xl text-white rounded-md px-10 py-3 hover:border-2">I</button>
                </div>
              </div>

              {/* Right Section - Image with Proper Aspect Ratio */}
              {/* <div className="w-full lg:w-1/3 flex-none flex items-center justify-start">
                Fix Image Stretching
                <img src="Frank.jpg" alt="Siddharth's Profile" className="w-full h-auto max-h-[80vh] object-contain" />
              </div> */}
            </div>
          </div>

          {/* <div className='scroll'>
            <SkillBox/>
          </div> */}

          
          {/* <div className="slide-right">
            <SkillBox  />
          </div> */}


      
          <div className='flex flex-col justify-center items-center '>
            <h1 className=' slide-down text-5xl text-white font-extrabold m-5 text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-10'>My Tech Stack</h1>
            <TechStack className='w-full'/>
          </div>

          <div className='slide-left flex flex-col justify-center items-center'>
            <h1 className='text-5xl text-white font-extrabold m-5 text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-20'>Open Source Contributions</h1>
            <GitHubHeatmap />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className=' slide-down text-5xl text-white font-extrabold m-15 text-center font-[alata] [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mt-20'>My Services</h1>
            <Services/>
          </div>

          <div className="flex justify-center slide-up">
            <a href="/project" className="bg-white mt-5 px-50 py-5 rounded-3xl font-extrabold text-lg transition-transform duration-300 hover:scale-110">
                <p className='text-black'>
                  View My Works
                </p> 
            </a>
          </div>
          </div>
          <div className="w-full">
          </div>
      </div>
      <div className="">
      </div>
    </div>
        <Footer/>

</div>
  )
}
