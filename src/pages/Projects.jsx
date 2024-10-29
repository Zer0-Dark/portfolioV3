import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../components/ProjectCard";

import elmo2ssaMockup from "../assets/optomized/elmo2ssaMokup.png";
import elmo2ssaVideo from "../assets/optomized/Elmo2ssa.mp4"
import elmo2ssaImg from "../assets/optomized/elmo2ssaImg.png"

import smartHomeMokup from "../assets/website1.png";
import smartHomeVideo from "../assets/optomized/Smarthomevid(1).mp4"
import smartHomeImg from '../assets/optomized/SmartHome.png'

import formMokup from "../assets/optomized/multistepformMokup.png";
import formVideo from "../assets/optomized/multistepform.mp4";
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

function Projects({ killedTheCat }) {
    return (
        <div className="min-w-screen min-h-screen bg-mainBgColor p-5">
            <GoBackButton />

            <h2 className="w-full text-center desktop:text-8xl text-6xl text-secondryTextColor font-semibold mt-10">PROJECTS</h2>
            <div className="desktop:w-[100%]  flex flex-row flex-wrap gap-8 justify-center mt-14 pb-12">


                {/* project zero elmo2ssa */}
                <ProjectCard projectTitle={"A freelance job website i also made the figma design (you see it in the link above)"} img={elmo2ssaMockup} img2={elmo2ssaImg} vid={elmo2ssaVideo} title="Mahmoud darwish charity" paragraph="This is a Freelancer job i made , i designed the UI at figma then the frontend side i used react , tailwind , motion framer and react router , also in the backend i used firebase to make the user able to change some of the ui elements using the dashboard " tech="react,tailwind,firebase,react-router,motion-framer,figma" githubLink="https://github.com/Zer0-Dark/elmo2ssa" liveLink="https://mahmoud-fahmy-darwish.netlify.app/" figmaLink={"https://www.figma.com/design/CD1SDXE9hKnDocGDMYP9QT/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%AF%D8%B1%D9%88%D9%8A%D8%B4?node-id=0-1&t=YXo87TqAxLZlXDZG-1"} />

                {/* project one (smarhHome) */}
                <ProjectCard projectTitle={"Templated Website with the figma design provided"} img={smartHomeMokup} img2={smartHomeImg} vid={smartHomeVideo} title="SmartHome" paragraph="This is a project made with React and tailwind css , it's a templated figma design that turned to a visual website with mobile version and with some animations on the hero page , and the animations are made with motion framer" tech="html,css,typescript,react,tailwind,motion-framer" githubLink="https://github.com/Zer0-Dark/smartHome" liveLink="https://meek-muffin-d59c6b.netlify.app/" />

                {/* project two (multistep form) */}
                <ProjectCard projectTitle={"A challenge in fromend mentor website"} img={formMokup} img2={formImg} vid={formVideo} title="Multistep form" paragraph="This a Multi step form challange on frontend mentor that i sloved , i did it using react , tailwind without using react router" tech="react,tailwind " githubLink="https://github.com/Zer0-Dark/multiStepForm-FrontendMentor" liveLink="https://inspiring-naiad-9e3e3d.netlify.app/" />

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