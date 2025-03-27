import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col min-w-full">
      <div className="bg-black/70 w-full text-lg">
        <div className="text-white flex flex-col  justify-center my-5 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">

          <div className=" flex flex-col space-y-2 justify-center items-center md:w-1/3 my-3">

            <h1 className="text-lg font-bold">Social Media</h1>
            <div className="w-[80%] flex flex-col items-center">
              <a
                className="text-white font-semibold rounded-md px-10 py-3  w-[40%] transition-transform duration-300 hover:scale-110"
                href="https://www.linkedin.com/in/siddharth-anbumani-778b0124a/"
              >
              <div className="flex justify-center items-center space-x-1">
                  <p>Linked</p>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                className="text-white font-semibold rounded-md px-10 py-3  w-[40%] transition-transform duration-300 hover:scale-110"

                href="https://github.com/SiddharthAnbumani"
              >
                <div className="flex justify-center items-center space-x-2">
                  <p>Github </p>
                  <FaGithub />
                </div>
              </a>
              <a
                className="text-white font-semibold rounded-md px-10 py-3  w-[40%] transition-transform duration-300 hover:scale-110"

                href="https://www.instagram.com"
              >
                 <div className="flex justify-center items-center space-x-2">
                  <p>Instagram</p>
                  <FaInstagram />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className=" flex flex-col items-center md:w-1/3 my-3">
            <h1 className="text-lg font-bold">Quick Links</h1>
            <div className="flex flex-col items-center">
              <a 
              className="transition-transform duration-300 hover:scale-110"
              href="/">Siddharth Anbumani</a>
              <a 
              className="transition-transform duration-300 hover:scale-110"
              href="/home">Home</a>

              <a 
              className="transition-transform duration-300 hover:scale-110"
              href="/contact">About</a>

              <a 
              className="transition-transform duration-300 hover:scale-110"
              href="/project">Projects</a>
              <a
              className="transition-transform duration-300 hover:scale-110"
               href="/resume">Resumé</a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:w-1/3 my-3 ">
            <h1 className="text-lg font-bold">Contact Information</h1>
            {/* <p className="transition-transform duration-300 hover:scale-110">+91 7305175711</p> */}
                <div className="flex justify-center items-center space-x-2 transition-transform duration-300 hover:scale-110">
                  <FaPhoneSquareAlt />
                  <p>+91 7305175711 </p>
                </div>
            <a
              href="mailto:siddharth@gmail.com"
              className="text-blue-500 transition-transform duration-300 hover:scale-110"
            >
              <div className="flex justify-center items-center space-x-2">
                  <SiGmail />
                  <p className="font-extrabold" >Gmail </p>
                </div>
            </a>
          </div> 

        </div>
      </div>

      {/* Section 2 - Copyright */}
      <div className="bg-black w-full h-[100px] flex justify-center items-center">
        <h1 className="text-white font-extrabold text-md sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl ">
          Copyright &#169; 2025 Siddharth Anbumani
        </h1>
      </div>
    </div>
  );
}


