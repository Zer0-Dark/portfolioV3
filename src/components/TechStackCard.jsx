/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TechStackCard({ name, category, description, icon, tags }) {
    const categoryStyles = {
        Frontend: {
            border: 'border-secondryTextColor/30 hover:border-secondryTextColor',
            badge: 'text-secondryTextColor bg-secondryTextColor/10 border-secondryTextColor/20',
            iconBg: 'bg-black/40 group-hover:bg-secondryTextColor/5',
            iconColor: 'text-secondryTextColor',
            titleHover: 'group-hover:text-secondryTextColor'
        },
        Backend: {
            border: 'border-green-500/30 hover:border-green-500',
            badge: 'text-green-500 bg-green-500/10 border-green-500/20',
            iconBg: 'bg-black/40 group-hover:bg-green-500/5',
            iconColor: 'text-green-500',
            titleHover: 'group-hover:text-green-500'
        },
        DB: {
            border: 'border-blue-500/30 hover:border-blue-500',
            badge: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
            iconBg: 'bg-black/40 group-hover:bg-blue-500/5',
            iconColor: 'text-blue-500',
            titleHover: 'group-hover:text-blue-500'
        },
        Linux: {
            border: 'border-orange-500/30 hover:border-orange-500',
            badge: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
            iconBg: 'bg-black/40 group-hover:bg-orange-500/5',
            iconColor: 'text-orange-500',
            titleHover: 'group-hover:text-orange-500'
        },
        Design: {
            border: 'border-pink-500/30 hover:border-pink-500',
            badge: 'text-pink-500 bg-pink-500/10 border-pink-500/20',
            iconBg: 'bg-black/40 group-hover:bg-pink-500/5',
            iconColor: 'text-pink-500',
            titleHover: 'group-hover:text-pink-500'
        }
    };

    const styles = categoryStyles[category] || categoryStyles.Frontend;

    return (
        <div className={`bg-ForuthBgColor border rounded-lg overflow-hidden transition-all duration-300 group relative ${styles.border}`}>
            <div className="absolute top-3 right-3">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${styles.badge}`}>
                    {category.toUpperCase()}
                </span>
            </div>

            <div className="flex flex-row h-full">
                <div className={`w-24 flex items-center px-8 justify-center border-r border-white/5 transition-colors ${styles.iconBg}`}>
                    {icon && (
                        <FontAwesomeIcon icon={icon} className={`text-4xl ${styles.iconColor}`} />
                    )}
                </div>

                <div className="p-5 flex-grow">
                    <h4 className={`font-game text-lg font-bold text-mainTextColor mb-1 transition-colors ${styles.titleHover}`}>
                        {name}
                    </h4>
                    <p className="font-game text-xs text-gray-500 mb-3">{category}</p>
                    <p className="font-sans text-gray-400 text-sm leading-snug mb-3">
                        {description}
                    </p>
                    <div className="flex gap-2 text-[10px] text-gray-500 font-game uppercase flex-wrap">
                        {tags && tags.map((tag, index) => (
                            <span key={index} className="bg-white/5 px-1.5 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStackCard;
