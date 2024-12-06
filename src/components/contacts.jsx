import { BiSolidEnvelopeOpen, BiSolidPhone } from "react-icons/bi"
import Contact from "./contact"
import { motion } from "motion/react";
import { FaFacebook } from "react-icons/fa6";
export default function Contacts() {
    const listContact = [
        {
            "icone": <BiSolidPhone/>,
            "contact": "034 09 260 56"
        },
        {
            "icone": <BiSolidEnvelopeOpen/>,
            "contact": "mbolasoa0509@gmail.com"
        },
        {
            "icone": <FaFacebook/>,
            "contact": "Ony Mbolasoa"
        }
    ]
    return <motion.section 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1,
        transition:{
            duration:1
        }
    }}
    id="contact" className="h-dvh w-full md:p-40 p-5 flex flex-col justify-center md:justify-around">
        <h1 className="text-5xl font-bold">Entrez en contact</h1>
        <div className="md:max-w-[55%]">
            Pour une collaboration, des demandes particulières ou autres, n'hésitez pas a me contacter au:
        </div>
        <div className="flex flex-wrap sm:justify-between items-center sm:w-[80%] space-y-3 mt-5">
            {listContact.map((l,i)=><Contact contact={l.contact} key={i+l.contact} i={i} icone={l.icone}/>)}
        </div>
    </motion.section>
}