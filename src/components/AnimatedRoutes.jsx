import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

import { AnimatePresence } from 'framer-motion'
function AnimatedRoutes() {
    let location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes