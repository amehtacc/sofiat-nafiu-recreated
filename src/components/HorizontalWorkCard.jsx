import React, { useState } from "react";
import { Arrow_Long_Yellow } from "../assets/images";
import Button from "./Button";

function HorizontalWorkCard({
  className,
  imageClassName,
  src1,
  src2,
  count,
  year,
  projectsTech,
  projectTitle,
  projectDescription,
}) {
  const [hoverImage, setHoverImage] = useState(false);

  function handleMouseEnter() {
    setHoverImage(true);
  }

  function handleMouseLeave() {
    setHoverImage(false);
  }
  return (
    <div className="w-full h-full border-x border-[rgb(44,4,18)]">
      <div
        className={`h-[90%] flex flex-col gap-0 lg:gap-7 py-6 px-2 lg:px-5 ${className}`}
      >
        <div className={`lg:w-1/2 flex ${imageClassName}`}>
          <div
            className="relative rounded-xl lg:w-[96%] w-full h-[335px] lg:h-[520px] overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Base image */}
            <img
              src={src1}
              alt={src1}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100"
            />

            {/* Hover image */}
            <img
              src={src2}
              alt={src2}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 
                ${hoverImage ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </div>

        <div className="lg:w-1/2 pt-5 lg:pt-10">
          <div className="flex items-center gap-2 text-3xl font-marckScript font-thin">
            <h1 className="font-medium">{count}</h1>
            <img src={Arrow_Long_Yellow} alt="Arrow_Long_Yellow" />
            <p>{year}</p>
          </div>

          <div className="mt-5 lg:mt-10">
            <p className="text-xs font-architectsDaughter flex gap-1 text-[#2c0412]">
              <span className="tracking-[1.1px] lg:tracking-[1.8px]">{projectsTech}</span>
            </p>
            <h1
              className={`w-[90%] font-gabarito text-[#7b7578] ${
                count == 1 ? "font-medium text-3xl" : "font-semibold text-2xl"
              } lg:text-4xl my-5`}
            >
              <span className="text-black">{projectTitle}</span>
              {projectDescription}
            </h1>
            <Button text="View Case Study" arrowClassName="group-hover:translate-x-2 transition-transform duration-1000 ease-in-out"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalWorkCard;
