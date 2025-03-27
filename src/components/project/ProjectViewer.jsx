import Spline from "@splinetool/react-spline";
import Navbar from "../Navbar";
import IndividualProject from "./IndividualProject";
import ThinkSync from "../../pages/individual/ThinkSync";

export default function ProjectViewer(){
    return(
        <div className=" text-white h-screen w-full">
            <div className="spline-background">
        <Spline scene="/spline/lines.spline" />
            </div>
            <div className="content">
            <Navbar/>
            <ThinkSync/>
            </div>
        </div>
    )
}