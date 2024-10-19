import { Link } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from "react";
import Block from "../components/Block";
import Game from "../components/Game";
import cat from "../assets/pixel-cat.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faReact, faFigma, faSquareJs } from '@fortawesome/free-brands-svg-icons'


function start() {
    let columnss = [];
    for (let i = 0; i < 300; i++) {
        columnss.push(<Block on={Math.round(Math.random())} key={i} className="block" size={100}></Block>);
    }
    return columnss
}

function Home() {

    let [colums, setColmus] = useState(start());
    let [showGame, setShowGame] = useState(false);

    function endGame() {
        setShowGame(false);
    }
    // get the width and hight of the screen

    useEffect(() => {
        let timer = setInterval(() => {
            setColmus(start());
        }, 1000)

        return () => clearInterval(timer);
    }
        , [])

    return (
        <>
            <AnimatePresence>
                {
                    showGame && <Game endGame={endGame} />
                }
            </AnimatePresence>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="block-container">

                {colums}

            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'keyframes', duration: 0.5 }} className="  w-lvw h-lvh">

                {/* tITLE START */}
                <div className=" w-full flex flex-col desktop:pt-14 pt-24 justify-center items-center cursor-cool ">
                    <h1 className="desktop:text-[7rem] text-3xl leading-none mb-4 text-mainTextColor font-bold ">ABDULRAHMAN EHAB</h1>
                    <h2 className="desktop:text-6xl text-2xl text-secondryTextColor">FRONTEND DEVELOPER</h2>
                    <h3 className="desktop:text-2xl   text-secondryTextColor">WITH SOME UI/UX EXPERINCE</h3>
                </div>
                {/* TITLE END */}

                {/* MENU START */}
                <div className="flex mt-14 pl-[8%] pr-[3%]  ">

                    <div className="flex flex-col  desktop:justify-normal desktop:items-start justify-center items-center text-mainTextColor bigDesktop:text-7xl desktop:text-6xl text-4xl desktop:w-1/2 w-full translate-x-0  mb-8 bigDesktop:gap-6 gap-6 desktop:gap-2 bigDesktop:ml-6   ">
                        <motion.div initial={{ scale: 1, y: 0 }} whileHover={{ scale: 1.05, y: -5 }} className="hover:bg-thirdBgColor hover:text-secondryBgColor text-mainTextColor desktop:p-4 p-2 desktop:pl-16 transition duration-300 desktop:w-3/4 w-full text-center desktop:text-left ">

                            <button className=" cursor-pointer" onClick={() => setShowGame(true)} >Start Game</button>
                        </motion.div>

                        <motion.div initial={{ scale: 1, y: 0 }} whileHover={{ scale: 1.05, y: -5 }} className="hover:bg-thirdBgColor hover:text-secondryBgColor text-mainTextColor desktop:p-4 p-2 desktop:pl-16 transition duration-300 desktop:w-3/4 w-full text-center desktop:text-left ">

                            <Link to="/projects" className="  cursor-pointer ">Projects</Link>
                        </motion.div>

                        <motion.div initial={{ scale: 1, y: 0 }} whileHover={{ scale: 1.05, y: -5 }} className="hover:bg-thirdBgColor hover:text-secondryBgColor text-mainTextColor desktop:p-4 p-2 desktop:pl-16 transition duration-300 desktop:w-3/4 w-full text-center desktop:text-left " >

                            <Link to="/contact" className=" cursor-pointer">Contact</Link>
                        </motion.div>

                    </div>
                    {/* MENU END */}

                    {/* THE CAT RECTANGLE START */}
                    <div className="w-1/2 desktop:flex hidden justify-center relative  ">
                        <div className=" w-[406px] h-[320px] bigDesktop:w-[500px] bigDesktop:h-[420px] flex pt-[5%] justify-around rounded-sm bg-thirdBgColor relative border-2 border-black">
                            <FontAwesomeIcon className=" hover:text-secondryTextColor left-12 text-8xl text-mainBgColor z-30" icon={faSquareJs} />
                            <FontAwesomeIcon className=" hover:text-secondryTextColor left-40 text-8xl text-mainBgColor z-30" icon={faReact} />
                            <FontAwesomeIcon className=" hover:text-secondryTextColor left-2/3 text-8xl text-mainBgColor z-30" icon={faFigma} />


                            <img className=" absolute bottom-0 left-12 w-2/3" src={cat} alt="jumping cat"></img>
                        </div>

                        <p className=" absolute -bottom-10 text-xl text-secondryTextColor ">@2024 Published by zer00dark</p>

                    </div>
                    {/* THE CAT RECTANGLE END */}


                </div>

            </motion.div>
        </>
    )
}

export default Home;
