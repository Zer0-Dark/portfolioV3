import projectImg1 from "../assets/website1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faFigma, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { useState } from "react"

function ProjectCard({ img }) {
    const [openMore, setOpenMore] = useState(false);
    return (
        <>
            <div className=" h-1/2  inline-block relative cursor-pointer rounded-md " onClick={() => setOpenMore(true)}>
                <img className="h-[487px] w-[640px] rounded-md " src={img}></img>
                <h1 className="text-5xl w-full bottom-14 text-center absolute font-bold text-mainTextColor">SmartHome</h1>
                <div className=" absolute bottom-4 w-full flex justify-center gap-12">

                    <FontAwesomeIcon className=" hover:text-secondryTextColor text-3xl text-mainTextColor " icon={faSquareJs} />
                    <FontAwesomeIcon className=" hover:text-secondryTextColor text-3xl text-mainTextColor " icon={faReact} />
                    <FontAwesomeIcon className=" hover:text-secondryTextColor text-3xl text-mainTextColor " icon={faFigma} />
                </div>

            </div>
            {
                openMore &&
                <div className="fixed z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-thirdBgColor ">
                </div>
            }
        </>
    )
}

export default ProjectCard;