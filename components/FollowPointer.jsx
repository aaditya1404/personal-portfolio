
"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 

export default function DynamicCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 20, stiffness: 150 });
  const springY = useSpring(y, { damping: 20, stiffness: 150 });

  const [cursorSize, setCursorSize] = useState({ width: 24, height: 24 });

  const pathname = usePathname(); 


  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [x, y]);


  useEffect(() => {
    const hoverables = document.querySelectorAll("a, button, .hover-target");

    const handleEnter = (e) => {
      const el = e.currentTarget;
      setCursorSize({
        width: el.offsetWidth,
        height: el.offsetHeight,
      });
    };

    const handleLeave = () => {
      setCursorSize({ width: 24, height: 24 });
    };

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [pathname]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[999] pointer-events-none mix-blend-difference hidden lg:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          width: cursorSize.width,
          height: cursorSize.height,
          borderRadius: 12,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-[#f2e6c1]"
      />
    </motion.div>
  );
}
