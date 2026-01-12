/* eslint-disable react/prop-types */

import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faReact, faFigma, faSquareJs, faJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faEye, faCode, faRectangleXmark, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import ProjectPopup from "./ProjectPopup";
function ProjectCard({ img, img2, vid, title, paragraph, tech, liveLink, githubLink, figmaLink, projectTitle }) {
    const [openMore, setOpenMore] = useState(false);
    const [hoverd, setHoverd] = useState(false);
    return (
        <>
            <motion.div
                initial={{ scale: 0.3 }} whileHover={{ scaleY: 1.05 }} animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoverd(true)}
                onHoverEnd={() => setHoverd(false)}
                onTapStart={() => setHoverd(true)}
                onTapEnd={() => setHoverd(false)}
                className=" h-1/2  inline-block relative cursor-pointer rounded-md overflow-hidden " onClick={() => setOpenMore(true)}>
                <img className={`desktop:h-[427px] desktop:w-[580px] w-full transition duration-500 rounded-md ${hoverd ? "blur-sm" : "blur-0"}`} src={img}></img>

                <AnimatePresence mode="wait">
                    {
                        hoverd &&
                        <motion.div
                            className=" overflow-hidden  absolute bottom-5    w-full h-fit"
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 60, opacity: 0 }}
                        >

                            <h1 className="desktop:text-4xl text-2xl w-full  text-center  font-bold text-mainTextColor ">{title}</h1>
                            <div className="  w-full flex justify-center desktop:gap-12 gap-5 desktop:mt-4 mt-1">
                                {
                                    tech.includes("js") &&
                                    <FontAwesomeIcon className=" hover:text-secondryTextColor text-3xl text-mainTextColor " icon={faSquareJs} />

                                }
                                {
                                    tech.includes("react") &&
                                    <FontAwesomeIcon className=" hover:text-secondryTextColor text-3xl text-mainTextColor " icon={faReact} />

                                }
                                {
                                    tech.includes("figma") &&
                                    <FontAwesomeIcon className=" hover:text-secondryTextColor text-3xl text-mainTextColor " icon={faFigma} />

                                }
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>

                <AnimatePresence mode='popLayout'>
                    {hoverd &&
                        <motion.div
                            initial={{ scaleY: 0, opacity: 0 }}
                            animate={{ scaleY: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            exit={{ scaleY: 0, opacity: 0, height: 0 }}
                            className=" absolute top-[40%] left-1/2 w-2/3 ">
                            <video className="-translate-x-1/2 -translate-y-1/2 z-10 " autoPlay muted loop playsInline >
                                <source src={vid} type="video/mp4" />
                            </video>
                        </motion.div>

                    }
                </AnimatePresence>
            </motion.div>

            <ProjectPopup
                isOpen={openMore}
                onClose={() => setOpenMore(false)}
                title={title}
                projectTitle={projectTitle}
                paragraph={paragraph}
                vid={vid}
                tech={typeof tech === 'string' ? tech.split(',') : tech}
                liveLink={liveLink}
                githubLink={githubLink}
                figmaLink={figmaLink}
            />
        </>
    )
}

export default ProjectCard;