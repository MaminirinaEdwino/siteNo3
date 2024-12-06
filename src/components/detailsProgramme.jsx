import { motion } from "motion/react"
import { useRef } from "react"

const ComNum = ({numero})=>{
    return <div className={"w-full h-full flex sm:text-5xl text-2xl font-bold items-center "}>
        {numero}
    </div>
}
const ComNum1 = ({numero})=>{
    return <div className={"w-full h-full sm:text-5xl text-2xl font-bold flex justify-end  items-center p-1"}>
        {numero}
    </div>
}


export default function DetailsProgramme({numero, titre, content, position}) {

    return <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1,
        transition:{
            duration: 1.5
        }
    }}
    className="flex justify-center appearence" 
    >
        <div className="border-r-2 p-5   sm:w-[45%]">
            {position == 0 && titre}
            {position ==0 && content}
            {position != 0 && <ComNum1 numero={numero}/>}
        </div>
        <div className="flex justify-center items-center">
            <div className="bg-couleur w-5 h-5 rounded-[50%] -ml-2.5"></div>
        </div>
        <div className="sm:w-[45%] p-5 ml-5">
        {position == 1 ? (titre) : <ComNum numero={numero}/>}
        {position ==1 && content}
        </div>
    </motion.div>
}