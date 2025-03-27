export default function Footer() {
    return (


      <div className="flex flex-col min-w-full">
        {/* Section 1 - Social Media and Links */}
        <div className="bg-black/70 w-full text-lg">
          <div className="text-white flex justify-center my-5">
            {/* Social Media */}
            <div className="w-1/3 flex flex-col space-y-2 justify-center items-center ">
              <h1 className="text-lg font-bold">Social Media</h1>
              <div className="w-[80%] flex flex-col items-center">
                <a
                  className="text-white rounded-md px-10 py-3 hover:border-2 w-[40%] transition-transform duration-300 hover:scale-110"
                  href="https://www.linkedin.com/in/siddharth-anbumani-778b0124a/"
                  >
                  <img src="linkedin.png" alt="" className="w-20 h-5" />
                </a>
                <a
                  className="text-white rounded-md px-10 py-3 hover:border-2 w-[40%]"
                  href="https://github.com/SiddharthAnbumani"
                  >
                  <img src="github.png" alt="" className="w-20 h-7" />
                </a>
                <a
                  className="text-white rounded-md px-10 py-3 hover:border-2 w-[40%]"
                  href="https://www.instagram.com"
                  >
                  <img src="insta_full.png" alt="" className="w-20 h-7" />
                </a>
              </div>
            </div>
  
            {/* Quick Links */}
            <div className="w-1/3 flex flex-col items-center">
              <h1 className="text-lg font-bold">Quick Links</h1>
              <div className="flex flex-col items-center">
                <a href="/">Siddharth Anbumani</a>
                <a href="/home">Home</a>
                <a href="/project">Projects</a>
            </div>
                <a href="/resume">Resumé</a>
              </div>
  
            {/* Contact Information */}
            <div className="w-1/3">
              <h1>Contact Information</h1>
              <p>+91 7305175711</p>
              <a
                href="mailto:siddharth@gmail.com"
                className="text-blue-500 underline"
                >
                Send me an Email
              </a>
            </div>
          </div>
        </div>
  
        {/* Section 2 - Copyright */}
        <div className="bg-black w-full h-[100px] flex justify-center items-center">
          <h1 className="text-white font-extrabold text-xl">
            Copyright &#169; 2025 Siddharth Anbumani
          </h1>
        </div>
      </div>
    );
  }
  

// export default function Footer(){

//     return (
//         <div className="flex flex-col w-full">
//         <div className="bg-black/60 w-full text-lg">
//             <div className="text-white flex justify-center">
 
//                 <div className=" w-1/3 flex flex-col space-y-2 justify-center items-center">
//                 <h1 className="text-lg font-bold">Social Media</h1>
//                 <div className="w-[80%] flex flex-col items-center">
//                     <a className="text-white rounded-md px-10 py-3 hover:border-2 w-[40%] transition-transform duration-300 hover:scale-110" 
//                     href='https://www.linkedin.com/in/siddharth-anbumani-778b0124a/'>
//                         <img src="linkedin.png" alt="" srcset="" className='w-20 h-5' />
//                     </a>
//                     <a className="text-white  rounded-md px-10 py-3 hover:border-2 w-[40%]" 
//                         href='https://github.com/SiddharthAnbumani'>
//                         <img src="github.png" alt="" srcset="" className='w-20 h-7' />
//                      </a>
//                     <a className="text-white  rounded-md px-10 py-3 hover:border-2 w-[40%]" 
//                         href='https://github.com/SiddharthAnbumani'>
//                         <img src="insta_full.png" alt="" srcset="" className='w-20 h-7' />
//                      </a>
//                             </div>
//                 </div>

//                 <div className="w-1/3 flex flex-col items-center">
//                     <h1 className="text-lg font-bold">Quick Links</h1>
//                     <div className=" flex flex-col items-center">
//                     <a href="/">Siddharth Anbumani</a>
//                     <a href="/home">Home</a>
//                     <a href="/project">Projects</a>
//                     <a href="/resume">Resumé</a>
//                     </div>
//                 </div>
//                 <div className="w-1/3">
//                     <h1>Contact Information</h1>
//                     <p>+91 7305175711</p>
//                     <a href="mailto:siddharth@gmail.com" className="text-blue-500 underline">
//                         Send me an Email
//                     </a>

//                     <a href=""></a>
//                     <a href=""></a>
//                 </div>
//             </div>
//         </div>
//         <div className="bg-black/85 w-full h-[100px] flex justify-center items-center">
//             <h1 className="text-white font-extrabold text-xl">CopyRight &#169; 2025 Siddharth Anbumani </h1>
//         </div>
//         </div>
//     )
// }
