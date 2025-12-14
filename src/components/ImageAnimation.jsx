import React from "react";
import { Logo_Black } from "../assets/images.js";
import { AnimatePresence, motion } from "motion/react";

function ImageAnimation() {
  return (
    <AnimatePresence mode="wait">
      <div className="w-full h-screen flex items-center justify-center bg-[#ffe500]">
        <motion.span
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0}}
          transition={{ duration: 1 }}
        >
          <img className="w-[399px]" src={Logo_Black} alt="Logo_Black" />
        </motion.span>
      </div>
    </AnimatePresence>
  );
}

export default ImageAnimation;
