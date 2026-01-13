/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGem, faBoxArchive, faBrain, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

// Icon mapping for books
const bookIconMap = {
    faGem: faGem,
    faBook: faBook,
    faArrowsRotate: faArrowsRotate,
    faBrain: faBrain
};

function BookCard({ title, author, icon, status, statusColor }) {
    const bookIcon = bookIconMap[icon] || faBook;

    // Determine colors based on status
    const isCurrentlyStudying = statusColor === 'green';
    const spineColor = isCurrentlyStudying ? 'bg-secondryTextColor/40' : 'bg-gray-600';
    const iconColor = isCurrentlyStudying ? 'text-secondryTextColor' : 'text-gray-600';
    const iconOpacity = isCurrentlyStudying ? 'opacity-80' : 'opacity-50';
    const titleColor = isCurrentlyStudying ? 'text-white' : 'text-gray-400';
    const statusBgColor = isCurrentlyStudying
        ? 'bg-green-500/10 text-green-400 border-green-500/30 shadow-[0_0_10px_rgba(34,197,94,0.2)]'
        : 'bg-white/5 text-gray-500 border-white/10';

    return (
        <div className="group flex flex-col gap-4">
            {/* Book 3D Card */}
            <div className="relative w-40 h-56 mx-auto perspective-1000 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-mainBgColor rounded-r-md border-y border-r border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden flex">
                    {/* Spine */}
                    <div className="w-4 h-full bg-gradient-to-r from-black/50 to-transparent border-r border-white/5 flex flex-col items-center justify-center gap-2 py-4">
                        <div className={`w-1 h-1 ${spineColor} rounded-full`}></div>
                        {isCurrentlyStudying && (
                            <div className={`w-1 h-1 ${spineColor} rounded-full`}></div>
                        )}
                    </div>

                    {/* Book Cover */}
                    <div className="flex-grow flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-secondryBgColor to-black relative">
                        {/* Background Icon */}
                        <div className="absolute top-2 right-2 opacity-10">
                            <FontAwesomeIcon icon={faBook} className="text-4xl" />
                        </div>

                        {/* Main Icon */}
                        <FontAwesomeIcon
                            icon={bookIcon}
                            className={`${iconColor} text-4xl mb-2 ${iconOpacity}`}
                        />

                        {/* Book Title on Cover */}
                        <div className={`text-[10px] font-game font-bold ${titleColor} leading-tight uppercase tracking-tighter`}>
                            {title}
                        </div>
                    </div>
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-2 -right-2 z-20">
                    <span className={`${statusBgColor} text-[9px] font-bold px-2 py-1 rounded border tracking-tighter uppercase`}>
                        {status}
                    </span>
                </div>
            </div>

            {/* Book Info */}
            <div className="text-center">
                <h4 className="text-white font-bold text-sm mb-1 group-hover:text-secondryTextColor transition-colors">
                    {title}
                </h4>
                <p className="text-gray-500 text-xs font-medium">{author}</p>
            </div>
        </div>
    );
}

export default BookCard;
