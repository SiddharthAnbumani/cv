import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center mx-3 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">

  {/* Left Section */}
  <div className="flex flex-col justify-center items-center w-5/12 lg:w-[6/12]">
    <div className="slide-left w-full flex justify-center ">
      <p className="bg-white/30 text-sm md:text-lg lg:text-2xl text-white text-center font-bold rounded-3xl py-5 px-3 my-2 whitespace-nowrap md:w-[500px]">
        Single Page Applications (SPAs)
      </p>
    </div>

    <div className="slide-left w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-sm whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        Custom Portfolio Websites
      </p>
    </div>

    <div className="slide-left w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-extrabold rounded-3xl py-5 px-3 my-2 text-sm whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        Startup and Business Websites
      </p>
    </div>

    <div className="slide-left w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-sm  whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        Full-Stack Web Solutions
      </p>
    </div>

    <div className="slide-left w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-sm  whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        E-Commerce Solutions
      </p>
    </div>
  </div>

  {/* center  */}
  <div className="w-2/12 xl:hidden"></div>

  {/* Right Section */}
  <div className="flex flex-col justify-center items-center w-5/12">
    <div className="slide-right w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-sm  whitespace-nowrap md:text-xl  lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        Landing Pages
      </p>
    </div>

    <div className="slide-right w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-sm whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]" >
        UI/UX Design
      </p>
    </div>

    <div className="slide-right w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-sm whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        Website Maintenance and Support
      </p>
    </div>

    <div className="slide-right w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-sm whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        API Integration
      </p>
    </div>

    <div className="slide-right w-full flex justify-center">
      <p className="bg-white/30 text-white text-center font-bold rounded-3xl py-5 px-3 my-2 text-sm whitespace-nowrap  md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl md:w-[500px]">
        CMS Development
      </p>
    </div>
  </div>
</div>

  );
}
