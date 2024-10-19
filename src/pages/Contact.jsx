import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faFile } from "@fortawesome/free-solid-svg-icons";
import githubIcon from "../assets/github-brands-solid.svg"
import linkedinIcon from "../assets/linkedin-brands-solid.svg"
import cv from "../assets/file-lines-solid.svg"

import { motion } from "framer-motion";
import MotionCat from "../components/MotionCat";
function Contact() {
    return (
        <>
            <div className=" bg-mainBgColor min-h-screen min-w-screen p-6 relative">
                <div className="hover:bg-thirdBgColor hover:text-secondryBgColor text-5xl text-mainTextColor p-4 pl-16 transition duration-300 w-[35%] ">

                    <Link to="/" className=" w-full  cursor-pointer ">
                        <FontAwesomeIcon className="    " icon={faArrowLeft} />
                        <span className="ml-5">GoBack</span>


                    </Link>
                </div>
                <h2 className="w-full text-center text-8xl text-secondryTextColor font-semibold mt-10">Contact</h2>
                <div className="w-full mt-[5%] flex items-center justify-center gap-[12%] text-4xl text-thirdBgColor font-bold">
                    <motion.div initial={{ scale: 0.2 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="flex flex-col justify-center items-center gap-6 hover:cursor-pointer">
                        <a><FontAwesomeIcon className="h-48 hover:text-secondryTextColor" icon={faGithub}></FontAwesomeIcon></a>
                        <h2>Github</h2>

                    </motion.div>
                    <motion.div initial={{ scale: 0.2 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="flex flex-col justify-center items-center gap-4">
                        <a href="https://www.linkedin.com/in/abdulrahman-ehab/"><FontAwesomeIcon className="h-48 hover:text-secondryTextColor" icon={faLinkedin} /></a>
                        <h2>Linkedin</h2>
                    </motion.div>
                    <motion.div initial={{ scale: 0.2 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="flex flex-col justify-center items-center gap-4">
                        <a><FontAwesomeIcon className="h-48 hover:text-secondryTextColor" icon={faFile} /></a>
                        <h2>CV</h2>
                    </motion.div>



                </div>
                <h2 className="    mt-16 text-2xl text-white w-full text-center">elbedawey11@gamil.com</h2>

                {/* <WalkingFooterCat /> */}
            </div>
            <MotionCat />
        </>
    )
}

export default Contact