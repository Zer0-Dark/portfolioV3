import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function GoBackButton() {
    return (
        <div className="hover:bg-thirdBgColor rounded-md hover:text-secondryBgColor desktop:text-5xl bigDesktop:text-5xl text-4xl text-mainTextColor p-4 pl-16 transition duration-300 w-full desktop:w-[35%] ">

            <Link to="/" className=" w-full  cursor-pointer ">
                <FontAwesomeIcon className="    " icon={faArrowLeft} />
                <span className="desktop:ml-5 ml-5">GoBack</span>


            </Link>

        </div>
    )
}

export default GoBackButton