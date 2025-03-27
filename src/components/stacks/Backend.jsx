import '../../index.css';
import TechItem from './TechItem';

export default function Backend() {
  return (
    <div className="slide-left flex justify-center">
      <div className="md:w-[70%] my-5 p-5 bg-black/30 md:bg-white/30 text-white rounded-4xl flex flex-col items-center justify-center md:flex-row">
        
        {/* Title Section */}
        <div className="flex justify-center items-center text-center md:w-5/12 my-3">
          <h1 className="text-md md:text-xl lg:text-3xl font-extrabold">Backend</h1>
        </div>
        
        <div className="flex md:flex-row justify-center items-center space-x-2  md:space-y-0 md:space-x-5">
          <TechItem img='mongodb.webp' text='MongoDB'/>
          <TechItem img='node.svg' text='Node.js'/>
          <TechItem img='express.png' text='Express'/>
        </div>
      </div>
    </div>
  );
}
