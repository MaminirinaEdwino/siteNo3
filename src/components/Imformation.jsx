import DetailInformation from "./detailsInformation";
import { motion } from "motion/react";
import { TbSwimming } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { BiChurch } from "react-icons/bi";
export default function Information() {
    const listInformation = [
        {
            "image": <TbSwimming/>,
            "titre": "SPORT",
            "details": [
                "Participation à plusieurs championnats régionales, nationales et internationals",
                "Plusieurs records et performance"
            ]
        },
        {
            "image": <PiStudent/>,
            "titre": "EDUCATION",
            "details": [
                "Déléguée de classe trois années d'affilée (L1,L2,L3) témoignant du bon leadership et des différents comptétences"
            ]
        },
        {
            "image": <BiChurch/>,
            "titre": "SPIRITUEL",
            "details": [
                "Membre active de l'association Fanilon'I Madagasikara",
                "Cheftaine durant 3 années",
                "Filoha depuis 6 mois"
            ]
        }
    ]
    return <motion.section 
    initial={{
        opacity:0,
        x:-10
    }}
    whileInView={{
        opacity:1,
        x:0,
        transition:{
            duration: 1.5
        }
    }}
    className="min-h-dvh" id="a_propos">
        
        <div className="text-center text-3xl p-3">POURQUOI VOTER POUR MOI ?</div>
        <div className="text-center p-3">Parce que ce ne sont pas les mots qui font une leader, mais ses expérience</div>
        <div className="flex flex-wrap justify-around p-10">
            {listInformation.map(info=><DetailInformation image={info.image} titre={info.titre} details={info.details}/>)}
        </div>
    </motion.section>
}