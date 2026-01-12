/* eslint-disable react/prop-types */

function ProfileCard({ image, level, title, location }) {
    return (
        <div className="w-full desktop:w-1/3 flex flex-col">
            <div className="bg-ForuthBgColor border border-white/10 rounded-lg p-3 shadow-lg relative h-full flex flex-col">
                <div className="absolute -inset-[1px] bg-secondryTextColor/20 rounded-lg blur-sm -z-10"></div>

                {/* Profile Image */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-black rounded overflow-hidden mb-4 border border-white/5">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a]">
                        <span className="text-8xl text-gray-700">👤</span>
                    </div>
                    {image && (
                        <img
                            alt="Profile"
                            className="w-full h-full object-cover opacity-90 transition-opacity"
                            src={image}
                        />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-10">
                        <div className="font-game text-white text-xs mb-1">LEVEL {level}</div>
                    </div>
                </div>

                {/* Title and Location */}
                <div className="space-y-3 mt-auto">
                    <div className="bg-black/40 rounded p-4 border border-white/5 text-center">
                        <h3 className="font-game text-lg text-secondryTextColor mb-2 uppercase tracking-wide">
                            {title}
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-gray-400">
                            <span className="text-sm">📍</span>
                            <span className="font-game text-xs uppercase tracking-wider">{location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
