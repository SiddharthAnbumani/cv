export default function DesignFrameworks(){
    return(
        <div className="flex justify-center slide-up">
            <div className="w-[90%] my-5 py-5 bg-white/30 text-white rounded-4xl flex">
                <div className="w-5/12 flex justify-center items-center">
                    <h1 className="text-3xl font-extrabold">Design Frameworks/Libraries</h1>
                </div>

            <div className="flex flex-col justify-center w-7/12  space-y-2">
                <div className="flex justify-center space-x-5">
                    <div className="w-30 h-30 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
                        <h1 className="text-xl font-extrabold text-white mt-2 font-[gulzar]">Bootstrap</h1>
                        <img src="bootstrap.png" alt="Bootstrap Logo" className="w-16 h-14 mt-2"/>
                    </div>

                    <div className="w-30 h-30 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
                        <h1 className="text-md font-extrabold text-white mt-2 font-[gulzar]">React-Bootstrap</h1>
                        <img src="reactbootstrap.png" alt="React Bootstrap Logo" className="w-16 h-16 mt-2"/>
                    </div>


                    <div className="w-30 h-30 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
                        <h1 className="text-lg font-extrabold text-white mt-2 font-[gulzar]">TailwindCSS</h1>
                        <img src="tailwindcss.png" alt="TailwindCSS Logo" className="w-18 h-14 mt-2"/>
                    </div>


                    <div className="w-30 h-30 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
                        <h1 className="text-xl font-extrabold text-white mt-2 font-[gulzar]">Shadcn</h1>
                        <img src="shadcn.png" alt="Shadcn Logo" className="w-16 h-16 mt-2"/>
                    </div>
                </div>

                <div className="flex justify-center space-x-5">
                    <div className="w-30 h-30 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
                        <h1 className="text-xl font-extrabold text-white mt-2 font-[gulzar]">MaterialUI</h1>
                        <img src="mui.png" alt="MaterialUI Logo" className="w-16 h-16 mt-2"/>
                    </div>
                    
                    <div className="w-30 h-30 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
                        <h1 className="text-xl font-extrabold text-white mt-2 font-[gulzar]">Three.js</h1>
                        <img src="threejs.png" alt="MaterialUI Logo" className="w-16 h-16 mt-2"/>
                    </div>

                    <div className="w-30 h-30 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
                        <h1 className="text-xl font-extrabold text-white mt-2 font-[gulzar]">GSAP</h1>
                        <img src="gsap2.gif" alt="MaterialUI Logo" className="w-16 h-16 mt-2"/>
                    </div>
                    <div className="w-30 h-30 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
                        <h1 className="text-xl font-extrabold text-white mt-2 font-[gulzar]">Framer</h1>
                        <img src="framer.webp" alt="" className="w-16 h-16 mt-2"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}