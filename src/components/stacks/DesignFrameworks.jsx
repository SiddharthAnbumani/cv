import TechItem from "./TechItem";

export default function DesignFrameworks() {
    return (
      <div className="flex justify-center slide-up">
        <div className="md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%] my-5 p-5 bg-white/30 text-white rounded-4xl flex flex-col items-center justify-center md:flex-row">

          <div className="flex justify-center items-center text-center  md:w-4/12">
            <h1 className="text-xl lg:text-3xl font-extrabold ">Design Frameworks/Libraries</h1>
          </div>
  
          <div className="flex flex-col justify-center items-center w-full md:w-8/12 space-y-10">
            
            <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-5">
              <TechItem img='bootstrap.png' text='Bootstrap'/>
              <TechItem img='reactbootstrap.png' text='React-Bootstrap'/>
              <TechItem img='tailwindcss.png' text='TailwindCSS'/>
              <TechItem img='shadcn.png' text='Shadcn'/>
            </div>
  
              <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-5">
                <TechItem img='mui.png' text='MaterialUI'/>
                <TechItem img='threejs.png' text='Three.js'/>
                <TechItem img='gsap2.gif' text='GSAP'/>
                <TechItem img='framer.webp' text='Framer'/>
              </div>
          </div>
        </div>
      </div>
    );
  }

