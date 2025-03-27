
import { motion } from "framer-motion";

export default function Timeline({ year, title, content, ani }) {
  const Wrapper = ani ? motion.div : 'div';

  return (
    <div className="">
      <Wrapper
        {...(ani && {
          initial: { x: -100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          transition: { duration: 1, type: 'tween' }
        })}
      >
        <div className="flex flex-col sm:flex-row backdrop-blur-3xl bg-black/70 p-5 rounded-4xl">

      <div className="w-full sm:w-5/12 flex justify-center items-center mb-4 sm:mb-0">
        <p className="lg:text-8xl sm:text-3xl font-extrabold text-white">{year}</p>
      </div>

      <div className="w-1 sm:w-2 bg-white hidden sm:block"></div>


      <div className="w-full sm:w-7/12 flex flex-col justify-center items-center lg:m-2 lg:px-2">
        <h1 className="font-bold text-md text-center lg:text-3xl mx-1">{title}</h1>
        <p className="text-center text-xs lg:text-lg font-semibold p-3">{content}</p>
      </div>
</div>

      </Wrapper>
    </div>
  );
}


// import { motion } from "framer-motion";

// export default function Timeline({year, title, content, ani}){
//     return (

//           <div className="">
//             <motion.div
//             initial={{x:-100, opacity:'0'}}
//             animate={{x:0, opacity:1}}
//             transition={{duration:1, type:'tween'}}
//             >
//               <div className="flex backdrop-blur-3xl bg-white/20 p-5 rounded-4xl">
//                 <div className="w-5/12 flex justify-center items-center">
//                  <p className="text-8xl font-extrabold text-white">{year}</p>
//                 </div>

//                 <div className="w-2 bg-white">.</div>

//                 <div className="w-7/12 text-lg flex flex-col justify-center items-center m-2 p-2 ">
//                   <h1 className="font-bold text-3xl">{title}</h1>
//                   <p className="text-center">{content}</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
          
//     )
// }
