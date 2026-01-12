/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer } from '@fortawesome/free-solid-svg-icons';

function ExperienceCard({ title, company, description, status, statusColor = 'yellow', stack, iconColor = 'secondryTextColor' }) {
    const statusColors = {
        yellow: 'text-yellow-500 border-yellow-500/20 bg-yellow-500/5',
        green: 'text-green-400 border-green-500/20 bg-green-500/5'
    };

    const iconColors = {
        secondryTextColor: 'bg-secondryTextColor/10 border-secondryTextColor/20 text-secondryTextColor',
        green: 'bg-green-500/10 border-green-500/20 text-green-500'
    };

    const icon = iconColor === 'green' ? faServer : faCode;

    return (
        <div className="bg-ForuthBgColor border border-white/10 rounded-lg p-6 hover:border-secondryTextColor/50 transition-all duration-300 group shadow-lg relative overflow-hidden">
            <div className="flex flex-col desktop:flex-row gap-6 items-start">
                <div className="flex-shrink-0 mt-1">
                    <div className={`p-3 rounded border ${iconColors[iconColor]}`}>
                        <FontAwesomeIcon icon={icon} className="text-3xl" />
                    </div>
                </div>

                <div className="flex-grow w-full">
                    <div className="flex flex-col desktop:flex-row justify-between items-start desktop:items-center mb-2">
                        <div>
                            <h3 className="font-bold text-lg text-mainTextColor group-hover:text-secondryTextColor transition-colors">
                                {title}
                            </h3>
                            <p className="text-sm text-gray-400 font-medium">{company}</p>
                        </div>
                        <span className={`mt-2 desktop:mt-0 font-game text-[10px] border px-2 py-1 rounded ${statusColors[statusColor]}`}>
                            {status}
                        </span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {description}
                    </p>

                    <div className="flex items-center gap-4 border-t border-white/5 pt-3">
                        <div className="text-xs text-gray-500 font-game">STACK:</div>
                        <div className="flex gap-2 flex-wrap">
                            {stack && stack.map((tech, index) => (
                                <span key={index} className="text-xs text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
