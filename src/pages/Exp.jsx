import GoBackButton from "../components/GoBackButton"
import MotionCat from "../components/MotionCat";
import ExpertiseSection from "../components/ExpertiseSection"
function Exp({ killedTheCat }) {
    return (

        <div className="min-w-screen min-h-screen bg-mainBgColor p-5">
            < GoBackButton />
            <h2 className="w-full text-center desktop:text-8xl text-6xl text-secondryTextColor font-semibold mt-10 mb-14">Expertise</h2>
            <ExpertiseSection></ExpertiseSection>
            <MotionCat killedTheCat={killedTheCat} />
        </div >



    )
}

export default Exp;