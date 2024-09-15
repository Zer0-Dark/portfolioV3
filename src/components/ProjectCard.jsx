
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faFigma, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
function ProjectCard({ img, vid, title, paragraph, tech, liveLink, githubLink, figmaLink }) {
    const [openMore, setOpenMore] = useState(false);
    const [hoverd, setHoverd] = useState(false);
    return (
        <>
            <motion.div
                initial={{ scaleY: 1 }} whileHover={{ scaleY: 1.05 }}
                onHoverStart={() => setHoverd(true)}
                onHoverEnd={() => setHoverd(false)}
                className=" h-1/2  inline-block relative cursor-pointer rounded-md overflow-hidden " onClick={() => setOpenMore(true)}>
                <img className={`h-[487px] w-[640px] transition duration-500 rounded-md ${hoverd ? "blur-sm" : "blur-0"}`} src={img}></img>

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

                                <FontAwesomeIcon className=" hover:text-secondryTextColor text-3xl text-mainTextColor " icon={faSquareJs} />
                                <FontAwesomeIcon className=" hover:text-secondryTextColor text-3xl text-mainTextColor " icon={faReact} />
                                {/* <FontAwesomeIcon className=" hover:text-secondryTextColor text-3xl text-mainTextColor " icon={faFigma} /> */}
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


            {
                openMore &&
                <div className="fixed z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-thirdBgColor ">
                </div>
            }
        </>
    )
}

export default ProjectCard;