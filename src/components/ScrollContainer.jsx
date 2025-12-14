import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Arrow_Small_Yellow } from "../assets/images.js";

function ScrollContainer() {
  const refScrollX = useRef(null);
  const { scrollYProgress } = useScroll({
    target: null,
    offset: ["start", "end"],
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], ["0px", "-3500px"]);
  return (
    <div className="relative w-full h-[120px] md:h-[180px] overflow-hidden bg-black">
      <motion.div
        ref={refScrollX}
        style={{ translateX: scrollX }}
        className="w-full h-full flex"
      >
        <span className="flex items-center pr-10 text-white font-gabarito text-[80px] md:text-[112px] shrink-0 whitespace-nowrap">
          {"Selected Works "}
          <img
            className="w-10 md:w-20 ml-10"
            src={Arrow_Small_Yellow}
            alt="Arrow_Small_Yellow"
          />
        </span>
        <span className="flex items-center pr-10 text-white font-gabarito text-[80px] md:text-[112px] shrink-0 whitespace-nowrap">
          {"Selected Works "}
          <img
            className="w-10 md:w-20 ml-10"
            src={Arrow_Small_Yellow}
            alt="Arrow_Small_Yellow"
            loading="lazy"
          />
        </span>
        <span className="flex items-center pr-10 text-white font-gabarito text-[80px] md:text-[112px] shrink-0 whitespace-nowrap">
          {"Selected Works "}
          <img
            className="w-10 md:w-20 ml-10"
            src={Arrow_Small_Yellow}
            alt="Arrow_Small_Yellow"
            loading="lazy"
          />
        </span>
        <span className="flex items-center pr-10 text-white font-gabarito text-[80px] md:text-[112px] shrink-0 whitespace-nowrap">
          {"Selected Works "}
          <img
            className="w-10 md:w-20 ml-10"
            src={Arrow_Small_Yellow}
            alt="Arrow_Small_Yellow"
            loading="lazy"
          />
        </span>
        <span className="flex items-center pr-10 text-white font-gabarito text-[80px] md:text-[112px] shrink-0 whitespace-nowrap">
          {"Selected Works "}
          <img
            className="w-10 md:w-20 ml-10"
            src={Arrow_Small_Yellow}
            alt="Arrow_Small_Yellow"
            loading="lazy"
          />
        </span>
      </motion.div>
    </div>
  );
}

export default ScrollContainer;
