/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faA, faArrowDown, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// import Magnet from './Magnet';
function ExpertiseTab({ name, paragraph, moreinfo, link, moreinfo1, link1 }) {


    let [showsection, setShowSection] = useState(false);
    let variants = {
        hidden: { opacity: 0, y: -100, x: 250, scale: 0 },
        visible: { opacity: 1, y: 0, x: 0, scale: 1 }
    }

    return (


        <motion.div


            className="w-full flex justify-center flex-col items-center mb-8 overflow-hidden " >
            <motion.div
                whileTap={{ scale: 0.99 }}
                onClick={() => { setShowSection((prev) => !prev) }}
                className=" cursor-pointer overflow-hidden desktop:w-[60%] w-[80%]  font-bold desktop:text-2xl  text-xl bg-thirdBgColor p-4 rounded-t-lg  flex  justify-between items-center ">
                <h2>{name}</h2>
                <div>
                    {!showsection && <FontAwesomeIcon icon={faArrowDown} />}
                    {showsection && <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>}
                </div>
            </motion.div>
            <AnimatePresence mode="popLayout">
                {
                    showsection &&
                    <motion.div
                        className={`desktop:w-[60%] w-[80%] bg-ForuthBgColor text-lg  bg-grey2 p-4 text-white  rounded-b-lg   `}
                        variants={variants}
                        initial="hidden"
                        animate={showsection == true ? "visible" : "hidden"}
                        exit="hidden"
                        transition={{ type: "spring", stiffness: 300, damping: 24, duration: 0.5 }}


                    >
                        {paragraph}

                        {moreinfo && <motion.div
                            initial={{ y: 250, scale: 0.2 }}
                            animate={{ y: 0, scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", duration: 0.5 }}
                            className="desktop:flex desktop:justify-between test text-linkColor   bg-none  ">
                            <a target="_blank" className="  hover:text-aqua test  bg-none   desktop:text-right text-right mt-2 " href={link}>
                                {moreinfo}
                            </a>
                            {moreinfo1 &&
                                <a target="_blank" className=" hover:text-aqua test  bg-none  desktop:text-left text-left mt-2 " href={link1}>
                                    {moreinfo1}
                                </a>
                            }

                        </motion.div>
                        }
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div >


    )
}

export default ExpertiseTab;