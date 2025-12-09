import React, { useRef, useState } from "react";
import { Arrow_Down } from "../assets/images";
import { motion } from "motion/react";

function Hero() {
  const [isPeopleHover, setIsPeopleHover] = useState(false);
  const [isEvolHover, setIsEvolHover] = useState(false);
  
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className="relative w-full px-4 lg:px-10">
      <div className="w-full h-full pb-4 border-x border-[rgb(44,4,18)] font-gabarito">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="h-[90%] flex flex-col items-start justify-between px-4 lg:px-8 pt-20 lg:pt-16">
            <h1 className="lg:w-[60%] text-4xl lg:text-7xl text-left font-bold lg:font-semibold lg:mb-10 text-[rgb(44,4,18)]">
              {" Designing for "}
              <span
                className="text-[#FDECF2] hover:text-[rgb(224,21,92)] hover:no-underline"
                onMouseEnter={() => setIsPeopleHover(true)}
                onMouseLeave={() => setIsPeopleHover(false)}
              >
                {isPeopleHover ? "Impact," : "People,"}
              </span>
              {" Creating experiences that drive "}
              <span
                className="text-[#FDECF2] hover:text-[rgb(224,21,92)] hover:no-underline"
                onMouseEnter={() => setIsEvolHover(true)}
                onMouseLeave={() => setIsEvolHover(false)}
              >
                {isEvolHover ? "growth." : "evolution."}
              </span>
            </h1>

            <div className="flex items-center justify-end mt-6 lg:mt-0 mb-5">
              <div className="lg:w-1/2 text-left flex flex-col gap-2">
                <p>
                  {" "}
                  I’m Sofiat Nafiu, a dedicated User Experience & Visual
                  Designer with years of experience in branding and product
                  design. I’m dedicated to crafting unmatched digital
                  experiences that seamlessly blend technology, aesthetic and
                  functionality.{" "}
                </p>
                <p>
                  {" Currently, the Chief Driver & Founding designer at "}
                  <span className="text-[rgb(224,21,92)] underline">
                    <a href="#">Moospire</a>
                  </span>
                  {
                    ", an innovative tool designed to help creatives enhance and streamline their workflow by allowing them create, curate & customize moodboad from the web or with AI. "
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <img src={Arrow_Down} alt="Arrow_Down" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
