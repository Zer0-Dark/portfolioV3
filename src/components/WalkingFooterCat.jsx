import walkingCat from '../assets/kubbi-chiptune.gif';
import { motion } from 'framer-motion';
function WalkingFooterCat() {
    return (
        <motion.div initial={{ x: 0 }} animate={{ x: 200 }} exit={{ x: 0 }} transition={{ duration: 4, repeat: Infinity }} className=" absolute bottom-0 w-20 z-50 ">
            <img src={walkingCat}></img>
        </motion.div>
    )
}

export default WalkingFooterCat