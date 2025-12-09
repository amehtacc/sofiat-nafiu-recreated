import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function TypingAnimation() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const text = "SOFIAT.";
  useEffect(() => {
    let i = 0;
    let interval = setInterval(() => {
      if (!isDeleting) {
        setDisplayText(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(interval);
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    }, 150);
    return () => clearInterval(interval);
  }, [isDeleting]);

  useEffect(() => {
    if (!isDeleting) return;

    let i = text.length;
    let interval = setInterval(() => {
      if (i > 1) {
        setDisplayText(text.slice(0, i - 1));
        i--;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [isDeleting]);
  return (
    <AnimatePresence mode="wait">
      <div className="w-full h-screen flex items-center justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{opacity: 0}}
          transition={{ duration: 1 }}
          className="text-7xl font-bold font-interTight text-[rgb(44,4,18)]"
        >
          {displayText}
        </motion.span>
      </div>
    </AnimatePresence>
  );
}

export default TypingAnimation;
