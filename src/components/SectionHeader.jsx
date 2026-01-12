/* eslint-disable react/prop-types */

function SectionHeader({ title, highlight, badge }) {
    return (
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
                <h3 className="font-game text-2xl text-mainTextColor uppercase tracking-wider font-bold">
                    {title} {highlight && <span className="text-secondryTextColor">{highlight}</span>}
                </h3>
            </div>
            {badge && (
                <span className="font-game text-xs text-gray-500 border border-white/10 px-2 py-1 rounded bg-white/5">
                    {badge}
                </span>
            )}
        </div>
    );
}

export default SectionHeader;
