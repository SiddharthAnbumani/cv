import IndividualProject from "../../components/project/IndividualProject"
import Spline from "@splinetool/react-spline"

export default function EnduroChrono(){
    return(
        <div className="flex flex-col">
            <div className="spline-background">
                <Spline scene="/spline/lines.spline" />
            </div>
            <div className="content">
                <IndividualProject
                title="EnduroChrono"
                tag="Single Page Application"
                vid1="endurochrono/endurochrono.mov"
                description="Built with React and optimized for performance, EnduroChrono 
                offers an intuitive interface, smooth animations, and an adaptive design
                that seamlessly works across all devices. To ensure maximum efficiency, 
                it harnesses the power of React hooks like useMemo and useCallback, effectively
                minimizing unnecessary re-renders and optimizing complex computations. This results 
                in a faster, more responsive user experience, making EnduroChrono a reliable and 
                high-performing application for users on the go."
                tech1="reactf.webp"
                tech2="tailwindcss.png"
                />
            </div>
            
        </div>

    )
    
}