import IndividualProject from "../../components/project/IndividualProject"
import Spline from "@splinetool/react-spline"

export default function Skipsense(){
    return (
        <div className="">
            <div className="spline-background">
                <Spline scene="/spline/lines.spline" />
            </div>
            <div className="content">
            <IndividualProject
                title="SkipSense"
                tag="Single Page Application"
                img1='skipsense/profile.png'
                img2='skipsense/result.png'
                vid1='skipsense/skipsense.mov'
                description="SkipSense is a smart and intuitive application
                 designed to help students track their attendance and determine 
                 how many classes they can skip while maintaining the required 75% 
                attendance. Built using React for a dynamic user experience and styled 
                with Tailwind CSS for a sleek interface, it leverages the useState hook 
                for real-time state management and the useContext hook for efficient
                 global state handling. With its user-friendly design, SkipSense allows 
                 students to input their total classes and instantly calculate the number 
                 of classes they can skip, ensuring they stay on track with their attendance 
                 goals."
                 tech1="reactf.webp"
                 tech2="tailwindcss.png"
                />
            </div>
        </div>
    )
}