import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { useState } from "react";
import { AnimatePresence } from 'framer-motion'
import Exp from "../pages/Exp";
function AnimatedRoutes() {
    let location = useLocation();
    const [killedTheCat, setKilledTheCat] = useState(false);
    function killTheCat() {
        setKilledTheCat(true);
    }
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home killedTheCat={killedTheCat} killTheCatFun={killTheCat} />} />
                <Route path="/projects" element={<Projects killedTheCat={killedTheCat} />} />
                <Route path="/contact" element={<Contact killedTheCat={killedTheCat} />} />
                <Route path="/expertise" element={<Exp killedTheCat={killedTheCat} />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes