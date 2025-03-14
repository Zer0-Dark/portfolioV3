/* eslint-disable react/prop-types */

import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faReact, faFigma, faSquareJs, faJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faEye, faCode, faRectangleXmark, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
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
                onTabEnd={() => setHoverd(false)}
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

            <AnimatePresence>
                {
                    openMore &&
                    <motion.div
                        initial={{ scale: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, x: "-50%", y: "-50%" }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed flex desktop:p-6 p-2  flex-col items-center  z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 desktop:w-[90%] h-full w-full desktop:h-[90%] bg-mainTextColor rounded-md ">
                        <div className='absolute desktop:top-5 bottom-2 desktop:right-5 desktop:text-6xl text-5xl  cursor-pointer' onClick={() => setOpenMore(false)}>
                            <FontAwesomeIcon icon={faRectangleXmark}></FontAwesomeIcon>
                        </div>
                        <div className=' desktop:absolute top-10 left-20 flex desktop:block justify-center items-center text-4xl w-full desktop:w-fit desktop:space-x-0 space-x-5 order-2    desktop:text-6xl desktop:space-y-6 text-secondryTextColor'>
                            {
                                figmaLink &&
                                <a href={figmaLink} target='_blank' className='flex flex-col-reverse justify-center items-center cursor-pointer'><h2 className='desktop:text-xl text-sm text-black font-bold'>Figma design</h2><FontAwesomeIcon icon={faFigma} /></a>
                            }
                            <a href={liveLink} target='_blank' className='flex flex-col-reverse justify-center items-center cursor-pointer'> <h2 className='desktop:text-xl text-sm text-black font-bold'>Live View</h2> <FontAwesomeIcon icon={faEye} />  </a>
                            <a href={githubLink} target='_blank' className='flex flex-col-reverse justify-center items-center cursor-pointer'> <h2 className='desktop:text-xl text-sm text-black font-bold'> Code</h2><FontAwesomeIcon icon={faCode} /></a>

                        </div>
                        <img src={img2} className=' desktop:h-[50%] order-1 desktop:mt-0 max-h-[28%] desktop:max-h-full rounded-md mb-6 border-2 border-black ' alt='test'></img>

                        <div className='w-full order-3'>
                            <h1 className='desktop:text-5xl text-2xl desktop:mt-0 my-2 text-center desktop:mb-6 text-secondryTextColor font-bold'>
                                {title}
                            </h1>
                            <div className='flex desktop:flex-row-reverse flex-col w-full  '>
                                <div className='desktop:w-1/2 desktop:pl-8 flex flex-col items-center  text-center border-b-4 desktop:mb-0 desktop:pb-0 pb-2 mb-2  border-white desktop:border-0'>
                                    <h2 className='desktop:text-3xl desktop:mb-2 text-xl font-bold'>PROJECT DESCRIPSTION</h2>
                                    <p className=' font-bold'>{paragraph} </p>
                                </div>

                                <div className='desktop:w-1/2 desktop:mr-8 flex flex-col items-center  desktop:border-r-4 border-white'>

                                    <div className='text-center font-bold '>
                                        <h2 className='desktop:text-2xl  '>PROJECT TITLE</h2>
                                        <p className='desktop:px-20'>{projectTitle}</p>
                                    </div>

                                    <div className='w-full h-1 bg-white my-2'></div>
                                    <div className=''>
                                        <h2 className='desktop:text-2xl font-bold text-center'>TECNOLOGYS USED</h2>
                                        <div className='flex gap-6 mt-2 text-secondryTextColor justify-center desktop:text-5xl'>

                                            {
                                                tech.includes("html") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                                                    <p className='desktop:text-sm text-xs'>HTML</p>
                                                </div>
                                            }

                                            {
                                                tech.includes("css") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                                                    <p className='desktop:text-sm text-xs'>CSS</p>
                                                </div>
                                            }

                                            {
                                                tech.includes("js") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                                                    <p className='desktop:text-sm text-xs'>JavaScript</p>
                                                </div>
                                            }
                                            {
                                                tech.includes("typescript") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon>
                                                    <p className='desktop:text-sm text-xs'>TypeScript</p>
                                                </div>
                                            }

                                            {
                                                tech.includes("react") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                                                    <p className='desktop:text-sm text-xs'>React</p>
                                                </div>
                                            }

                                            {
                                                tech.includes("figma") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faFigma}></FontAwesomeIcon>
                                                    <p className='desktop:text-sm text-xs'>Figma</p>
                                                </div>
                                            }
                                            {
                                                tech.includes("tailwind") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon>
                                                    <p className='desktop:text-sm text-xs'>Tailwind</p>
                                                </div>
                                            }
                                            {
                                                tech.includes("motion-framer") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon>
                                                    <p className='desktop:text-sm text-xs'>motion-framer</p>
                                                </div>
                                            }
                                            {
                                                tech.includes("react-router") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon>
                                                    <p className='desktop:text-sm text-xs'>react-router</p>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default ProjectCard;