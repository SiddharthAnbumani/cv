
import { motion } from "framer-motion"
import Frontend from "./Frontend"
import Backend from "./Backend"
import Languages from "./Languages"
import DesignFrameworks from "./DesignFrameworks"

export default function TechStack(){
    return (
        <div className="w-screen flex flex-col justify-center">
            <Frontend/>
            <Backend/>
            <Languages/>
            <DesignFrameworks/>
            
        </div>

       
    )
}
