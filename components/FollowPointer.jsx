// "use client";
// import { motion, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";
// import { useRef, useEffect } from "react";

// export default function FollowPointer() {
//   const ref = useRef(null);

//   // Create motion values for x and y
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Smooth spring
//   const springX = useSpring(x, { damping: 20, stiffness: 150 });
//   const springY = useSpring(y, { damping: 20, stiffness: 150 });

//   // Track mouse position
//   useEffect(() => {
//     const handleMove = (e) => {
//       x.set(e.clientX);
//       y.set(e.clientY);
//     };
//     window.addEventListener("pointermove", handleMove);
//     return () => window.removeEventListener("pointermove", handleMove);
//   }, [x, y]);

//   return (
//     <motion.div
//       ref={ref}
//       className="fixed top-0 left-0 z-50 pointer-events-none hidden lg:block"
//       style={{
//         x: springX,
//         y: springY,
//         translateX: "-50%",
//         translateY: "-50%",
//       }}
//     >
//       <div className="w-6 h-6 rounded-full bg-[#f2e6c1] mix-blend-difference" />
//     </motion.div>
//   );
// }


"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function DynamicCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 20, stiffness: 150 });
  const springY = useSpring(y, { damping: 20, stiffness: 150 });

  const [cursorSize, setCursorSize] = useState({ width: 24, height: 24 });

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
      setCursorSize({ width: 24, height: 24 }); // default cursor size
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
  }, []);

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
          borderRadius: 12, // keep slightly rounded
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        // className="bg-[#f2e6c1]"
        className="bg-[#f2e6c1]"
      />
    </motion.div>
  );
}
