import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { useState } from "react";
import { AnimatePresence } from 'framer-motion'
function AnimatedRoutes() {
    let location = useLocation();
    const [killedTheCat, setKilledTheCat] = useState(false);
    function killTheCat() {
        setKilledTheCat(true);
    }
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home killedTheCat={killedTheCat} killTheCatFun={killTheCat} />} />
                <Route path="/projects" element={<Projects killedTheCat={killedTheCat} />} />
                <Route path="/contact" element={<Contact killedTheCat={killedTheCat} />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes