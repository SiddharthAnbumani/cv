import Spline from "@splinetool/react-spline";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ProjectProfile from "../components/project/ProjectProfile";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Project() {

  return (
    <div className="">
      <Navbar />

      {/* {loading && <div className="absolute inset-0 flex items-center justify-center bg-black"></div>} */}

      <div className="spline-background">
        {/* <Spline scene="/spline/cyber_mannequi÷n.spline" /> */}
        <Spline scene="/spline/robot_new.spline" />
      </div>

      <div className="content2">
        {/* The Project Content Starts Here */}
        <div className="flex flex-col md:flex-row w-full justify-center items-center space-y-5 md:space-y-0">

          {/* Left Section */}
          <div className="flex flex-col space-y-10 w-full md:w-1/3 items-center">
            <motion.div initial={{ x: -300 }} animate={{ x: 0 }} transition={{ duration: 1, type: "tween" }}>
              <ProjectProfile
                title="ThinkSync"
                description="A full-stack journaling app using MongoDB, Express, and Node.js with Passport.js authentication, offering seamless CRUD operations and secure API routing for an intuitive user experience."
                img="/thinksync/view.png"
                page="/thinksync"
                tag="FullStack Application"
              />
            </motion.div>

            <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1, type: "tween" }}>
              <ProjectProfile
                title="EnduroChrono"
                description="A performance-optimized React app with an intuitive interface, smooth animations, and adaptive design, using hooks like useMemo and useCallback for efficient rendering and computation."
                img="endurochrono/profile.png"
                page="/enduro"
              />
            </motion.div>

            {/* <div className="slide-left">
              <ProjectProfile
                title="Articulate"
                description="Currently Being Developed"
                img="my2.jpg"
                link="/"
              />
            </div> */}
          </div>

          {/* Spacer */}
          <div className="hidden md:block  md:w-[90px] lg:w-1/3"></div>

          {/* Right Section */}
          <div className="flex flex-col space-y-10 w-full md:w-1/3 items-center ">
            <motion.div initial={{ x: 300 }} animate={{ x: 0 }} transition={{ duration: 1, type: "tween" }}>
              <ProjectProfile
                title="Skipsense"
                description="A React app styled with Tailwind CSS, designed for students to track attendance. It calculates and shows how many classes you can skip while staying within attendance requirements."
                img="skipsense/profile.png"
                page="/skipsense"
                tag="Single Page Application"
              />
            </motion.div>

            <motion.div initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 1, type: "tween" }}>
              <ProjectProfile
                title="Nasa Daily"
                description="A React web app that fetches a random Astronomy Picture of the Day (APOD) using NASA's API, displaying the image, title, and explanation from NASA's space archive."
                img="nasa/profile.png"
                page="/nasa"
                tag="API Integration"
              />
            </motion.div>

            {/* <div className="slide-right">
              <ProjectProfile
                title="Eat-split"
                description="Currently Being Developed"
                img="my2.jpg"
                link="/"
              />
            </div> */}
          </div>
        </div>

        {/* Currently Working */}
        <div className="hidden w-screen md:flex justify-center my-5">
        <div className="bg-white/20 w-[70%] backdrop-blur-3xl rounded-4xl flex flex-col items-center">
        <h1 className="text-5xl font-extrabold font-[alan] my-5 text-green-400">Currently Working On </h1>
        <h1 className="text-4xl font-extrabold font-[helvetica] my-2">QuantumStore</h1>
        <p className="bg-black/50 font-extrabold text-center w-[50%] rounded-4xl text-[12px] p-2">Fullstack Application</p>
        <div className="flex space-x-3 my-2">
        <img src="/e-com-landing.png" alt="" className="border-b-amber-50 w-70 rounded-3xl" />
        <img src="/cart.png" alt="" className="border-b-amber-50 w-70 rounded-3xl" />
        </div>
        <p className="text-lg px-5 text-center">Developing a full-stack web application using React, Node.js, MongoDB, and Tailwind CSS, implementing both local
           authentication and Google OAuth using Passport.js for a secure and flexible login experience</p>
           <p className="font-extrabold text-xl my-3 text-blue-600">Powered By</p>
        <div className="flex space-x-2 mb-5">
          <img src="/reactf.webp" alt="" className="rounded-2xl w-[40px] h-[40px] md:w-[60px] md:h-[50px] p-1 bg-black/30"/>
          <img src="/nodejs.webp" alt="" className="rounded-2xl w-[40px] h-[40px] md:w-[60px] md:h-[50px] p-1 bg-black/30"/>
          <img src="/mongodb.svg" alt="" className="rounded-2xl w-[40px] h-[40px] md:w-[60px] md:h-[50px] p-1 bg-black/30"/>
          <img src="/express.png" alt="" className="rounded-2xl w-[40px] h-[40px] md:w-[60px] md:h-[50px] p-1 bg-black/30"/>
          <img src="/tailwindcss.png" alt="" className="rounded-2xl w-[40px] h-[40px] md:w-[60px] md:h-[50px] p-1 bg-black/30"/>
        </div>

        </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}



