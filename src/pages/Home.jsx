import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { useEffect, useState } from "react";
import Block from "../components/Block";
import cat from "../assets/pixel-cat.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faFigma, faSquareJs } from '@fortawesome/free-brands-svg-icons'


function start() {
    let columnss = [];
    for (let i = 0; i < 155; i++) {
        columnss.push(<Block on={Math.round(Math.random())} key={i} className="block"></Block>);
    }
    return columnss
}

function Home() {

    let [colums, setColmus] = useState(start());

    useEffect(() => {
        let timer = setInterval(() => {
            setColmus(start());
        }, 1000)

        return () => clearInterval(timer);
    }
        , [])

    return (
        <>
            <div className="block-container">

                {colums}

            </div>

            <div

                className="  w-lvw h-lvh">
                <div className=" w-full flex flex-col pt-14 justify-center items-center">
                    <h1 className="text-[7rem] leading-none mb-2 text-mainTextColor">ABDULRAHMAN EHAB</h1>
                    <h2 className="text-6xl text-secondryTextColor">FRONTEND DEVELOPER</h2>
                    <h3 className="text-2xl text-secondryTextColor">WITH SOME UI/UX EXPERINCE</h3>
                </div>


                <div className="flex mt-14  ">

                    <div className="flex flex-col text-mainTextColor text-5xl w-1/2 translate-x-0  mb-8 ">
                        <motion.div initial={{ scale: 1, y: 0 }} whileHover={{ scale: 1.05, y: -5 }} className="hover:bg-thirdBgColor hover:text-secondryBgColor text-mainTextColor p-4 pl-16 transition duration-300 w-3/4 ">

                            <Link >Start Game</Link>
                        </motion.div>

                        <motion.div initial={{ scale: 1, y: 0 }} whileHover={{ scale: 1.05, y: -5 }} className="hover:bg-thirdBgColor hover:text-secondryBgColor text-mainTextColor p-4 pl-16 transition duration-300 w-3/4 ">

                            <Link to="/projects" className=" w-full ">Projects</Link>
                        </motion.div>

                        <motion.div initial={{ scale: 1, y: 0 }} whileHover={{ scale: 1.05, y: -5 }} className="hover:bg-thirdBgColor  hover:text-secondryBgColor text-mainTextColor p-4 pl-16 transition duration-300 w-3/4 " >

                            <Link className="">Contact</Link>
                        </motion.div>

                    </div>


                    <div className="w-1/2 flex justify-center relative ">
                        <div className=" w-[406px] h-[320px] rounded-sm bg-thirdBgColor relative">
                            <FontAwesomeIcon className="absolute top-14 hover:text-secondryTextColor left-12 text-8xl text-mainBgColor z-30" icon={faSquareJs} />
                            <FontAwesomeIcon className="absolute top-14 hover:text-secondryTextColor left-40 text-8xl text-mainBgColor z-30" icon={faReact} />
                            <FontAwesomeIcon className="absolute top-14 hover:text-secondryTextColor left-2/3 text-8xl text-mainBgColor z-30" icon={faFigma} />


                            <img className=" absolute bottom-0 left-12 w-2/3" src={cat} alt="jumping cat"></img>
                        </div>

                        <p className=" absolute -bottom-10 text-xl text-secondryTextColor ">@2024 Published by zer00dark</p>

                    </div>


                </div>

            </div>
        </>
    )
}

export default Home;
