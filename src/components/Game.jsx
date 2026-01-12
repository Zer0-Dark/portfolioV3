import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClose, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import walkingCat from "../assets/kubbi-chiptune.gif";
import catlevel1 from "../assets/level1Cat.gif"
import deadCat from "../assets/sadcat.png";
import { useState, useEffect } from "react";
import GameTitle from "./GameTitle";

function Game({ endGame, killedTheCat }) {
    // State variables for game logic
    const [currentMessage, setCurrentMessage] = useState(0);  // Message progression (start countdown)
    const [endMessage, setEndMessage] = useState(0);  // Tracks if the game has ended to show ended massages
    const [timer, setTimer] = useState(0);  // Timer state
    const [activeTimer, setActiveTimer] = useState(false);  // To control timer start/stop
    const [health, setHealth] = useState(4);  // Cat health state
    const [gameEnded, setGameEnded] = useState(false);  // Tracks if the game has ended
    const [shock, setShock] = useState(false);  // Tracks the shock animation state
    const [cloneCat, setCloneCat] = useState(false);
    const [cloneCat2, setCloneCat2] = useState(false);



    if (currentMessage === 6) {
        endGame();
    }


    // Timer logic to increment every second when active
    useEffect(() => {
        let interval = null;
        if (health !== 0 && activeTimer) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        }
        return () => { clearInterval(interval) };
    }, [activeTimer, timer, health]);


    // Handles cat click logic, reduces health and triggers shock animation
    function clickedTheCat() {
        setHealth((prev) => prev - 1);
        if (health === 2) {
            setCloneCat(true);
            setCloneCat2(true);
        }
        setShock(true);  // Trigger shock animation
        if (health === 1) {
            catDead();  // Call function when cat health reaches 0
        }
    }

    function clickedTheClone() {
        setCloneCat(false);
    }
    function clickedTheClone2() {
        setCloneCat2(false);
    }




    // Handles cat death logic and stops the game
    function catDead() {
        setGameEnded(true);
        setActiveTimer(false);  // Stop the timer
        setCurrentMessage(5); // remove the game for now
        killedTheCat();
    }


    // Stop the shock animation after 0.5 seconds
    useEffect(() => {
        if (shock) {
            const timeout = setTimeout(() => {
                setShock(false);  // Stop shock after 0.5 seconds
            }, 500);
            return () => clearTimeout(timeout);  // Clear timeout on cleanup
        }
    }, [shock]);


    // Manage start countdown before the game begins
    useEffect(() => {
        if (currentMessage < 4) {
            const intervalId = setInterval(() => {
                setCurrentMessage((prev) => prev + 1);
            }, 1000);
            return () => clearInterval(intervalId);
        } else {
            setActiveTimer(true);  // Start the game timer after countdown
        }
    }, [currentMessage]);

    // end game messages
    useEffect(() => {
        let endGameMessages = null;
        if (gameEnded) {
            if (endMessage === 4) {
                setCurrentMessage(6);
            } else {
                endGameMessages = setInterval(() => {
                    setEndMessage((prev) => prev + 1);
                }, 1500)
                console.log(endMessage)
            }


            return () => clearInterval(endGameMessages)
        }

    }, [gameEnded, endMessage])






    // Variants for the cat's movement animation based on health level
    const level1 = {
        x: [0, 500, -500, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            times: [0, 0.25, 0.75, 1],
            type: "tween"

        }
    };

    const level2 = {
        x: [0, 500, -500, 0],
        y: [0, -300, -300, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            times: [0, 0.4, 0.9, 1],
            type: "tween"

        }
    };
    const level3 = {
        x: [0, -500, 500, 0],
        y: [0, -500, -0, -500, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
        }
    };
    const level4 = {
        x: [0, -500, 500, 0],
        y: [0, -500, -0, -500, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
        }
    };

    // Animation variants for shock effect and health loss
    const shockVariants = {
        normal: health === 4 ? level1 : health === 3 ? level2 : health === 2 ? level3 : level4,
        shock: {
            scale: [1, 1.1, 0.9, 1.2, 1],
            rotate: [0, -10, 10, -5, 5, 0],
            transition: {
                duration: 0.2,
                ease: 'easeInOut'
            }
        }
    };

    const cloneCatVariants = {
        level1: level1,
        level2: level2

    }

    const healthShockVariants = {
        normal: {},
        shock: {
            scale: [1, 1.1, 1, 1.1, 1],
            x: [0, 20, 0, -20, 0],
            transition: {
                duration: 0.2,
                ease: 'easeInOut'
            }
        }
    };

    //  end


    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full z-40 bg-thirdBgColor absolute top-0 left-0 p-8 cursor-gun select-none">


            {
                endMessage === 1 ? <GameTitle msg="YOU !" /> :
                    endMessage == 2 ? <GameTitle msg="YOU MONSTER !" /> :
                        endMessage == 3 ? <GameTitle msg="YOU HURT THE CAT  !!!!!!" /> : null
            }

            <AnimatePresence mode="popLayout">


                {
                    // Start game messages (countdown)
                    currentMessage === 0 ? <GameTitle msg="KILL THE CAT" /> :
                        currentMessage === 1 ? <GameTitle msg="3" /> :
                            currentMessage === 2 ? <GameTitle msg="2" /> :
                                currentMessage === 3 ? <GameTitle msg="1" /> :
                                    currentMessage === 4 ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1 }}
                                            className="border-8 border-black rounded-md h-full p-12">

                                            {/* Top Bar: Health and Timer */}
                                            <div className="flex justify-between items-center">
                                                <motion.div
                                                    variants={healthShockVariants}
                                                    initial="normal"
                                                    animate={shock ? "shock" : "normal"}
                                                    className="space-x-2 w-1/3 text-6xl text-red-600">

                                                    {/* Display health hearts */}
                                                    {[...Array(4)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ y: -30 }}
                                                            animate={{ y: 0 }}
                                                            exit={{ y: -30 }}
                                                            className="inline-block">
                                                            <FontAwesomeIcon
                                                                className={health > i ? "" : "text-secondryBgColor"}
                                                                icon={health > i ? faHeart : faHeartBroken} />
                                                        </motion.div>
                                                    ))}
                                                </motion.div>

                                                {/* Timer */}
                                                <div className="w-1/3 flex items-center justify-center">
                                                    <h2 className="text-4xl font-black">Timer: {timer}</h2>
                                                </div>

                                                {/* End Game Button */}
                                                <div className="text-6xl w-1/3 flex justify-end items-center">
                                                    <FontAwesomeIcon onClick={endGame} icon={faClose} />
                                                </div>
                                            </div>

                                            {/* Walking/Dead Cat Animation */}
                                            {!gameEnded ? (
                                                <>
                                                    <motion.div
                                                        initial={{ x: 0 }}
                                                        animate={shock ? "shock" : "normal"}
                                                        variants={shockVariants}
                                                        className="cat w-fit h-fit absolute bottom-9 left-1/2 -translate-x-1/2">
                                                        <img
                                                            draggable="false"
                                                            className="h-24 cursor-gunPointer"
                                                            onClick={clickedTheCat}
                                                            src={catlevel1} />
                                                    </motion.div>
                                                    <AnimatePresence>

                                                        {
                                                            health === 4 &&
                                                            <motion.div
                                                                initial={{ opacity: 0, y: -30 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -30 }}
                                                            >
                                                                <h2 className="text-6xl font-bold mt-12 w-full text-center">SHOOT THE CAT</h2>
                                                            </motion.div>
                                                        }
                                                        {
                                                            health === 1 &&
                                                            <motion.div
                                                                initial={{ opacity: 0, y: -30 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -30 }}
                                                            >
                                                                <h2 className="text-6xl font-bold mt-12 w-full text-center">FIND THE REAL ONE</h2>
                                                            </motion.div>
                                                        }

                                                        {
                                                            cloneCat &&
                                                            <motion.div
                                                                initial={{ x: 0 }}
                                                                animate={"level1"}
                                                                exit={{ rotate: 360 }}
                                                                variants={cloneCatVariants}
                                                                className="cat w-fit h-fit absolute bottom-9 left-1/2 -translate-x-1/2">
                                                                <img
                                                                    draggable="false"
                                                                    className="h-24 cursor-gunPointer"
                                                                    onClick={clickedTheClone}
                                                                    src={catlevel1} />
                                                            </motion.div>

                                                        }
                                                        {
                                                            cloneCat2 &&
                                                            <motion.div
                                                                initial={{ x: 0 }}
                                                                animate={"level2"}
                                                                variants={cloneCatVariants}
                                                                className="cat w-fit h-fit absolute bottom-9 left-1/2 -translate-x-1/2">
                                                                <img
                                                                    draggable="false"
                                                                    className="h-24 cursor-gunPointer"
                                                                    onClick={clickedTheClone2}
                                                                    src={catlevel1} />
                                                            </motion.div>
                                                        }
                                                    </AnimatePresence>

                                                </>
                                            ) : (
                                                <div className="cat w-fit h-fit absolute bottom-9 left-1/2 -translate-x-1/2">
                                                    <img className="h-24" src={deadCat} />
                                                </div>
                                            )}
                                        </motion.div>
                                    ) : currentMessage === 5 ? currentMessage == 6 : <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className="border-8 border-black rounded-md h-full p-12">

                                        {/* Top Bar: Health and Timer */}
                                        <div className="flex justify-between items-center">
                                            <motion.div
                                                variants={healthShockVariants}
                                                initial="normal"
                                                animate={shock ? "shock" : "normal"}
                                                className="space-x-2 w-1/3 text-6xl text-red-600">


                                            </motion.div>

                                            {/* Timer */}
                                            <div className="w-1/3 flex items-center justify-center">
                                                <h2 className="text-4xl font-black">Timer: {timer}</h2>
                                            </div>

                                            {/* End Game Button */}
                                            <div className="text-6xl w-1/3 flex justify-end items-center">
                                                <FontAwesomeIcon onClick={endGame} icon={faClose} />
                                            </div>
                                        </div>

                                        {/* Walking/Dead Cat Animation */}
                                        <div className="cat w-fit h-fit absolute bottom-9 left-1/2 -translate-x-1/2">
                                            <img className="h-24" src={deadCat} />
                                        </div>
                                    </motion.div> ? currentMessage === 8 : null
                }
            </AnimatePresence>
        </motion.div>
    );
}

export default Game;
