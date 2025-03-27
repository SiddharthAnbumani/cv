export default function Frontend() {
    return (
      <div className="w-full flex justify-center slide-right">
        {/* Container */}
        <div className="w-[60%] my-5 py-5 bg-white/30 text-white rounded-4xl flex">
          {/* Left Section - Title */}
          <div className="w-6/12 flex justify-center items-center">
            <h1 className="font-extrabold text-3xl">Frontend Frameworks</h1>
          </div>
  
          {/* Right Section - Cards */}
          <div className="w-6/12 flex justify-center space-x-4">
            {/* React Card */}
            <div className="w-32 h-32 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
              <h1 className="text-2xl font-extrabold text-white mt-2">React</h1>
              <img src="reactf.webp" alt="React Logo" className="w-16 h-16 mt-2" />
            </div>
  
            {/* Next.js Card */}
            <div className="w-32 h-32 flex flex-col justify-center items-center rounded-[30%] backdrop-blur-xl bg-black/70">
              <h1 className="text-2xl font-extrabold text-white mt-2">Next.js</h1>
              <img src="nextjs.png" alt="Next.js Logo" className="w-16 h-16 mt-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
