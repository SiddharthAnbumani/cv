import Spline from "@splinetool/react-spline"
import IndividualProject from "../../components/project/IndividualProject"

export default function NasaDaily(){
    return (
        <div className="">
            <div className="spline-background">
        <Spline scene="/spline/lines.spline" />
            </div>
            <div className="content">
            <IndividualProject
                title="Nasa Daily"
                tag="API Integration"
                img1='nasa/profile.png'
                img2="nasa/profile2.png"
                description="NASA Daily is a React-based web application designed 
                to spark curiosity by fetching and displaying a random Astronomy 
                Picture of the Day (APOD) from NASA's API. Built with a focus on 
                simplicity and elegance, the app is styled using Tailwind CSS, ensuring
                a clean, responsive, and visually appealing user interface. Each time a 
                user visits the application, it randomly selects a date from NASA's extensive
                space archive and fetches the corresponding image, title, and explanation. 
                This allows users to explore breathtaking visuals of space, celestial events, 
                and astronomical phenomena. With a seamless design and smooth user experience, 
                NASA Daily is a perfect platform for space enthusiasts to discover something new 
                about the universe every day."
                tech1="reactf.webp"
                tech2="tailwindcss.png"
                />
            </div>
        </div>
    )
}