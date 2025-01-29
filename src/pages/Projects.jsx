/* eslint-disable react/prop-types */
import ProjectCard from "../components/ProjectCard";


import MotionCat from "../components/MotionCat";
import GoBackButton from "../components/GoBackButton";
import projectsData from "../data/projects.json"


function Projects({ killedTheCat }) {

    let projectsList = projectsData.map((project) => <ProjectCard key={project.id} projectTitle={project.projectTitle} img={project.img} img2={project.img2} vid={project.vid} title={project.title} paragraph={project.paragraph} tech={project.tech} githubLink={project.githubLink} liveLink={project.liveLink} figmaLink={project.figmaLink} />)
    return (
        <div className="min-w-screen min-h-screen bg-mainBgColor p-5">
            <GoBackButton />

            <h2 className="w-full text-center desktop:text-8xl text-6xl text-secondryTextColor font-semibold mt-10 mb-14 ">PROJECTS</h2>
            <div className="desktop:w-[100%]  flex flex-row flex-wrap gap-8 justify-center pb-12">


                {projectsList}
            </div>

            <MotionCat killedTheCat={killedTheCat} />
        </div>
    )
}



export default Projects