import '../index.css'
import Spline from "@splinetool/react-spline"
import { motion } from "framer-motion";

export default function Landing(){
    return(
        <div id="landing-page">
        <div className="spline-background">
        <Spline scene="/spline/discover_2.spline" />
        </div>
        <div className="text-white lg:mt-20">
            <div className="flex flex-col items-center justify-center text-center h-screen">
            <motion.div
                initial={{ opacity: 0 }} // Start fully transparent
                animate={{ opacity: 1 }} // Gradually become visible
                transition={{ duration: 3 }}
              > 
            <h1 className=" text-5xl text-center font-extrabold font-[Helvetica] -mt-20 [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] 
                            md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-7xl">
                SIDDHARTH ANBUMANI
            </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }} // Start fully transparent
                animate={{ opacity: 1 }} // Gradually become visible
                transition={{ duration: 4 }}
              > 
              <p className="text-md font-bold italic my-2 text-center [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)]
                            md:text-xl md:my-1 lg:text-2xl xl:text-3xl 2xl:text-3xl">
            Building the Future, One Line of Code at a Time.
            </p>
              </motion.div>

        <a href="/home" className="text-xs px-5 py-3 my-5 bg-white/30 backdrop-blur-3xl rounded-3xl font-bold transition-transform duration-300 hover:scale-110
                                    md:px-5 md:py-3 lg:px-7 lg:py-4 sm:text-xl md:text-2xl lg:text-2xl">
            Discover What I Build
        </a>

        
            </div>
            
        </div>
        </div>
    )
}
