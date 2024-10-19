import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../components/ProjectCard";

import smartHomeMokup from "../assets/website1.png";
import smartHomeVideo from "../assets/optomized/Smarthomevid(1).mp4"
import smartHomeImg from '../assets/optomized/SmartHome.png'


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

function Projects() {
    return (
        <div className="min-w-screen min-h-screen bg-mainBgColor p-5">
            <div className="hover:bg-thirdBgColor hover:text-secondryBgColor text-5xl text-mainTextColor p-4 pl-16 transition duration-300 w-[35%] ">

                <Link to="/" className=" w-full  cursor-pointer ">
                    <FontAwesomeIcon className="    " icon={faArrowLeft} />
                    <span className="ml-5">GoBack</span>


                </Link>
            </div>

            <h1 className="w-full text-center text-8xl text-secondryTextColor font-semibold mt-10">PROJECTS</h1>
            <div className="w-[100%] flex flex-row flex-wrap gap-8 justify-center mt-14 pb-12">

                {/* project one (smarhHome) */}
                <ProjectCard img={smartHomeMokup} img2={smartHomeImg} vid={smartHomeVideo} title="SmartHome" paragraph="this project bla bla dsa aadsasaddas da as as das dadd sa das dasdas dsa da dsa dasd asd as das dsdd ddsadsadsa saddasds asaddsa" tech="html,css,typescript,React,TailWind,motion-framer" githubLink="https://github.com/Zer0-Dark/smartHome" liveLink="https://meek-muffin-d59c6b.netlify.app/" />

                {/* countriesAPi */}
                <ProjectCard img={CounteriesApiMockup} img2={CounteriesApiImg} vid={CounteriesApi} title="CounteriesApi" paragraph="this is an api project" tech="html,css,react,react router"
                    githubLink="https://github.com/Zer0-Dark/frontEndMentorrest-countries-api-with-color-theme" liveLink="https://front-end-mentorrest-countries-api-with-color-theme-kapo.vercel.app/"
                />

                {/* Tenzies Game */}
                <ProjectCard img={tenziesGameMockup} img2={tenziesGameImg} vid={tenziesGameVideo} title="TenziesGame" paragraph="this is tenzies game"
                    tech="html , css ,js , react" githubLink="https://github.com/Zer0-Dark/Tenzies-game?tab=readme-ov-file" liveLink="https://tenzies-game-plum.vercel.app/"
                />

                {/* calculator app */}
                <ProjectCard img={calculatorMockup} img2={calculatorImg} vid={calculatorVideo} title="CalculatorAPp" paragraph="this project bla bla dsa aadsasaddas da as as das dadd sa das dasdas dsa da dsa dasd asd as das dsdd ddsadsadsa saddasds asaddsa" tech="html,css,js" liveLink="https://abdulrahman-ehab.github.io/SmartHome/" />

            </div>

            <MotionCat />
        </div>
    )
}



export default Projects