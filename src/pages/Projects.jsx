/* eslint-disable react/prop-types */
import ProjectCard from "../components/ProjectCard";


import MotionCat from "../components/MotionCat";
import GoBackButton from "../components/GoBackButton";
import PageTitle from "../components/PageTitle";
import projectsData from "../data/projects.json"
import Footer from "../components/Footer";


function Projects({ killedTheCat }) {

    let projectsList = projectsData.map((project) => <ProjectCard key={project.id} projectTitle={project.projectTitle} img={project.img} img2={project.img2} vid={project.vid} title={project.title} paragraph={project.paragraph} tech={project.tech} githubLink={project.githubLink} liveLink={project.liveLink} figmaLink={project.figmaLink} />)
    return (
        <div className="min-w-screen min-h-screen bg-mainBgColor p-5">
            <GoBackButton />

            <PageTitle title="PROJECTS" />
            <div className="desktop:w-[100%]  flex flex-row flex-wrap gap-8 justify-center pb-12">


                {projectsList}
            </div>
            {/* <Footer></Footer> */}
            <MotionCat killedTheCat={killedTheCat} />

        </div>
    )
}



export default Projects