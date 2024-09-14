import { motion } from 'framer-motion';

function Transition(OgComponent) {
    return (
        <>
            <OgComponent />
            <motion.div
                className='slide-in'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.5 }}
            ></motion.div>

            <motion.div
                className='slide-out'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.5 }}
            ></motion.div>

        </>

    )
}

export default Transition;