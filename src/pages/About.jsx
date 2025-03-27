import { duration } from "@mui/material"
import AppBarMui from "../components/AppBarMui"
import Navbar from "../components/Navbar"
import Spline from "@splinetool/react-spline"
import { motion } from "framer-motion"

export default function Contact(){
    return(
      <div className="">
        <Navbar/>
          <div className="spline-background bg-black">
            {/* <Spline scene="/spline/lines.spline" /> */}
        <Spline scene="/spline/lines.spline" />
          </div>
          <div className="content flex flex-col items-center">
              <h1 className="text-center font-extrabold text-5xl [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] text-[anton] mb-5">About Me</h1>
            <div className="flex flex-col items-center w-[80%] backdrop-blur-md py-5 bb-white/10 rounded-3xl">
              <p className="text-lg font-semibold mt-5 backdrop-blur-3xl p-10">
              Hi, I’m Siddharth Anbumani, a passionate Web Designer and Web Developer with a knack 
              for creating immersive digital experiences. With expertise in React, Next.js, Node.js, 
              and Express, I build intuitive and dynamic web applications.
              Before diving into the world of tech, I was a National-level swimmer representing Tamil Nadu. 
              The discipline, dedication, and resilience I gained from my swimming career have shaped my approach 
              to problem-solving and development. My journey in tech has been fueled by a curiosity to explore the 
              latest trends and implement them creatively. I specialize in full-stack development and enjoy bringing
              ideas to life through elegant user interfaces and seamless backend systems. When I’m not coding, you can 
              find me diving into 3D designs with Three.js or adding interactive animations using GSAP and Framer Motion.

               <p className="text-center mt-5">
                  I currently live in Chennai and am always eager to collaborate on exciting projects.
               </p>
                <p className="text-lg font-semibold text-center">
                  Let’s connect and build something amazing together!
              </p>
               </p>
               <div className="">
                Socials

                <div className="flex space-x-3 mt-5 justify-center self-center">
                  <a className="backdrop-blur-3xl text-white   bg-white/30 rounded-md px-10 py-3 hover:border-2" 
                    href='https://www.linkedin.com/in/siddharth-anbumani-778b0124a/'>
                    <img src="linkedin.png" alt="" srcset="" className='w-20 h-5' />
                  </a>
                  <a className="backdrop-blur-3xl text-white  bg-white/30 rounded-md px-10 py-3 hover:border-2" 
                    href='https://github.com/SiddharthAnbumani'>
                    <img src="github.png" alt="" srcset="" className='w-20 h-7' />
                  </a>
                  <a className="backdrop-blur-3xl text-white  bg-white/30 rounded-md px-10 py-3 hover:border-2" 
                    href='https://github.com/SiddharthAnbumani'>
                    <img src="insta_full.png" alt="" srcset="" className='w-20 h-7' />
                  </a>
                  <a className="backdrop-blur-3xl text-white  bg-white/30 rounded-md px-10 py-3 hover:border-2" 
                    href='https://github.com/SiddharthAnbumani'>
                    <img src="gmail_full.png" alt="" srcset="" className='w-20 h-7' />
                  </a>

                </div>
               </div>
            </div>
          </div>
      </div>
    )
}

