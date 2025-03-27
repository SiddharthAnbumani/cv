import AppBarMui from "../components/AppBarMui";
import Navbar from "../components/Navbar"


export default function Resume() {
    return (
      <div className="">
      <Navbar/>
        {/* First Section */}
        <div className="whole h-screen flex items-center justify-center">
          <div className="w-[80%] h-full">
            <div className="flex-col">
              <h1 className="mt-20 text-4xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center">
                SIDDHARTH ANBUMANI
              </h1>
              <div className="text-white mx-3 mt-5">
                {/* Summary of Qualifications */}
                <h1 className="text-xl text-center font-extrabold hover:text-2xl">
                  SUMMARY OF QUALIFICATIONS
                </h1>
                <hr className="border-t-4 border-black" />
                <p className="mt-3 hover:text-red-200 transition">
                  Innovative and driven Computer Science student, passionate about web development. 
                  Skilled in JavaScript and Java, with hands-on experience in MEN stack projects,
                  React & Next.js development, and frontend UI/animation using Three.js, GSAP,
                  and modern styling frameworks. Aiming to make a meaningful impact in software engineering.
                </p>
  
                {/* Education */}
                <h1 className="text-xl text-center font-extrabold">EDUCATION</h1>
                <hr className="border-t-4 border-black " />
                <div className="flex">
                  <div className="w-2/3">
                    <p className="font-bold">SRM Institute of Science and Technology,</p>
                    Ramapuram, Chennai - 600089 <br />
                    Bachelor of Technology in Computer Science and Engineering
                    <div className="mt-2">
                      Cumulative GPA: <span className="font-extrabold">8.25/10</span>
                    </div>
                  </div>
                  <div className="w-1/3 flex justify-end items-center">
                    <p className="font-bold">(Present)</p>
                  </div>
                </div>
  
                {/* Experience */}
                <h1 className="text-xl text-center font-extrabold">EXPERIENCE</h1>
                <hr className="border-t-4 border-black" />
                <div className="flex">
                  <div className="w-2/3">
                    <p className="font-bold">
                      TECHNOLOGY SUPPORT INTERN
                      <span className="font-light"> - Waves Swim Academy, Chennai, Tamil Nadu.</span>
                    </p>
                  </div>
                  <div className="w-1/3 flex justify-end items-center">
                    <p className="font-bold">February 2023 – November 2024</p>
                  </div>
                </div>
                <p className="font-bold">
                  Responsibilities - 
                  <span className="font-light">
                    Assisted in managing and maintaining the academy's website, ensuring optimal performance and user experience. 
                    Provided technical support for website-related issues, including troubleshooting and resolving technical problems. 
                    Monitored website analytics to identify areas for improvement and implement necessary changes.
                  </span>
                </p>
  
                {/* Technical Skills */}
                <h1 className="text-xl text-center font-extrabold">TECHNICAL SKILLS</h1>
                <hr className="border-t-4 border-black" />
  
                {/* MEN Stack Development */}
                <h1 className="font-bold">DEVELOPMENT WITH MEN STACK</h1>
                <ul>
                  <li>• Proficient in building dynamic and responsive web applications using MongoDB, Express.js, and Node.js.</li>
                  <li>• Hands-on experience in creating RESTful APIs, implementing authentication, and deploying scalable applications.</li>
                  <li>• Skilled in integrating MEN stack applications with frontend frameworks like React.js for full-stack development.</li>
                </ul>
  
                {/* React & Next.js Development */}
                <h1 className="font-bold">REACT & NEXT.JS DEVELOPMENT</h1>
                <ul>
                  <li>• Experienced in developing modern, interactive, and optimized web applications using React.js and Next.js.</li>
                  <li>• Proficient in state management (Redux, Context API) and Next.js features like SSR, SSG, and API routes.</li>
                  <li>• Optimizing performance, SEO, and scalability while ensuring best practices for maintainable code.</li>
                </ul>
  
                {/* Frontend UI & Animation */}
                <h1 className="font-bold">FRONTEND UI & ANIMATION</h1>
                <ul>
                  <li>• Delving into Three.js for interactive 3D graphics and GSAP for smooth animations.</li>
                  <li>• Experienced in using UI frameworks like Bootstrap, React-Bootstrap, Tailwind CSS, Material UI, and ShadCN for building visually appealing, responsive, and scalable user interfaces.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        {/* Second Section */}
        {/* <div className=" h-screen flex items-center justify-center">
          <div className="backdrop-blur-3xl w-[80%] h-full"></div>
        </div> */}
      </div>
    );
  }
  


// export default function Resume() {
//     return (
//       <div>
//         {/* First Section */}
//         <div className="background-section-resume h-screen flex items-center justify-center">
//           <div className="backdrop-blur-3xl w-[80%] h-full">
//             <div className="flex-col">
//             <div className="flex-col">
//             <h1 className=" mt-5 text-4xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center">
//                 SIDDHARTH ANBUMANI
//             </h1>
//             <div className="text-white mx-3 mt-5">
//                 <h1 className="text-xl text-center font-extrabold hover:text-2xl">
//                     SUMMARY OF QUALIFICATIONS
//                 </h1>
//                 <hr className="border-t-4 border-black"/>
//                 <p className="mt-3 hover:text-red-200 transition">
//                 Innovative and driven Computer Science student, passionate about web development. 
//                 Skilled in JavaScript and Java, with hands-on experience in MEN stack projects,
//                  React & Next.js development, and frontend UI/animation using Three.js, GSAP,
//                  and modern styling frameworks. Aiming to make a meaningful impact in software engineering.
//                 </p>
//                 <h1 className="text-xl text-center font-extrabold">
//                 EDUCATION
//                 </h1>
//                 <hr className="border-t-4 border-black "/>

//                 <div className="flex">
//                     <div className="w-2/3">
//                         <div>
//                             <p className="font-bold">SRM Institute of science and technology,</p>
//                             Ramapuram, Chennai - 600089 <br/>
//                             Bachelor of technology in Computer Science and Engineering
//                         </div>
//                         <div className="mt-2">
//                         Cumulative GPA: <p className="font-extrabold inline" > 8.25/10</p>
//                         </div>
//                     </div>
//                     <div className="w-1/3 flex justify-end items-center">
//                         <p className="font-bold">
//                             (present)
//                         </p>
//                     </div>
//                 </div>

//                 <h1 className="text-xl text-center font-extrabold">
//                 EXPERIENCE
//                 </h1>
//                 <hr className="border-t-4 border-black"/>

//                 <div className="flex">
//                     <div className="w-2/3">
//                         <div className="font-bold">
//                         TECHNOLOGY SUPPORT INTERN<p className="inline font-light"> - Waves Swim Academy, Chennai, Tamil Nadu.</p> 
//                         </div>
//                     </div>
//                     <div className="w-1/3 flex justify-end items-center">
//                         <p className="font-bold">
//                         Febuary 2023 – November 2024
//                         </p>
//                     </div>
//                 </div>
//                 <div className="font-bold">
//                     Responsibilities - <p className="inline font-light">Assisted in managing and maintaining the academy's website, ensuring optimal performance and user experience, Provided technical
//                     support for website-related issues, including troubleshooting and resolving technical problems. Monitored website analytics to identify
//                     areas for improvement and implement necessary changes.</p>
//                 </div>
               
//                <div>
//                <h1 className="text-xl text-center font-extrabold">
//                 TECHNICAL SKILLS
//                 </h1>
//                 <hr className="border-t-4 border-black"/>
//                 <div>
//                 <h1  className='font-bold'> DEVELOPMENT WITH MEN STACK</h1>
//                 <ul>
//                     <li>
//                     • Proficient in building dynamic and responsive web applications using MongoDB, Express.js, and Node.js.
//                     </li>
//                     <li>
//                     • Hands-on experience in creating RESTful APIs, implementing authentication, and deploying scalable applications.
//                     </li>
//                     <li>
//                     • Skilled in integrating MEN stack applications with frontend frameworks like React.js for full-stack development.
//                     </li>
//                 </ul>

//                 <h1 className='font-bold'> REACT & NEXT.JS DEVELOPMENT</h1>
//                 <ul>
//                     <li>
//                 • Experienced in developing modern, interactive, and optimized web applications using React.js and Next.js.

//                     </li>
//                     <li>
//                 • Proficient in state management (Redux, Context API) and Next.js features like SSR, SSG, and API routes.

//                     </li>
//                     <li>
//                 • Optimizing performance, SEO, and scalability while ensuring best practices for maintainable code.

//                     </li>
//                 </ul>

//                 <h1 className='font-bold'>FRONTEND UI & ANIMATION</h1>
//                 <ul>
//                     <li>
//                 • Delving into Three.js for interactive 3D graphics and GSAP for smooth animations.

//                     </li>
//                     <li>
//                 • Experienced in using UI frameworks like Bootstrap, React-Bootstrap, Tailwind CSS, Material UI, and ShadCNfor building
//                 visually appealing, responsive, and scalable user interfaces.

//                     </li>
//                 </ul>
//                 </div>
//                </div>
//             </div>
//             </div>
//           </div>
//         </div>
  
//         {/* Second Section */}
//         <div className="background-section-resume-bg-2 h-screen flex items-center justify-center">
//           <div className="backdrop-blur-3xl w-[80%] h-full">
//             {/* Add any content you want here */}
//           </div>
//         </div>
//       </div>
//     );
//   }
  


// </div> export default function Resume(){
// return (

//     <div>
//     <div className="background-section-resume h-screen flex items-center justify-center">
//         <div className=" mt-35 backdrop-blur-3xl w-[80%] h-[100%]">
            // <div className="flex-col">
            // <h1 className=" mt-5 text-4xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center">
            //     SIDDHARTH ANBUMANI
            // </h1>
            // <div className="text-white mx-3 mt-5">
            //     <h1 className="text-xl text-center font-extrabold hover:text-2xl">
            //         SUMMARY OF QUALIFICATIONS
            //     </h1>
            //     <hr className="border-t-4 border-black"/>
            //     <p className="mt-3 hover:text-red-200 transition">
            //     Innovative and driven Computer Science student, passionate about web development. 
            //     Skilled in JavaScript and Java, with hands-on experience in MEN stack projects,
            //      React & Next.js development, and frontend UI/animation using Three.js, GSAP,
            //      and modern styling frameworks. Aiming to make a meaningful impact in software engineering.
            //     </p>
            //     <h1 className="text-xl text-center font-extrabold">
            //     EDUCATION
            //     </h1>
            //     <hr className="border-t-4 border-black "/>

            //     <div className="flex">
            //         <div className="w-2/3">
            //             <div>
            //                 <p className="font-bold">SRM Institute of science and technology,</p>
            //                 Ramapuram, Chennai - 600089 <br/>
            //                 Bachelor of technology in Computer Science and Engineering
            //             </div>
            //             <div className="mt-2">
            //             Cumulative GPA: <p className="font-extrabold inline" > 8.25/10</p>
            //             </div>
            //         </div>
            //         <div className="w-1/3 flex justify-end items-center">
            //             <p className="font-bold">
            //                 (present)
            //             </p>
            //         </div>
            //     </div>

            //     <h1 className="text-xl text-center font-extrabold">
            //     EXPERIENCE
            //     </h1>
            //     <hr className="border-t-4 border-black"/>

            //     <div className="flex">
            //         <div className="w-2/3">
            //             <div className="font-bold">
            //             TECHNOLOGY SUPPORT INTERN<p className="inline font-light"> - Waves Swim Academy, Chennai, Tamil Nadu.</p> 
            //             </div>
            //         </div>
            //         <div className="w-1/3 flex justify-end items-center">
            //             <p className="font-bold">
            //             Febuary 2023 – November 2024
            //             </p>
            //         </div>
            //     </div>
            //     <div className="font-bold">
            //         Responsibilities - <p className="inline font-light">Assisted in managing and maintaining the academy's website, ensuring optimal performance and user experience, Provided technical
            //         support for website-related issues, including troubleshooting and resolving technical problems. Monitored website analytics to identify
            //         areas for improvement and implement necessary changes.</p>
            //     </div>
               
            //    <div>
            //    <h1 className="text-xl text-center font-extrabold">
            //     TECHNICAL SKILLS
            //     </h1>
            //     <hr className="border-t-4 border-black"/>
            //     <div>
            //     <h1  className='font-bold'> DEVELOPMENT WITH MEN STACK</h1>
            //     <ul>
            //         <li>
            //         • Proficient in building dynamic and responsive web applications using MongoDB, Express.js, and Node.js.
            //         </li>
            //         <li>
            //         • Hands-on experience in creating RESTful APIs, implementing authentication, and deploying scalable applications.
            //         </li>
            //         <li>
            //         • Skilled in integrating MEN stack applications with frontend frameworks like React.js for full-stack development.
            //         </li>
            //     </ul>

            //     <h1 className='font-bold'> REACT & NEXT.JS DEVELOPMENT</h1>
            //     <ul>
            //         <li>
            //     • Experienced in developing modern, interactive, and optimized web applications using React.js and Next.js.

            //         </li>
            //         <li>
            //     • Proficient in state management (Redux, Context API) and Next.js features like SSR, SSG, and API routes.

            //         </li>
            //         <li>
            //     • Optimizing performance, SEO, and scalability while ensuring best practices for maintainable code.

            //         </li>
            //     </ul>

            //     <h1 className='font-bold'>FRONTEND UI & ANIMATION</h1>
            //     <ul>
            //         <li>
            //     • Delving into Three.js for interactive 3D graphics and GSAP for smooth animations.

            //         </li>
            //         <li>
            //     • Experienced in using UI frameworks like Bootstrap, React-Bootstrap, Tailwind CSS, Material UI, and ShadCNfor building
            //     visually appealing, responsive, and scalable user interfaces.

            //         </li>
            //     </ul>
            //     </div>
            //    </div>
            // </div>
//             </div>
       
//         </div>
//   </div>

//   <div className="background-section-resume-bg-2 h-screen flex items-center justify-center">
//   <div className=" mt-35 backdrop-blur-3xl w-[80%] h-[100%] mt-0">

//   </div>
//   </div>
//   </div>

// )
// }
