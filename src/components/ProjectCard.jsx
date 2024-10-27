
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
                className=" h-1/2  inline-block relative cursor-pointer rounded-md overflow-hidden " onClick={() => setOpenMore(true)}>
                <img className={`h-[427px] w-[580px] transition duration-500 rounded-md ${hoverd ? "blur-sm" : "blur-0"}`} src={img}></img>

                <AnimatePresence mode="wait">
                    {
                        hoverd &&
                        <motion.div
                            className=" overflow-hidden  absolute bottom-5    w-full h-fit"
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 60, opacity: 0 }}
                        >

                            <h1 className="text-5xl w-full  text-center  font-bold text-mainTextColor">{title}</h1>
                            <div className="  w-full flex justify-center gap-12 mt-4">
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
                            <video className="-translate-x-1/2 -translate-y-1/2 " autoPlay muted loop playsInline >
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
                        className="fixed flex p-6  flex-col items-center  z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-thirdBgColor rounded-md ">
                        <div className='absolute top-5 right-5 text-6xl  cursor-pointer' onClick={() => setOpenMore(false)}>
                            <FontAwesomeIcon icon={faRectangleXmark}></FontAwesomeIcon>
                        </div>
                        <div className=' absolute top-10 left-20 text-6xl space-y-6 text-secondryTextColor'>
                            {
                                figmaLink &&
                                <a href={figmaLink} target='_blank' className='flex flex-col-reverse justify-center items-center cursor-pointer'><h2 className='text-xl text-black font-bold'>Figma design</h2><FontAwesomeIcon icon={faFigma} /></a>
                            }
                            <a href={liveLink} target='_blank' className='flex flex-col-reverse justify-center items-center cursor-pointer'> <h2 className='text-xl text-black font-bold'>Live View</h2> <FontAwesomeIcon icon={faEye} />  </a>
                            <a href={githubLink} target='_blank' className='flex flex-col-reverse justify-center items-center cursor-pointer'> <h2 className='text-xl text-black font-bold'> Code</h2><FontAwesomeIcon icon={faCode} /></a>

                        </div>
                        <img src={img2} className=' h-[50%]   mb-6' alt='test'></img>

                        <div className='w-full'>
                            <h1 className='text-5xl text-center mb-6 text-secondryTextColor font-bold'>
                                {title}
                            </h1>
                            <div className='flex flex-row-reverse w-full  '>
                                <div className='w-1/2 pl-8 flex flex-col items-center  text-center'>
                                    <h2 className='text-3xl mb-2 font-bold'>PROJECT DESCRIPSTION</h2>
                                    <p className=' font-bold'>{paragraph} </p>
                                </div>

                                <div className='w-1/2 mr-8 flex flex-col items-center  border-r-4 border-white'>

                                    <div className='text-center font-bold '>
                                        <h2 className='text-2xl  '>PROJECT TITLE</h2>
                                        <p>{projectTitle}</p>
                                    </div>

                                    <div className='w-full h-1 bg-white my-4'></div>
                                    <div className=''>
                                        <h2 className='text-2xl font-bold text-center'>TECNOLOGYS USED</h2>
                                        <div className='flex gap-6 mt-2 text-secondryTextColor justify-center text-5xl'>

                                            {
                                                tech.includes("html") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                                                    <p className='text-sm'>HTML</p>
                                                </div>
                                            }

                                            {
                                                tech.includes("css") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>
                                                    <p className='text-sm'>CSS</p>
                                                </div>
                                            }

                                            {
                                                tech.includes("js") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                                                    <p className='text-sm'>JavaScript</p>
                                                </div>
                                            }
                                            {
                                                tech.includes("typescript") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon>
                                                    <p className='text-sm'>TypeScript</p>
                                                </div>
                                            }

                                            {
                                                tech.includes("react") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                                                    <p className='text-sm'>React</p>
                                                </div>
                                            }

                                            {
                                                tech.includes("figma") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faFigma}></FontAwesomeIcon>
                                                    <p className='text-sm'>Figma</p>
                                                </div>
                                            }
                                            {
                                                tech.includes("tailwind") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon>
                                                    <p className='text-sm'>tailWind</p>
                                                </div>
                                            }
                                            {
                                                tech.includes("motion-framer") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon>
                                                    <p className='text-sm'>motion-framer</p>
                                                </div>
                                            }
                                            {
                                                tech.includes("react-router") &&
                                                <div className='flex flex-col justify-center items-center'>
                                                    <FontAwesomeIcon icon={faFileCode}></FontAwesomeIcon>
                                                    <p className='text-sm'>react-router</p>
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