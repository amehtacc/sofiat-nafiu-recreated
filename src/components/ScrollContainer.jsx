import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Arrow_Small_Yellow } from "../assets/images";

function ScrollContainer() {
  const refScrollX = useRef(null);
  const { scrollYProgress } = useScroll({
    target: null,
    offset: ["start", "end"],
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], ["0px", "-85px"]);
  return (
    <div className="relative w-full h-[180px] overflow-hidden bg-black">
      <motion.div
        ref={refScrollX}
        style={{ translateX: scrollX }}
        className="flex"
      >
        <span className="w-fit flex pr-10 text-white font-gabarito text-[112px] shrink-0 items-center">
          {"Selected Works "}
          <img
            className="w-20 ml-10"
            src={Arrow_Small_Yellow}
            alt="Arrow_Small_Yellow"
          />
        </span>
        <span className="w-fit flex pr-10 text-white font-gabarito text-[112px] shrink-0 items-center">
          {"Selected Works "}
          <img
            className="w-20 ml-10"
            src={Arrow_Small_Yellow}
            alt="Arrow_Small_Yellow"
          />
        </span>
        <span className="w-fit flex pr-10 text-white font-gabarito text-[112px] shrink-0 items-center">
          {"Selected Works "}
          <img
            className="w-20 ml-10"
            src={Arrow_Small_Yellow}
            alt="Arrow_Small_Yellow"
          />
        </span>
        <span className="w-fit flex pr-10 text-white font-gabarito text-[112px] shrink-0 items-center">
          {"Selected Works "}
          <img
            className="w-20 ml-10"
            src={Arrow_Small_Yellow}
            alt="Arrow_Small_Yellow"
          />
        </span>
        <span className="w-fit flex pr-10 text-white font-gabarito text-[112px] shrink-0 items-center">
          {"Selected Works "}
          <img
            className="w-20 ml-10"
            src={Arrow_Small_Yellow}
            alt="Arrow_Small_Yellow"
          />
        </span>
      </motion.div>
    </div>
  );
}

export default ScrollContainer;
