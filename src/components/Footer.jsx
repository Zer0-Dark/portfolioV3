import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full relative z-10 py-2 desktop:py-4 border-t bg-thirdBgColor backdrop-blur-sm">
            <div className="desktop:px-36 flex desktop:flex-row justify-between items-center text-xs desktop:text-sm font-game text-black">
                <div className="mb-2 desktop:mb-0 text-sm  flex items-center">
                    <span className="inline-block w-4 h-4 rounded-full bg-green-500 animate-pulse mr-2" />
                    <span>System Online</span>
                </div>

                <a href="https://github.com/Zer0-Dark" target="_blank" rel="noopener noreferrer" className="text-secondryTextColor hover:text-black desktop:text-sm hover:underline cursor-pointer">
                    @2024 Published by zer00dark
                </a>
            </div>
        </footer>
    )
}

export default Footer
