import Spline from "@splinetool/react-spline";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ProjectProfile from "../components/project/ProjectProfile";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Project() {
  return (
    <div className="">
      <Navbar />

        <div className="spline-background">
        <Spline scene="/spline/robot_new.spline" />
      </div>

        <div className="content">
        {/* The Project Content Starts Here */}
        <div className="flex w-full justify-center items-center self-center">
          {/* Left Section */}
          <div className="flex flex-col space-y-10 w-1/3">
            <motion.div initial={{ x: -300 }} animate={{ x: 0 }} transition={{ duration: 1, type: "tween" }}>
              <ProjectProfile
                title="ThinkSync"
                description="A full-stack journaling app using MongoDB, Express, and Node.js with Passport.js authentication, offering seamless CRUD operations and secure API routing for an intuitive user experience."
                img="/thinksync/view.png"
                link='/'
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

            <div className="slide-left">
              <ProjectProfile
                title="Articulate"
                description="Currently Being Developed"
                img="my2.jpg"
                link="/"
              />
            </div>
          </div>

          <div className="w-1/3">{/* Empty Space */}</div>

          {/* Right Section */}
          <div className="flex flex-col space-y-10 w-1/3">
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

            <div className="slide-right">
              <ProjectProfile
                title="Eat-split"
                description="Currently Being Developed"
                img="my2.jpg"
                link="/"
              />
            </div>
          </div>
        </div>

        {/* Outlet for Nested Routes */}
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

