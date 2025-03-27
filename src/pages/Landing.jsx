import '../index.css'
import Spline from "@splinetool/react-spline"
import { motion } from 'framer-motion'

export default function Landing(){
    return(
        <div id="landing-page">
        <div className="spline-background">
        {/* <Spline scene="https://prod.spline.design/XPfHaBwCkVSySGPv/scene.splinecode" /> */}
        <Spline scene="/spline/discover_2.spline" />
        </div>
        <div className="content">
            <div className="flex flex-col justify-center items-center h-screen">
            {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold font-[arizonia] rounded-lg backdrop-blur-xl bg-white/2 p-5 text-center"> */}
            <motion.div
                initial={{ opacity: 0 }} // Start fully transparent
                animate={{ opacity: 1 }} // Gradually become visible
                transition={{ duration: 3 }}
              > 
            <h1 className="text-7xl font-extrabold font-[Helvetica] -mt-20 [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] ">
                SIDDHARTH ANBUMANI
            </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }} // Start fully transparent
                animate={{ opacity: 1 }} // Gradually become visible
                transition={{ duration: 4 }}
              > 
              <p className="font-bold text-2xl italic [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)]">
            Building the Future, One Line of Code at a Time.
            </p>
              </motion.div>


          <a href="/home" className="bg-white/50 mt-5 px-10 py-5 rounded-3xl font-semibold text-lg transition-transform duration-300 hover:scale-110">
            Discover What I Build
        </a>

            

            </div>
            
        </div>
        </div>
    )
}

{/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.80/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/3FaIwBQEazMpLbup/scene.splinecode"></spline-viewer> */}

{/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.80/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/XPfHaBwCkVSySGPv/scene.splinecode"></spline-viewer> */}

// cyber mannequin

{/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.80/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/XPfHaBwCkVSySGPv/scene.splinecode"></spline-viewer> */}