import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full relative z-10  bg-secondryBgColor backdrop-blur-sm">
            <div className="px-5 desktop:px-36 py-3 desktop:py-4 flex flex-col desktop:flex-row gap-2 desktop:gap-0 justify-between items-center text-xs desktop:text-sm font-game text-mainTextColor">
                <div className="text-[10px] desktop:text-sm flex items-center">
                    <span className="inline-block w-3 h-3 desktop:w-4 desktop:h-4 rounded-full bg-green-500 animate-pulse mr-2" />
                    <span>System Online</span>
                </div>

                <a href="https://github.com/Zer0-Dark" target="_blank" rel="noopener noreferrer" className="text-[10px] desktop:text-sm text-secondryTextColor hover:text-mainTextColor hover:underline cursor-pointer">
                    @2024 Published by zer00dark
                </a>
            </div>
        </footer>
    )
}

export default Footer
