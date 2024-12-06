import DetailsProgramme from "./detailsProgramme"

import FontBold from "./fontBold";
const TitreQuestion = ()=>{
    return <div className="text-2xl font-bold mb-5 sm:max-w-72">
        Comment vais-je améliorer la vie estudiantine de l'Asja ? 
    </div>
}
const ContentQuestion = ()=>{
    return <div className="w-[80%]">
        Mon plan d'action se focalise sur 5 grand Points, regroupant toutes les solutions aux problèmes des étudiants de l'Asja en ce moment
    </div>
}
const Titre = ({titre})=>{
    return <div className="text-center text-2xl md:text-3xl p-5">
        <FontBold texte={titre}/>
    </div>
}
const ContentEducation = ()=>{
    return <ul className="list-disc space-x-1 space-y-3">
        <li><FontBold texte={"Offre de primes pour les majors et les délégués par niveau"}/>  pour les récompenser et les soutenir pour leur travail durant toute l'année, leur offrir une motivation et les rappeler que toute peine mérite  salaire </li>
        <li><FontBold texte={"Digitalisation académique"}/>  pour rendre les cours </li>
        <li><FontBold texte={"Amélioration de l'accès internet "}/>  au sein du campus de l'Asja </li>
        <li><FontBold texte={"Partenariats"}/>  avec diverses entreprises, ONG, hôpitaux, haut placés </li>
    </ul>
}

const ContentSport = ()=>{
    return <ul className="list-disc space-x-1 space-y-3">
        <li> <FontBold texte={"Organisation de match inter-établissement"}/> pour hausser le niveau de l'équipe de l'Asja et pour plus de visibilité en cas de victoires</li>
        <li><FontBold texte={"Sponsoring d'équipement"}/> des équipes de l'Asja lors des compétitions (maillots, rafraichissement divers)</li>
        <li><FontBold texte={"Dynamisations du club de Volley"}/></li>
        <li><FontBold texte={"Création d'un club d'athlétisme"}/></li>
    </ul>
}
const ContentSanté = ()=>{
    return <ul className="list-disc space-x-1 space-y-3">
        <li> <FontBold texte={"Création d'une boite à pharmacie"}/> pour effectuer les soin d'urgence afin d'éviter les malaises fatals  et autres mésaventures  des étudiants </li>
        <li><FontBold texte={"Journée caritative"}/> : Don de sang  </li>
        <li><FontBold texte={"Formation sur les gestes de premier secours"}/>pour les étudiants afin de faire face au situation d'urgence</li>
    </ul>
}
const ContentCoutume = ()=>{
    return <ul className="list-disc space-x-1 space-y-3">
        <li> <FontBold texte={"Création d'une journée dédiée à la culture Malagasy"}/> pour aider les étudiants a se connecter à leur origines et ne pas oublier leur culture</li>
        <li><FontBold texte={"Formation sur l'art oratoire malagasy"}/>: Kabary</li>
        <li><FontBold texte={"Dynamisations"}/> des associations des étudiants des Régions</li>
    </ul>
}
const ContentLoisir = ()=>{
    return <ul className="list-disc space-x-1 space-y-3">
        <li> <FontBold texte={"Workshop"}/> pour les clubs de l'ASJA</li>
        <li><FontBold texte={"Organisation"}/> de divers festivités estudiantine</li>
        <li><FontBold texte={"Redynamisation de la Dehon's Day "}/>Par le biais des activités et concours variées</li>
    </ul>
}

export default function ProgrammeList() {
    return <section id="programme">
        <DetailsProgramme titre={<TitreQuestion/>} position={0} content={<ContentQuestion/>} numero={""}/>
        <DetailsProgramme titre={<Titre titre={"Education et partenariats"}/>} position={1} content={<ContentEducation/>} numero={"01"}/>
        <DetailsProgramme titre={<Titre titre={"Sport"}/>} position={0} content={<ContentSport/>} numero={"02"}/>
        <DetailsProgramme titre={<Titre titre={"Santé"}/>} position={1} content={<ContentSanté/>} numero={"03"}/>
        <DetailsProgramme titre={<Titre titre={"Coutumes"}/>} position={0} content={<ContentCoutume/>} numero={"04"}/>
        <DetailsProgramme titre={<Titre titre={"Loisirs"}/>} position={1} content={<ContentLoisir/>} numero={"05"}/>
    </section>
}