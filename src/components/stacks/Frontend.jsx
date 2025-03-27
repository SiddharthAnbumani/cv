import TechItem from "./TechItem";

export default function Frontend() {
  return (
    <div className="flex justify-center slide-right">
      <div className=" md:w-[60%] my-5 p-5 bg-black/70 md:bg-white/30 text-white rounded-4xl flex flex-col items-center justify-center md:flex-row">
        
        {/* Title Section */}
        <div className="md:flex justify-center items-center text-center md:w-5/12">
          <h1 className="text-md md:text-xl lg:text-3xl font-extrabold my-3">Frontend Frameworks</h1>
        </div>
        
        {/* Frameworks Section */}
        <div className="flex md:flex-row justify-center items-center  md:space-y-0 space-x-5">

        <TechItem img='reactf.webp' text='React'/>
        <TechItem img='nextjs.png' text='Next.js'/>

        </div>
      </div>
    </div>
  );
}

