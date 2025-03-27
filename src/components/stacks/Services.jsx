// import { motion } from "framer-motion"

// export default function Services(){
//     return (
//         <div className="flex">


//             <div className="flex  flex-col  justify-center items-center w-6/12 bg-black">
//                 <div className="slide-left w-full">
//                 <motion.div
//                 initial={{x: -100}}
//                 animate={{x:0}}
//                 transform={{duration: 3, ease: 'easeInOut'}}
//                 >
//                     <div className="slide-left w-300">
//                         <p className=" bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[40%]">Single Page Applications (SPAs)</p>
//                     </div>
//                 </motion.div>

//                 <motion.div
//                 initial={{x: -100}}
//                 animate={{x:0}}
//                 transform={{duration: 3, ease: 'easeInOut'}}
//                 >
//                     <div className="slide-left w-300">
//                         <p className=" bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[40%]">Custom Portfolio Websites</p>
//                     </div>
//                 </motion.div>

//                 <motion.div
//                 initial={{x: -100}}
//                 animate={{x:0}}
//                 transform={{duration: 3, ease: 'easeInOut'}}
//                 >
//                     <div className="slide-left w-300">
//                         <p className=" bg-white/30 text-white text-center font-extrabold rounded-3xl py-5 px-3 my-2 text-2xl w-[40%]">Startup and Business Websites</p>
//                     </div>
//                 </motion.div>

//                 <motion.div
//                 initial={{x: -100}}
//                 animate={{x:0}}
//                 transform={{duration: 3, ease: 'easeInOut'}}
//                 >
//                     <div className="slide-left w-300">
//                         <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[40%]">Full-Stack Web Solutions</p>
//                     </div>
//                 </motion.div>

//                    <div className="slide-left w-300">
//                         <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[40%]">E-Commerce Solutions</p>
//                     </div>
//                 </div>

//             </div>

//             {/* half  */}

//                 <div className="flex flex-col w-6/12 bg-blue-700">
//                     <div className="slide-right w-300">
//                         <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[40%]">Landing Pages</p>
//                     </div>

//                     <div className="slide-right w-300">
//                         <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[40%]">UI/UX Design</p>
//                     </div>

//                     <div className="slide-right w-300">
//                         <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[40%]">Website Maintenance and Support</p>
//                     </div>

//                     <div className="slide-right w-300">
//                         <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[40%]">API Integration</p>
//                     </div>

//                     <div className="slide-right w-300">
//                         <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[40%]">CMS Development</p>
//                     </div>
//                 </div>


//             </div>

//     )
// }


import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="flex">

  {/* Left Section */}
  <div className="flex flex-col justify-center items-center w-6/12">
    <div className="slide-left w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[500px] whitespace-nowrap">
        Single Page Applications (SPAs)
      </p>
    </div>

    <div className="slide-left w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[500px] whitespace-nowrap">
        Custom Portfolio Websites
      </p>
    </div>

    <div className="slide-left w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-extrabold rounded-3xl py-5 px-3 my-2 text-2xl w-[500px] whitespace-nowrap">
        Startup and Business Websites
      </p>
    </div>

    <div className="slide-left w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[500px] whitespace-nowrap">
        Full-Stack Web Solutions
      </p>
    </div>

    <div className="slide-left w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[500px] whitespace-nowrap">
        E-Commerce Solutions
      </p>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex flex-col justify-center items-center w-6/12">
    <div className="slide-right w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[500px] whitespace-nowrap">
        Landing Pages
      </p>
    </div>

    <div className="slide-right w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[500px] whitespace-nowrap">
        UI/UX Design
      </p>
    </div>

    <div className="slide-right w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[500px] whitespace-nowrap">
        Website Maintenance and Support
      </p>
    </div>

    <div className="slide-right w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[500px] whitespace-nowrap">
        API Integration
      </p>
    </div>

    <div className="slide-right w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-2xl w-[500px] whitespace-nowrap">
        CMS Development
      </p>
    </div>
  </div>
</div>

  );
}
