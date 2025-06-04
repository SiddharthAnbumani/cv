import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center mx-3 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">

  {/* Left Section */}
  <div className="flex flex-col justify-center items-center w-5/12 lg:w-[6/12] space-y-2">
    <div className="slide-left lg:w-[90%] flex justify-center bg-white/10 backdrop-blur-3xl w-[300px] rounded-xl md:w-[300px]">
      <p className=" text-sm md:text-lg lg:text-2xl text-white text-center font-bold rounded-xl py-3 px-3 my-2 whitespace-nowrap ">
        Single Page Applications (SPAs)
      </p>
    </div>

    <div className="slide-left lg:w-[90%] flex justify-center bg-white/10 backdrop-blur-3xl w-[300px] rounded-xl">
      <p className=" text-white text-center font-bold rounded-xl py-3 px-3 my-2 text-sm whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        Custom Portfolio Websites
      </p>
    </div>

    <div className="slide-left lg:w-[90%] flex justify-center bg-white/10 backdrop-blur-3xl w-[300px] rounded-xl">
      <p className=" text-white text-center font-extrabold rounded-xl py-3 px-3 my-2 text-sm whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        Startup and Business Websites
      </p>
    </div>

    <div className="slide-left lg:w-[90%] flex justify-center bg-white/10 backdrop-blur-3xl w-[300px] rounded-xl">
      <p className=" text-white text-center font-bold rounded-xl py-3 px-3 my-2 text-sm  whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        Full-Stack Web Solutions
      </p>
    </div>
    
    <div className="slide-left lg:w-[90%] flex justify-center bg-white/10 backdrop-blur-3xl w-[300px] rounded-xl">
      <p className=" text-white text-center font-bold rounded-xl py-3 px-3 my-2 text-sm  whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        E-Commerce Solutions
      </p>
    </div>
  </div>

  {/* center  */}
  <div className="w-2/12 xl:hidden"></div>

  {/* Right Section */}
  <div className="flex flex-col justify-center items-center w-5/12 space-y-2 mt-2 lg:mt-0">
    <div className="slide-right lg:w-[90%] flex justify-center bg-white/10 backdrop-blur-3xl w-[300px] rounded-xl">
      <p className=" text-white text-center font-bold rounded-xl py-3 px-3 my-2 text-sm  whitespace-nowrap md:text-xl  lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        Landing Pages
      </p>
    </div>

    <div className="slide-right lg:w-[90%] flex justify-center bg-white/10 backdrop-blur-3xl w-[300px] rounded-xl">
      <p className=" text-white text-center font-bold rounded-xl py-3 px-3 my-2 text-sm whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]" >
        UI/UX Design
      </p>
    </div>

    <div className="slide-right lg:w-[90%] flex justify-center bg-white/10 backdrop-blur-3xl w-[300px] rounded-xl">
      <p className=" text-white text-center font-bold rounded-xl py-3 px-3 my-2 text-sm whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        Website Maintenance and Support
      </p>
    </div>

    <div className="slide-right lg:w-[90%] flex justify-center bg-white/10 backdrop-blur-3xl w-[300px] rounded-xl">
      <p className=" text-white text-center font-bold rounded-xl py-3 px-3 my-2 text-sm whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        API Integration
      </p>
    </div>

    <div className="slide-right lg:w-[90%] flex justify-center bg-white/10 backdrop-blur-3xl w-[300px] rounded-xl">
      <p className=" text-white text-center font-bold rounded-xl py-3 px-3 my-2 text-sm whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        CMS Development
      </p>
    </div>
  </div>
</div>

  );
}
