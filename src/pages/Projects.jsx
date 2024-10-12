import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../components/ProjectCard";
import website1 from "../assets/website1.png";
import website2 from "../assets/website2.png";
import vid1 from "../assets/optomized/Adviceapi.mp4";
import vid2 from "../assets/optomized/Calculator.mp4";
import vid3 from "../assets/optomized/Calculator.mp4";
import Transition from "../components/Transition";

function Projects() {
    return (
        <div className="min-w-screen min-h-screen bg-mainBgColor pt-5 pl-4">
            <div className="hover:bg-thirdBgColor hover:text-secondryBgColor text-5xl text-mainTextColor p-4 pl-16 transition duration-300 w-[35%] ">

                <Link to="/" className=" w-full  cursor-pointer ">
                    <FontAwesomeIcon className="    " icon={faArrowLeft} />
                    <span className="ml-5">GoBack</span>


                </Link>
            </div>

            <h1 className="w-full text-center text-8xl text-secondryTextColor font-semibold mt-10">PROJECTS</h1>
            <div className="w-[100%] flex flex-row flex-wrap gap-8 justify-center mt-14 pb-12">
                <ProjectCard img={website1} vid={vid1} title="SmartHome" />
                <ProjectCard img={website2} vid={vid2} title="CounteriesApi" />
                <ProjectCard img={website1} vid={vid3} title="TenziesGame" />
                <ProjectCard img={website1} vid={vid2} title="" />

            </div>
        </div>
    )
}



export default Projects;