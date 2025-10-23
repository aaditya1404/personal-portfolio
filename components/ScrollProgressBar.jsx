"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const progress = useTransform(smoothProgress, (v) => Math.min(v * 1.1, 1));

    return (
        <motion.div
            className="fixed top-17 left-0 right-0 h-1 bg-linear-to-r from-pink-400 to-pink-700 origin-left z-50"
            // className="fixed top-17 left-0 right-0 bg-[#fff7ca] h-1 bg-linear-to-r  origin-left z-50"
            style={{ scaleX: progress }}
        />
    );
}
