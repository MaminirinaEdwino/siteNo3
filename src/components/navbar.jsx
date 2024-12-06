import { motion } from "motion/react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function NavBar() {
  return (
    
    <motion.nav
    initial={{
      y:-120
    }}
    animate={{
      y:0,
      transition:{
        duration: .5
      }
    }}
    className="p-2 border-b-1 mb-10 bg-white sticky top-0 border-b-black grid  grid-cols-5 w-full z-10">
      <div className="flex m-auto bg-couleur font-bold text-2xl text-white w-fit h-fit px-3 p-1 rounded-[50%] ">O</div>
      <a href="#acceuil" className="m-auto text-xs sm:text-lg pt-3">ACCEUIL</a>
      <a href="#a_propos" className="m-auto text-xs sm:text-lg pt-3">A PROPOS</a>
      <a href="#contact" className="m-auto text-xs sm:text-lg pt-3">CONTACTS</a>
      <div className="flex  font-family-font relative sm:justify-start items-center sm:text-3xl justify-center pl-3 pt-2 space-x-1">
        <a href="https://web.facebook.com/ony.mbolasoa" className=" cursor-pointer"><FaFacebook/></a>
        <a href="https://www.instagram.com/tongolo.bediabe/" className=" cursor-pointer"><FaInstagram/></a>
      </div>
    </motion.nav>
  );
}
