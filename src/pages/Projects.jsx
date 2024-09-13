import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../components/ProjectCard";
import website1 from "../assets/website1.png";
import website2 from "../assets/website2.png";

function Projects() {
    return (
        <div className="min-w-screen min-h-screen bg-mainBgColor pt-5 pl-4">
            <div className="hover:bg-thirdBgColor hover:text-secondryBgColor text-5xl text-mainTextColor p-4 pl-16 transition duration-300 w-2/5 ">

                <Link to="/" className=" w-full ">
                    <FontAwesomeIcon className="    " icon={faArrowLeft} />
                    <span className="ml-5">GoBack</span>


                </Link>
            </div>

            <h1 className="w-full text-center text-8xl text-secondryTextColor mt-10">PROJECTS</h1>
            <div className="w-[100%] flex flex-row flex-wrap gap-8 justify-center mt-14 pb-12">
                <ProjectCard img={website1} />
                <ProjectCard img={website2} />
                <ProjectCard img={website1} />
                <ProjectCard img={website1} />

            </div>
        </div>
    )
}

export default Projects