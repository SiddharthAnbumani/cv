import Navbar from "../components/Navbar";
import WorkExp from "../components/WorkExp";

export default function Canvas(){
    return (
        <div className="">
            <Navbar/>
        <div className="w-screen h-screen bg-black flex justify-center items-center">
            <WorkExp/>
        </div>
        </div>
    )
}