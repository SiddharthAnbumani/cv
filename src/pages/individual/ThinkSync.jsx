import IndividualProject from "../../components/project/IndividualProject"
import Spline from "@splinetool/react-spline"

export default function ThinkSync(){
    return(
        <div className="flex flex-col">
            <div className="spline-background">
                <Spline scene="/spline/lines.spline" />
            </div>
            <div className="content ">
                <IndividualProject
                tag="FullStack Application"
                title="ThinkSync"
                img1="thinksync/landing.png"
                img2="thinksync/sign_in.png"
                img3="thinksync/view.png"
                img4="thinksync/new.png"
                description="ThinkSync is my first full-stack application, built using MongoDB, 
                Express, and Node.js — showcasing my proficiency with the MEN stack. It highlights 
                my ability to develop robust server-side applications, implement seamless CRUD 
                operations, and manage structured API routing with middleware-driven request handling 
                using Express.js. Secure user authentication and authorization are implemented using 
                Passport.js for session management and identity verification. The frontend is styled 
                using Bootstrap, ensuring a responsive and user-friendly interface. Completing ThinkSync 
                has been a significant milestone in my development journey, reflecting my dedication to 
                building practical, scalable solutions."
                tech1='/js2.webp'
                tech2='/bootstrap.png'
                tech3='/mongodb.svg'
                tech4='/express.png'
                tech5='/nodejs.webp'
                className='mb-10'
                />
            </div>
            
        </div>
    )
}