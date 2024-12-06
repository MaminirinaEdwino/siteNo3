import { motion } from "motion/react"

export default function DetailInformation({image, titre,  details}) {
    
    return <motion.article 
    initial={{
        scale:0.5,
        opacity:0
    }}
    whileInView={{
        scale:1,
        opacity:1,
        transition:{
            duration: 1
        }
    }}
    className="border mb-2 border-couleur rounded-lg p-3 flex flex-col justify-between min-h-[400px] md:max-w-[25%]">
        {/* <img src={image} alt="" className="h-40 border border-gray-400/30 rounded"/> */}
        <div className="h-40 border border-gray-400/30 rounded text-9xl flex justify-center">{image}</div>
        <h1 className="text-center text-lg font-bold">{titre}</h1>
        <ul className="p-3" >
            {details.map(det=><li className="p-1"> * {det}</li>)}
        </ul>
    </motion.article>
}