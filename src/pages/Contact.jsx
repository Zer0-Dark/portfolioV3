/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from "@fortawesome/free-solid-svg-icons";
import pdf from "../assets/Abdulrahman Ehab Elbedawey React-2025.pdf"


import { motion } from "framer-motion";
import MotionCat from "../components/MotionCat";
import GoBackButton from "../components/GoBackButton";
function Contact({ killedTheCat }) {
    return (
        <>
            <div className=" bg-mainBgColor min-h-screen min-w-screen p-6 relative">
                <GoBackButton />
                <h2 className="w-full text-center desktop:text-8xl  text-6xl text-secondryTextColor font-semibold mt-10">Contact</h2>
                <div className="w-full desktop:mt-[5%] mt-[15%] flex items-center justify-center gap-[12%] desktop:text-4xl text-xl text-thirdBgColor font-bold">
                    <motion.div initial={{ scale: 0.2 }} animate={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="flex flex-col justify-center items-center gap-6 hover:cursor-pointer">
                        <a href="https://github.com/Zer0-Dark"><FontAwesomeIcon className="desktop:h-32 h-12 hover:text-secondryTextColor" icon={faGithub}></FontAwesomeIcon></a>
                        <h2>Github</h2>

                    </motion.div>
                    <motion.div initial={{ scale: 0.2 }} animate={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="flex flex-col justify-center items-center gap-4">
                        <a href="https://www.linkedin.com/in/abdulrahman-elbedawey-5b20aa194/"><FontAwesomeIcon className="desktop:h-32 h-12 hover:text-secondryTextColor" icon={faLinkedin} /></a>
                        <h2>Linkedin</h2>
                    </motion.div>
                    <motion.div initial={{ scale: 0.2 }} animate={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="flex flex-col justify-center items-center gap-4">
                        <a href={pdf}><FontAwesomeIcon className="desktop:h-32 h-12 hover:text-secondryTextColor" icon={faFile} /></a>
                        <h2>CV</h2>
                    </motion.div>



                </div>
                <h2 className="    mt-16 desktop:text-2xl text-xl text-thirdBgColor w-full text-center">Abdulrahman.elbedawey@gmail.com</h2>

                {/* <WalkingFooterCat /> */}
            </div>
            <MotionCat killedTheCat={killedTheCat} />
        </>
    )
}

export default Contact