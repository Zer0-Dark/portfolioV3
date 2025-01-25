import ExpertiseTab from './ExpertiseTab'
import expertiesData from '../assets/expertiesData.json'
// import SectionTitle from './SectionTitle'
function ExpertiseSection() {
    //adding the expData
    let expList = expertiesData.map((exp, index) => {
        return (
            <ExpertiseTab key={index} moreinfo1={exp.moreinfo1} link1={exp.link1} name={exp.name} moreinfo={exp.moreinfo} link={exp.link} paragraph={exp.paragraph} />
        )
    }

    )

    return (
        <section id="exp" className="w-full ">

            <div className="flex  w-full h-full flex-col">

                {expList}
            </div>
        </section>
    )
}

export default ExpertiseSection