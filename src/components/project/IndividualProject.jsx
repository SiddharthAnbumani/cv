
import VideoComponent from "../VideoComponent"
import { motion } from "framer-motion"

export default function IndividualProject({
    title,img1,img2,img3,img4,img5,img6,vid,description,tag,tech1,tech2,tech3,tech4,tech5,tech6}){
    return(
    <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
            <h1 className="text-7xl font-extrabold my-5 [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)]">{title}</h1>
          {tag ? <p className="bg-red-500/70 font-extrabold text-center w-50 rounded-4xl">{tag}</p> : <p className="bg-blue-950/70 font-extrabold text-center w-50 rounded-4xl">General </p>}
        </div>

        <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
                >
        <div className="space-y-5 flex flex-col items-center justify-center my-6">

            {img1 || img2 ? 
            <div className="flex w-[80%] space-x-5 bg-black mx-5">
                <div className=" w-6/12">
                    {img1 ? <img src={img1} alt=""  className="h-full rounded-lg"/> : null}
                </div>


               <div className="w-6/12">
                    {img2 ? <img src={img2} alt=""  className="h-full rounded-lg"/> : null}
                </div>
            </div> : null}
            
                    {/* Conditionally rendering this div */}
                {img3 || img4 ?
                <div className="flex w-[80%] space-x-5 bg-black mx-5">
                    <div className="self-center w-6/12">
                    {img3 ? <img src={img3} alt=""  className="h-full rounded-lg"/> : null}

                    </div>

                    <div className="self-center w-6/12">
                    {img4 ? <img src={img4} alt=""  className="h-full rounded-lg"/> : null}
                    </div>
                </div>  : null
                }
                
                {img5 || img6 ?
                <div className="flex w-[80%] space-x-5 bg-black mx-5">
                    <div className="self-center w-6/12">
                    {img5 ? <img src={img5} alt=""  className="h-full"/> : null}

                    </div>

                    <div className="self-center w-6/12">
                    {img6 ? <img src={img6} alt=""  className="h-full"/> : null}
                    </div>
                </div>  : null
                }
        </div>
    </motion.div>


        { vid ? <VideoComponent source={vid}/> : null}

        <div className=" slide-up bg-white/30 backdrop-blur-3xl rounded-3xl my-10 p-10">
            <p className="text-lg text-white font-semibold">
                {description}
            </p>

            {tech1 ? <p className="text-white font-extrabold text-center text-xl my-5">Powered By</p> : null}
            {tech1 ?
            <div className="flex justify-center space-x-5">
                {tech1 && 
                <img src={tech1} alt="" className="rounded-2xl w-[60px] h-[50px] p-1 bg-black/30"/>
                }
                {tech2 && 
                <img src={tech2} alt="" className="rounded-2xl w-[60px] h-[50px] p-1 bg-black/30"/>
                }
                {tech3 && 
                <img src={tech3} alt="" className="rounded-2xl w-[60px] h-[50px] p-1 bg-black/30"/>
                }
                {tech4 && 
                <img src={tech4} alt="" className="rounded-2xl w-[60px] h-[50px] p-1 bg-black/30"/>
                }
                {tech5 && 
                <img src={tech5} alt="" className="rounded-2xl w-[60px] h-[50px] p-1 bg-black/30"/>
                }
                {tech6 && 
                <img src={tech6} alt="" className="rounded-2xl w-[60px] h-[50px] p-1 bg-black/30"/>
                }
            </div>
            : null }
        </div>


            <a href="/project" className="bg-white/70 mt-5 px-10 py-3 rounded-3xl font-bold text-lg text-black transition-transform duration-300 hover:bg-white hover:text-blue-950 hover:scale-110">
                back
            </a>

    </div>
    )
}