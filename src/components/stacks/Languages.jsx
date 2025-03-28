import TechItem from "./TechItem";

export default function Languages() {
  return (
    <div className="flex justify-center slide-right">
      <div className="md:w-[80%] my-5 p-5 bg-black/70  md:bg-white/30  text-white rounded-4xl flex flex-col items-center justify-center md:flex-row">
        
        {/* Title Section */}
        <div className="flex justify-center items-center text-center md:w-5/12">
          <h1 className="text-md md:text-xl lg:text-3xl font-extrabold my-3">Languages</h1>
        </div>
        
        {/* Languages Section */}
        <div className="flex p-2 md:flex-row justify-center items-center space-x-2  md:space-y-0 md:space-x-5">
          <div className="space-y-2 space-x-2 md:flex">
            <TechItem img='html.png' text='HTML'/>
            <TechItem img='cssf.png' text='CSS'/>
          </div>

          <div className="space-y-2 space-x-2 md:flex">
            <TechItem img='js2.webp' text='JavaScript'/>
            <TechItem img='ts.png' text='Typescript'/>
          </div>
        </div>

      </div>
    </div>
  );
}
