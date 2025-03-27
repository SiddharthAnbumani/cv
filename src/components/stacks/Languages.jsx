export default function Languages(){
    return(
        <div className="flex flex-col items-center slide-right">
        <div className="w-[80%] my-5 py-5 bg-white/30 text-white rounded-4xl flex">
              <div className="w-5/12 flex justify-center items-center">
                <h1 className="font-extrabold text-3xl">Languages</h1>
              </div>

        <div className="flex space-x-4 w-7/12 justify-center items-center pr-2">
        {/* HTML Card */}
        <div className="w-30 h-30 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
          <h1 className="text-2xl font-extrabold text-white mt-2 font-[gulzar]">HTML 5</h1>
          {/* <p className="text-white text-center px-2 truncate mx-3">HTML for structure and layout.</p> */}
          <img src="html.png" alt="HTML Logo" className="w-16 h-16 mt-2"/>
        </div>

        {/* CSS Card */}
        <div className="w-30 h-30 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
          <h1 className="text-2xl font-extrabold text-white mt-2 font-[gulzar]">CSS</h1>
          {/* <p className="text-white text-center px-2 truncate">CSS for design and styling.</p> */}
          <img src="cssf.png" alt="CSS Logo" className="w-16 h-16 mt-2"/>
        </div>

        {/* JavaScript Card */}
        <div className="w-32 h-32 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
          <h1 className="text-2xl font-extrabold text-white mt-2 font-[gulzar]">JavaScript</h1>
          {/* <p className="text-white text-center px-2 truncate">JS for dynamic applications.</p> */}
          <img src="js2.webp" alt="JS Logo" className="w-16 h-16 mt-2"/>
        </div>

        {/* TypeScript Card */}
        <div className="w-32 h-32 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
          <h1 className="text-2xl font-extrabold text-white mt-2 font-[gulzar]">TypeScript</h1>
          {/* <p className="text-white text-center px-2 truncate">Typed JS for safety.</p> */}
          <img src="typescript.png" alt="TS Logo" className="w-16 h-16 mt-2"/>
        </div>
        </div>

            </div>
        </div>
    )
}