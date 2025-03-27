import TechItem from "./TechItem";

export default function Languages() {
  return (
    <div className="flex justify-center slide-right">
      <div className="md:w-[80%] my-5 p-5 bg-white/30 text-white rounded-4xl flex flex-col items-center justify-center md:flex-row">
        
        {/* Title Section */}
        <div className="flex justify-center items-center text-center md:w-5/12">
          <h1 className="text-xl lg:text-3xl font-extrabold ">Languages</h1>
        </div>
        
        {/* Languages Section */}
        <div className="flex flex-col p-2 md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5">
          <TechItem img='html.png' text='HTML'/>
          <TechItem img='cssf.png' text='CSS'/>
          <TechItem img='js2.webp' text='JavaScript'/>
          <TechItem img='typescript.png' text='Typescript'/>
        </div>

      </div>
    </div>
  );
}
