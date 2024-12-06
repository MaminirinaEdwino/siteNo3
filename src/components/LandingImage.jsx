import { motion } from "motion/react"
import image from "../assets/modif_farany.png"
export default function LandingImage() {
    
    return <motion.section
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1,
        transition: {
            duration: .5
        }
    }}
    className="flex justify-center items-center ">
        <img src={image} alt="" className="w-52 md:w-96 md:mr-10"/>
    </motion.section>
}