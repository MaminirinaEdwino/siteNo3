import { motion } from "motion/react";

export default function Contact({contact, icone, i}) {
    return <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1,
        transition:{
            delay:(i+1)*.1
        }
    }}
    className="flex items-center bg-couleur rounded-2xl px-4 w-fit py-1 space-x-2 text-white">
        {icone} {contact}
    </motion.div>
}