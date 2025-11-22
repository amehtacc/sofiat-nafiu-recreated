import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {Arrow_Small_Yellow} from "../assets/images"

function ScrollContainer() {
  const scrollXRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollXRef,
    offset: ["start end", "end start"],
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], ["20px, 20px"])
  return (
    <div ref={scrollXRef} className="relative w-full h-[180px] overflow-hidden bg-black">
      <div className="flex items-center">
        <span className="flex pr-[100px]">
            {"Selected Works "}
            <img className="w-20 ml-10" src={Arrow_Small_Yellow} alt="Arrow_Small_Yellow" />
        </span>
        <span className="flex pr-[100px]">
            {"Selected Works "}
            <img className="w-20 ml-10" src={Arrow_Small_Yellow} alt="Arrow_Small_Yellow" />
        </span>
        <span className="flex pr-[100px]">
            {"Selected Works "}
            <img className="w-20 ml-10" src={Arrow_Small_Yellow} alt="Arrow_Small_Yellow" />
        </span>
      </div>
    </div>
  );
}

export default ScrollContainer;
