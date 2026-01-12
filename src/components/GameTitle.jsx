import { motion } from "framer-motion"

function GameTitle({ msg }) {
    return (
        <motion.div initial={{ opacity: 0.5, scale: 0.5, y: 0 }} animate={{ opacity: 1, scale: 1, y: -50 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 1 }} className="text-7xl w-full mt-[20%] font-bold text-center font-game">{msg}</motion.div>
    )
}

export default GameTitle