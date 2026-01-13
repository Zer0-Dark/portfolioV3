/* eslint-disable react/prop-types */
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEye, faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faCss3Alt, faJs, faFigma, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faFileCode as faFileCodeSolid } from '@fortawesome/free-solid-svg-icons';

const ProjectPopup = ({ isOpen, onClose, title, projectTitle, paragraph, vid, tech, liveLink, githubLink, figmaLink }) => {

    // Map tech strings to icons/names
    const getTechIcon = (techName) => {
        switch (techName) {
            case 'react': return { icon: faReact, color: 'text-blue-400', name: 'React' };
            case 'css': return { icon: faCss3Alt, color: 'text-cyan-400', name: 'CSS' };
            case 'js': return { icon: faJs, color: 'text-yellow-400', name: 'JavaScript' };
            case 'html': return { icon: faHtml5, color: 'text-orange-500', name: 'HTML' };
            case 'typescript': return { icon: faFileCodeSolid, color: 'text-blue-600', name: 'TypeScript' };
            case 'tailwind': return { icon: faCss3Alt, color: 'text-cyan-300', name: 'Tailwind' }; // Using CSS icon as placeholder if no specific tailwind
            case 'motion-framer': return { icon: faFileCodeSolid, color: 'text-purple-400', name: 'Framer Motion' };
            case 'react-router': return { icon: faFileCodeSolid, color: 'text-red-400', name: 'React Router' };
            case 'figma': return { icon: faFigma, color: 'text-pink-400', name: 'Figma' };
            default: return { icon: faFileCodeSolid, color: 'text-gray-300', name: techName };
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-black/80 overflow-y-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-[1500px] bg-mainBgColor rounded-2xl shadow-2xl flex flex-col desktop:flex-row overflow-hidden border border-secondryTextColor/30"
                    >
                        {/* Mobile Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 desktop:hidden bg-zinc-900 text-white p-2 rounded-full hover:bg-zinc-800 transition border border-zinc-700 cursor-pointer"
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                        {/* Left Side: Media & Tech */}
                        <div className="w-full desktop:w-7/12 p-6 desktop:p-8 flex flex-col gap-6 bg-zinc-900/50 border-b desktop:border-b-0 desktop:border-r border-zinc-800">
                            <div className="flex-1 flex flex-col gap-6">
                                <div className="bg-black rounded-lg shadow-inner overflow-hidden border border-zinc-700 relative group aspect-[16/10]">
                                    {vid ? (
                                        <video
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            controls
                                            src={vid}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-500">No Video Available</div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-mainBgColor/80 to-transparent opacity-40 pointer-events-none"></div>
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-4">
                                        {tech && Array.isArray(tech) ? (
                                            tech.length > 0 ? (
                                                tech.map((t, index) => {
                                                    const { icon, color, name } = getTechIcon(t);
                                                    return (
                                                        <div key={index} className="flex items-center gap-2 bg-zinc-800/80 px-3 py-2 rounded-lg border border-zinc-700 hover:border-secondryTextColor/50 transition group">
                                                            <FontAwesomeIcon icon={icon} className={`text-xl ${color} group-hover:scale-110 transition-transform`} />
                                                            <span className="text-xs font-medium text-gray-300">{name}</span>
                                                        </div>
                                                    );
                                                })
                                            ) : (
                                                <p className="text-xs text-gray-500">No technologies listed</p>
                                            )
                                        ) : (
                                            <p className="text-xs text-gray-500">Tech data unavailable</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Details & Actions */}
                        <div className="w-full desktop:w-5/12 p-6 desktop:p-8 flex flex-col relative bg-mainBgColor">
                            <button
                                onClick={onClose}
                                className="hidden desktop:block absolute top-6 right-6 text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-full p-2 transition cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-lg w-5 h-5 flex items-center justify-center" />
                            </button>

                            <div className="mt-2 mb-6">
                                <h2 className="text-2xl desktop:text-3xl font-bold text-secondryTextColor mb-2 tracking-tight">{title}</h2>
                                <h3 className="text-sm text-zinc-400 mb-2">{projectTitle}</h3>
                                <div className="h-1 w-20 bg-gradient-to-r from-secondryTextColor to-purple-800 rounded"></div>
                            </div>

                            <div className="space-y-8 flex-1 flex flex-col">
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">About Project</h3>
                                    <div className="text-mainTextColor text-sm leading-relaxed space-y-4 max-h-[200px] overflow-y-auto pr-2">
                                        <p>{paragraph}</p>
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 flex flex-col gap-4">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Actions</h3>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        {liveLink && (
                                            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-secondryTextColor text-white rounded-full font-bold text-sm hover:bg-purple-600 transition shadow-[0_0_15px_rgba(111,75,255,0.4)] hover:shadow-[0_0_25px_rgba(111,75,255,0.6)] transform hover:-translate-y-0.5 cursor-pointer">
                                                <FontAwesomeIcon icon={faEye} />
                                                <span>Live View</span>
                                            </a>
                                        )}
                                        {githubLink && (
                                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-transparent border-2 border-secondryTextColor text-secondryTextColor rounded-full font-bold text-sm hover:bg-secondryTextColor/10 transition shadow-[0_0_10px_rgba(111,75,255,0.2)] hover:shadow-[0_0_15px_rgba(111,75,255,0.4)] transform hover:-translate-y-0.5 cursor-pointer">
                                                <FontAwesomeIcon icon={faCode} />
                                                <span>Source Code</span>
                                            </a>
                                        )}
                                        {figmaLink && (
                                            <a href={figmaLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-transparent border-2 border-pink-500 text-pink-500 rounded-full font-bold text-sm hover:bg-pink-500/10 transition transform hover:-translate-y-0.5 cursor-pointer">
                                                <FontAwesomeIcon icon={faFigma} />
                                                <span>Figma</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectPopup;
