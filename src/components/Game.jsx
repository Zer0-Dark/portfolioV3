import { motion } from "framer-motion"
function Game({ endGame }) {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full z-40 bg-thirdBgColor absolute top-0 left-0">
            <button onClick={endGame}>Exit game</button>

        </motion.div>
    )
}

export default Game