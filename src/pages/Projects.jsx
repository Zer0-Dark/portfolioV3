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

function Projects({ killedTheCat }) {
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
                <ProjectCard projectTitle={"Templated Website with the figma design provided"} img={smartHomeMokup} img2={smartHomeImg} vid={smartHomeVideo} title="SmartHome" paragraph="This is a project made with React and tailwind css , it's a templated figma design that turned to a visual website with mobile version and with some animations on the hero page , and the animations are made with motion framer" tech="html,css,typescript,react,tailwind,motion-framer" githubLink="https://github.com/Zer0-Dark/smartHome" liveLink="https://meek-muffin-d59c6b.netlify.app/" />

                {/* countriesAPi */}
                <ProjectCard projectTitle={"frontEnd Mentor template with api integration"} img={CounteriesApiMockup} img2={CounteriesApiImg} vid={CounteriesApi} title="CounteriesApi" paragraph="this is an api challange project from frontend Mentor , the figma design provided , it has dark and light mode with a mobile version" tech="html,css,js,react,react-router,tailwind"
                    githubLink="https://github.com/Zer0-Dark/frontEndMentorrest-countries-api-with-color-theme" liveLink="https://front-end-mentorrest-countries-api-with-color-theme-kapo.vercel.app/"
                />

                {/* Tenzies Game */}
                <ProjectCard projectTitle={"Scrimba react course project"} img={tenziesGameMockup} img2={tenziesGameImg} vid={tenziesGameVideo} title="TenziesGame" paragraph="a game made with react as a tutorial from the scrimba react course"
                    tech="html , css ,js , react" githubLink="https://github.com/Zer0-Dark/Tenzies-game?tab=readme-ov-file" liveLink="https://tenzies-game-plum.vercel.app/"
                />

                {/* calculator app */}
                <ProjectCard projectTitle={"this is a frontEnd Mentor challenge project made with vanilla js"} img={calculatorMockup} img2={calculatorImg} vid={calculatorVideo} title="CalculatorAPP" paragraph="this is a challenge project from frontend Mentor ,it's a simple calculator with dark and light mode, also the figma design was provided with the challenge" tech="html,css,js" liveLink="https://abdulrahman-ehab.github.io/SmartHome/" />

            </div>

            <MotionCat killedTheCat={killedTheCat} />
        </div>
    )
}



export default Projects