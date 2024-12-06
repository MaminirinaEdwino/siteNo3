import { motion } from "motion/react";
import Bouton from "./button";
import FontBold from "./fontBold";

export default function LandingInformation() {
    
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
    className="md:p-10 p-4 w-full md:w-[40%] h-[300px] md:h-[400px] flex flex-col justify-between">
        <div className="space-y-10">
        <span className="text-2xl md:text-3xl pb-2">Votez pour </span><span className="text-3xl md:text-5xl"><FontBold texte={"Ony"}/> Mbolasoa, <br /> candidate <FontBold texte={"n° 3"}/></span>
        </div>
        <div>
            Voter pour la leader qui inspire à un changement vers le meilleur pour le campus et votre vie estudiantine
        </div>
        <div className="flex justify-between w-[85%]">
            <Bouton texte={"En savoir plus"} cible={"#programme"}/>
            <Bouton texte={"Contacter"} cible={"#contact"}/>
        </div>
    </motion.section>
}