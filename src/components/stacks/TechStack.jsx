// import { motion } from "framer-motion"

// export default function TechStack(){
//     return (
//         <div className="slide-right w-full self-center">
//             <motion.div
//                 initial={{ opacity: 0 }} // Start fully transparent
//                 animate={{ opacity: 1 }} // Gradually become visible
//                 transition={{ duration: 1 }}
//                 className=""
//                 >
//                 </motion.div>

//             <div className="bg-white/30 text-white w-[60%] my-5 py-5 rounded-4xl flex">
//                 <div className="slideLeft w-6/12 flex justify-center items-center ">
//                     <h1 className="font-extrabold text-3xl slideRight">Frontend Frameworks</h1>
//                 </div>

//                 <div className="flex justify-center slideLeft w-6/12 space-x-2 ">

//                 <div className="w-30 h-30 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
//                         <h1 className="text-2xl font-extrabold text-white mt-2 font-[gulzar]">React</h1>
//                         {/* <p className="text-white text-center px-2 truncate">Frontend framework for UI.</p> */}
//                         <img src="reactf.webp" alt="React Logo" className="w-15 h-15 mt-2"/>
//                     </div>
                   
//                         {/* Next.js Card */}
//                     <div className="w-30 h-30 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
//                         <h1 className="text-2xl font-extrabold text-white mt-2 font-[gulzar]">Next.js</h1>
//                         {/* <p className="text-white text-center px-2 truncate">React framework for SSR.</p> */}
//                         <img src="nextjs.png" alt="Next.js Logo" className="w-15 h-15 mt-2"/>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//     )
// }

import { motion } from "framer-motion"
import Frontend from "./Frontend"
import Backend from "./Backend"
import Languages from "./Languages"
import DesignFrameworks from "./DesignFrameworks"

export default function TechStack(){
    return (
        <div className="w-full flex flex-col justify-center">
            <Frontend/>
            <Backend/>
            <Languages/>
            <DesignFrameworks/>
            
        </div>

       
    )
}
