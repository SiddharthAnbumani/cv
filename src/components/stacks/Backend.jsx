export default function Backend(){
    return(
      <div className="w-full flex justify-center slide-left">
        <div className="w-[70%] my-5 py-5 bg-white/30 text-white rounded-4xl flex">
        <div className="w-6/12 flex justify-center items-center">
          <h1 className="font-extrabold text-3xl">Backend and Database</h1>
        </div>
<div className=" flex w-6/12 space-x-4">
<div className="w-32 h-32 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
          <h1 className="text-2xl font-extrabold text-white mt-2 font-[gulzar]">Mongo DB</h1>
          {/* <p className="text-white text-center px-2 truncate">NoSQL database management.</p> */}
          <img src="mongodb.webp" alt="MongoDB Logo" className="w-16 h-16 mt-2"/>
        </div>

        <div className="w-32 h-32 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
          <h1 className="text-2xl font-extrabold text-white mt-2 font-[gulzar]">Node.js</h1>
          {/* <p className="text-white text-center px-2 truncate">Server-side JS runtime.</p> */}
          <img src="node.svg" alt="Node Logo" className="w-16 h-16 mt-2"/>
        </div>

        {/* Express Card */}
        <div className="w-32 h-32 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
          <h1 className="text-2xl font-extrabold text-white mt-2 font-[gulzar]">Express</h1>
          {/* <p className="text-white text-center px-2 truncate">Backend API management.</p> */}
          <img src="express.png" alt="Express Logo" className="w-20 h-16 mt-2"/>
        </div>
</div>

        </div>
      </div>
    )
}