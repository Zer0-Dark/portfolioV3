/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";


import MotionCat from "../components/MotionCat";
import GoBackButton from "../components/GoBackButton";
import PageTitle from "../components/PageTitle";
import projectsData from "../data/projects.json"
import Footer from "../components/Footer";


function Projects({ killedTheCat }) {

    let projectsList = projectsData.map((project) => <ProjectCard key={project.id} projectTitle={project.projectTitle} img={project.img} img2={project.img2} vid={project.vid} title={project.title} paragraph={project.paragraph} tech={project.tech} githubLink={project.githubLink} liveLink={project.liveLink} figmaLink={project.figmaLink} />)
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="min-w-screen min-h-screen bg-mainBgColor pt-5 overflow-x-hidden max-w-screen relative"
        >
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-secondryTextColor opacity-[0.08] rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-600 opacity-[0.08] rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
            </div>

            <div className="px-5 relative z-10">
                <GoBackButton />

                <PageTitle title="PROJECTS" />
                <div className="desktop:w-[100%]  flex flex-row flex-wrap gap-8 justify-center pb-12">


                    {projectsList}
                </div>
            </div>
            <Footer />
            <MotionCat killedTheCat={killedTheCat} />

        </motion.div>
    )
}



export default Projects