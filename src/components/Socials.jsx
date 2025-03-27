import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Socials(){
    return(
        <div className="flex my-10 space-x-10 justify-center self-center sm:scale-60 md:scale-80 lg:scale-120 xl:scale-120 2xl:scale-120 ">
            <a className= "text-blue-500 transition-transform duration-300 hover:scale-110 rounded-md  " 
                href='https://www.linkedin.com/in/siddharth-anbumani-778b0124a/'>
                    <FaLinkedinIn size={30} /> 
            </a>
            <a
              href="mailto:siddharth@gmail.com"
              className="text-blue-500 transition-transform duration-300 hover:scale-110"
            >
              <div className="">
                  <SiGmail size={30} />
                </div>
            </a>

            <a className="text-blue-500 transition-transform duration-300 hover:scale-110 rounded-md  " 
                href='https://github.com/SiddharthAnbumani'>
                {/* <img src="git_icon.png" alt="" srcset="" className='h-6' /> */}
                <FaGithub size={30} />


            </a>
            <button className="text-blue-500 transition-transform duration-300 hover:scale-110 rounded-md ">
                {/* <img src="instagram.webp" alt="" srcset="" className='w-5 h-5 self-center'/>  */}
                <BsInstagram size={30} />
            </button>
            {/* <button className="backdrop-blur-3xl text-white rounded-md px-10 py-3 hover:border-2">I</button> */}
        </div>
    )
}
