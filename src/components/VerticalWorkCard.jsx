import React, { useState } from "react";
import { Arrow_Long_Yellow } from "../assets/images";
import Button from "./Button";

function VerticalWorkCard({
  className,
  imageClassName,
  detailsClassName,
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
    <div
      className={`w-full lg:w-1/2 flex flex-col lg:pt-6 lg:pb-10 lg:gap-8 ${className}`}
    >
      <div className={`flex ${imageClassName}`}>
        <img
          src={hoverImage ? src2 : src1}
          alt={hoverImage ? src2 : src1}
          className="w-full lg:w-[95%] h-[250px] lg:h-[420px] rounded-2xl relative object-cover transition-opacity duration-700 opacity-100"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      <div className={`pt-5 lg:pt-0 ${detailsClassName}`}>
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
            className={`font-gabarito text-[#7b7578] ${
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
  );
}

export default VerticalWorkCard;
