import Timeline from "./Timeline";
import { motion } from "framer-motion";


export default function WorkExp(){
    return (
        <div className="flex justify-center items-center text-white mt-15 my-10">
            <div className="w-[90%] lg:w-[80%] flex flex-col justify-center items-center">
                {/* <h1 className="text-5xl"> About</h1>
                <p className="py-4 px-4 text-justify hyphens-auto w-[90%] rounded-md border-white border-2">
                I’m Siddharth Anbumani, a web developer and creative technologist passionate about crafting clean, interactive, and scalable digital experiences. From acing the art of adapting through a pandemic to diving headfirst into computer science at SRM IST, my journey has been anything but ordinary.
                I began with foundational programming in Java, C, and Python, explored the world of machine learning, and eventually found my calling in full-stack web development. Today, I specialize in building dynamic applications using React, Node.js, Express, and MongoDB, with a growing love for Next.js, Tailwind CSS, and 3D web experiences using Three.js and Blender.
                Whether it's writing efficient code or designing immersive UI, I’m constantly evolving — turning ideas into reality, one project at a time.
                </p> */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3}}>
                    <h1 className="text-4xl text-center lg:text-6xl font-extrabold text-white [text-shadow:8px_8px_16px_rgba(255,255,255,0.5)] mb-10">WORK EXPERIENCE</h1>
                </motion.div>
                <div className="border-white/15 border-1 my-4 px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-3xl">
                   <h1 className="text-3xl mx-2 font-extrabold">
                        WEB DEVELOPER
                    </h1> 
                    <h1 className="text-xl lg:text-2xl mx-2 font-sebold">
                        Waves Swim Academy | Chennai, India
                    </h1>
                    <h1 className="text-xl text-blue-700 font-semibold mx-2">
                        Apr 2025 – Present
                    </h1>
                    <p className="mx-2 lg:mx-4 px-1 lg:px-4 text-justify hyphens-auto text-lg leading-6 my-4 font-light">
                        Hired to fully redesign and develop the academy’s official website from the ground up.
                        Created a responsive, desktop-first single-page application (SPA) using React, Tailwind CSS, and modern UI/UX principles.
                        Structured content to effectively showcase training programs, competitive achievements, and class schedules.
                        Emphasized code reusability, modular architecture, and scalability for long-term maintainability.
                        Collaborated with stakeholders to align design with the academy’s brand and athlete-first mission.
                    </p>
                </div>

                <div className=" border-white/15 border-2 my-4 px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-3xl">
                   <h1 className="text-3xl mx-2 font-extrabold">
                    TECHNOLOGY SUPPORT INTERN
                    </h1> 
                    <h1 className="text-xl lg:text-2xl mx-2 font-sebold">

                        Waves Swim Academy | Chennai, India
                    </h1>
                    <h1 className="text-xl text-blue-700 font-semibold mx-2">

                        Jan 2024 – Mar 2025

                    </h1>
                    <p className="mx-2 lg:mx-4 px-1 lg:px-4 text-justify hyphens-auto text-lg leading-6 my-4 font-light">


                        Provided technical support for internal operations and digital systems, ensuring smooth day-to-day functioning.
                        Assisted in managing digital content, resolving technical issues, and supporting coaches and admin staff with IT needs.
                        Played a key role in identifying the need for a website overhaul, which led to a full-time developer opportunity.
                    </p>
                </div>

            </div>
        </div>
    )
}