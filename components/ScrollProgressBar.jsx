"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            // className="fixed top-18 left-0 right-0 h-2 bg-linear-to-r from-indigo-500 to-cyan-400 origin-left z-50"
            className="fixed top-17 left-0 right-0 bg-[#fff7ca] h-1 bg-linear-to-r  origin-left z-50"
            style={{ scaleX: smoothProgress }}
        />
    );
}
