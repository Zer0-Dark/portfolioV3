/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function AboutSection({ description, additionalInfo }) {
    return (
        <div className="w-full desktop:w-2/3">
            <div className="h-full bg-ForuthBgColor border border-white/10 rounded-lg p-8 relative overflow-hidden shadow-lg flex flex-col justify-center">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="text-9xl">💻</span>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-secondryTextColor/10 rounded text-secondryTextColor">
                            <FontAwesomeIcon icon={faUserCircle} className="text-xl" />
                        </div>
                        <h2 className="font-game text-2xl text-mainTextColor tracking-wide uppercase font-bold">About Me</h2>
                    </div>

                    <p className="font-sans text-lg text-gray-300 leading-relaxed mb-6">
                        <span className="text-secondryTextColor font-bold">Hello World.</span> {description}
                    </p>

                    {additionalInfo && (
                        <p className="font-sans text-base text-gray-400 leading-relaxed">
                            {additionalInfo}
                        </p>
                    )}

                    <div className="mt-8 flex gap-4 flex-wrap">
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-game">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>OPEN TO WORK</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 font-game">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>REMOTE READY</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
