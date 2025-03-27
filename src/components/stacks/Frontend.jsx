import TechItem from "./TechItem";

export default function Frontend() {
  return (
    <div className="flex justify-center slide-right">
      <div className=" md:w-[60%] my-5 p-5 bg-white/30 text-white rounded-4xl flex flex-col items-center justify-center md:flex-row">
        
        {/* Title Section */}
        <div className="flex justify-center items-center text-center md:w-5/12">
          <h1 className="text-xl lg:text-3xl font-extrabold ">Frontend Frameworks</h1>
        </div>
        
        {/* Frameworks Section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5">

        <TechItem img='reactf.webp' text='React'/>
        <TechItem img='nextjs.png' text='Next.js'/>

        </div>
      </div>
    </div>
  );
}

