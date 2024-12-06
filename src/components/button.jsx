export default function Bouton({
    texte, cible
}) {
    return <a href={cible} className="bg-couleur rounded-2xl p-2 px-5 text-white">{texte}</a>
}