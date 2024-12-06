import LandingImage from "./LandingImage";
import LandingInformation from "./landingIntroduction";
import NavBar from "./navbar";

export default function LandingPage() {
    return <div className="flex flex-col h-dvh justify-between -z-10" >
        
        <div id="acceuil" className="flex  flex-wrap justify-around gap-20 md:gap-0 md:relative md:-top-0">
        <LandingInformation/>
        <LandingImage/>
        </div>
    </div>
}