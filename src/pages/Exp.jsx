/* eslint-disable react/prop-types */
import GoBackButton from "../components/GoBackButton"
import MotionCat from "../components/MotionCat";
import PageTitle from "../components/PageTitle";
import ProfileCard from "../components/ProfileCard";
import AboutSection from "../components/AboutSection";
import SectionHeader from "../components/SectionHeader";
import ExperienceCard from "../components/ExperienceCard";
import TechStackCard from "../components/TechStackCard";
import { faReact, faNode, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import profileData from "../data/profile.json";

// Icon mapping
const iconMap = {
    faReact: faReact,
    faNode: faNode,
    faFigma: faFigma,
    faDatabase: faDatabase
};

function Exp({ killedTheCat }) {
    const { profile, about, experiences, techStack } = profileData;

    return (
        <div className="min-w-screen min-h-screen bg-mainBgColor p-5">
            <GoBackButton />

            {/* Page Title with ID Badge */}
            <div className="text-center mb-16 relative">
                <PageTitle title="MY BIO" />
                <div className="flex items-center justify-center gap-4 mt-4">
                    <a
                        href="https://github.com/Zer0-Dark"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/5 px-4 py-1 rounded-full border border-white/10 hover:bg-white/10 hover:border-secondryTextColor/50 transition-all duration-300"
                    >
                        <span className="font-game text-xs text-gray-400 tracking-widest hover:text-secondryTextColor transition-colors">ID: ZER0-DARK</span>
                    </a>
                    <a
                        href="/src/assets/Abdulrahman-ehab-12-2025.pdf"
                        download
                        className="inline-flex items-center gap-2 bg-white/5 px-4 py-1 rounded-full border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300"
                    >
                        <span className="text-green-500 text-xs">📄</span>
                        <span className="font-game text-xs text-gray-400 tracking-widest hover:text-green-500 transition-colors">DOWNLOAD CV</span>
                    </a>
                </div>
            </div>

            {/* Profile Section */}
            <section className="flex flex-col desktop:flex-row gap-8 mb-20 items-stretch max-w-6xl mx-auto">
                <ProfileCard
                    image={profile.image}
                    level={profile.level}
                    title={profile.title}
                    location={profile.location}
                />
                <AboutSection
                    description={about.description}
                    additionalInfo={about.additionalInfo}
                />
            </section>

            {/* Professional Experience Section */}
            <section className="mb-20 max-w-6xl mx-auto">
                <SectionHeader
                    title="Professional"
                    highlight="Experience"
                    badge="CAREER_LOG"
                />
                <div className="grid grid-cols-1 gap-5">
                    {experiences.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            title={exp.title}
                            company={exp.company}
                            description={exp.description}
                            status={exp.status}
                            statusColor={exp.statusColor}
                            stack={exp.stack}
                            iconColor={exp.iconColor}
                        />
                    ))}
                </div>
            </section>

            {/* Core Tech Stack Section */}
            <section className="flex-grow pb-12 max-w-6xl mx-auto">
                <SectionHeader
                    title="Core Tech"
                    highlight="Stack"
                    badge="INVENTORY"
                />
                <div className="grid grid-cols-1 desktop:grid-cols-2 gap-5">
                    {techStack.map((tech) => (
                        <TechStackCard
                            key={tech.id}
                            name={tech.name}
                            category={tech.category}
                            description={tech.description}
                            icon={iconMap[tech.icon]}
                            tags={tech.tags}
                        />
                    ))}
                </div>
            </section>


            <MotionCat killedTheCat={killedTheCat} />
            {/* <Footer></Footer> */}
        </div>
    )
}

export default Exp;