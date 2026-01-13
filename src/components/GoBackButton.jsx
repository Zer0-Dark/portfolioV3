import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function GoBackButton() {
    return (
        <Link
            to="/"
            className="inline-flex text-3xl items-center gap-3 px-6 py-2.5 rounded-full text-sm font-medium text-white bg-black/40 border border-secondryTextColor hover:bg-black/60 transition-all duration-300 shadow-[0_0_10px_rgba(111,75,255,0.2)] hover:shadow-[0_0_20px_rgba(111,75,255,0.4)] group cursor-pointer"
        >
            <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-2xl group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-2xl">Go Back</span>
        </Link>
    )
}

export default GoBackButton