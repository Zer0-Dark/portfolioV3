import { useEffect } from "react";
import walkingCat from "../assets/kubbi-chiptune.gif";
import { motion } from 'framer-motion';
import { useState } from "react";
import deadCat from "../assets/sadcat.png";

const MotionCat = ({ killedTheCat }) => {
    const [screenwidth, setScreenWidth] = useState(0);


    useEffect(() => {

        setScreenWidth(window.innerWidth);
    }, [])
    const walkAnimation = {
        x: ['0', screenwidth - 45], // Walk from left to right
        transition: {
            x: {
                repeat: Infinity, // Loop the walk forever
                repeatType: 'loop',
                duration: 28, // Adjust speed by changing duration
                ease: 'linear', // Smooth, constant speed
            }
        }
    };

    const jumpAnimation = {
        y: [0, 0, 0], // Cat jumps up and down
        transition: {
            y: {
                repeat: Infinity, // Keep jumping while walking
                repeatType: 'loop',
                duration: 1.5, // Adjust jump speed
                ease: 'easeInOut',

            }
        }
    };

    return (
        <motion.div

            className=" fixed bottom-0 left-0 z-30  "
            animate={walkAnimation}
        >
            <motion.img
                src={killedTheCat ? deadCat : walkingCat} // Replace with the path to your cat image
                alt="Walking Cat"
                className="h-12"

                animate={jumpAnimation} // Apply jumping animation to the cat image
            />
        </motion.div>
    );
};

export default MotionCat;
