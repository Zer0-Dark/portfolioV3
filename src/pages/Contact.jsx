/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope, faArrowRight, faCopy } from "@fortawesome/free-solid-svg-icons";
import pdf from "../assets/Abdulrahman-ehab-12-2025.pdf";
import { motion } from "framer-motion";
import MotionCat from "../components/MotionCat";
import GoBackButton from "../components/GoBackButton";
import Footer from "../components/Footer";

function Contact({ killedTheCat }) {
    const [copied, setCopied] = useState(false);
    const email = "Abdulrahman.elbedawey@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const contactLinks = [
        {
            icon: faGithub,
            title: "Github",
            url: "https://github.com/Zer0-Dark"
        },
        {
            icon: faLinkedin,
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/abdulrahman-elbedawey-5b20aa194/"
        },
        {
            icon: faFile,
            title: "CV / Resume",
            url: pdf,
            download: true
        }
    ];
    // ,
    //         {
    //             icon: faXTwitter,
    //             title: "X (Twitter)",
    //             url: "https://x.com/Zer00dark"
    //         }

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="bg-mainBgColor min-h-screen flex flex-col relative overflow-x-hidden"
        >
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-secondryTextColor opacity-[0.08] rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-600 opacity-[0.08] rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
            </div>

            {/* Header */}
            <header className="p-6 relative z-10">
                <GoBackButton />
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col justify-center items-center px-4 relative z-10 w-full max-w-6xl mx-auto pb-12">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <p className="text-secondryTextColor font-medium tracking-widest uppercase text-sm mb-4">
                        Ready to start a new quest?
                    </p>
                    <h1 className="text-5xl desktop:text-7xl font-bold mb-4 tracking-tight text-white font-game">
                        Contact
                    </h1>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 desktop:grid-cols-2 gap-6 w-full max-w-5xl mb-12">
                    {contactLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            download={link.download}
                            target={!link.download ? "_blank" : undefined}
                            rel={!link.download ? "noopener noreferrer" : undefined}
                            className="group flex items-center p-6 rounded-2xl bg-mainBgColor backdrop-blur-md border border-secondryTextColor/20 hover:border-secondryTextColor transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(111,75,255,0.2)] cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-lg bg-zinc-900/50 flex items-center justify-center text-gray-400 group-hover:text-secondryTextColor transition-colors">
                                <FontAwesomeIcon icon={link.icon} className="text-2xl" />
                            </div>
                            <div className="ml-4 flex-grow">
                                <h3 className="text-lg font-bold text-white group-hover:text-secondryTextColor transition-colors">
                                    {link.title}
                                </h3>
                            </div>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="text-zinc-700 group-hover:text-secondryTextColor group-hover:translate-x-1 transition-all"
                            />
                        </a>
                    ))}
                </div>

                {/* Email Section */}
                <div className="w-full max-w-2xl">
                    <div className="relative group rounded-2xl bg-zinc-900/30 backdrop-blur-md border border-zinc-800 hover:border-secondryTextColor/60 transition-all duration-300 p-2.5 flex items-center justify-between shadow-2xl">
                        <div className="flex items-center gap-4 px-4 overflow-hidden">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-gray-500 group-hover:text-secondryTextColor transition-colors"
                            />
                            <span className="text-gray-300 font-medium truncate select-all">
                                {email}
                            </span>
                        </div>
                        <button
                            onClick={copyEmail}
                            className="bg-secondryTextColor hover:bg-secondryTextColor/90 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 active:scale-95 shadow-lg cursor-pointer"
                        >
                            <span>{copied ? 'Copied!' : 'Copy'}</span>
                            <FontAwesomeIcon icon={faCopy} className="text-sm" />
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
            <MotionCat killedTheCat={killedTheCat} />
        </motion.div>
    );
}

export default Contact;