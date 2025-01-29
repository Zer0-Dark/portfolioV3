/* eslint-disable react/prop-types */
import ProjectCard from "../components/ProjectCard";

import elmo2ssaMockup from "../assets/optomized/elmo2ssaMokup.png";
import elmo2ssaVideo from "../assets/optomized/Elmo2ssa.mp4"
import elmo2ssaImg from "../assets/optomized/elmo2ssaImg.png"

import smartHomeMokup from "../assets/website1.png";
import smartHomeVideo from "../assets/optomized/Smarthomevid(1).mp4"
import smartHomeImg from '../assets/optomized/SmartHome.png'
import formMokup from "../assets/optomized/multistepformMokup.png";
import formVideo from "../assets/optomized/Multistepform.mp4";
import formImg from "../assets/optomized/multiStepFormImg.png"


import CounteriesApiMockup from "../assets/website2.png";
import CounteriesApi from "../assets/optomized/Countruiesapi.mp4"
import CounteriesApiImg from "../assets/optomized/CountriesApi.png"

import tenziesGameMockup from "../assets/optomized/tenziesGameMockup.png"
import tenziesGameVideo from "../assets/optomized/Tenziesgame.mp4"
import tenziesGameImg from "../assets/optomized/TenziesGame.png"


import calculatorMockup from "../assets/optomized/calculatorMokup.png"
import calculatorImg from "../assets/optomized/calculator.png"
import calculatorVideo from "../assets/optomized/Calculator.mp4";


import MotionCat from "../components/MotionCat";
import GoBackButton from "../components/GoBackButton";
import projectsData from "../data/projects.json"
import { useState } from "react";

function Projects({ killedTheCat }) {

    let projectsList = projectsData.map((project) => <ProjectCard key={project.id} projectTitle={project.projectTitle} img={project.img} img2={project.img2} vid={project.vid} title={project.title} paragraph={project.paragraph} tech={project.tech} githubLink={project.githubLink} liveLink={project.liveLink} figmaLink={project.githubLink} />)
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