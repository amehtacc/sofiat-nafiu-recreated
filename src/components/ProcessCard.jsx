import React, { useState } from "react";
import { Arrow, Arrow_Yellow } from "../assets/images";

function ProcessCard({index, count, title, details, expandedHeight, openIndex, setOpenIndex}) {
  const [hover, setHover] = useState(false);
  const ansVisible = openIndex === index;

  function handleFaq() {
    if(ansVisible) {
      setOpenIndex(null)
    }
    else {
      setOpenIndex(index)
    }
  }

  return (
    <div>
      <div
        className="border-b border-[rgb(44,4,18)] pt-4 pb-1 cursor-pointer"
        onClick={handleFaq}
      >
        <div
          className={`h-20 flex items-center justify-center relative`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className={`absolute inset-x-0 bottom-0 ${
              hover ? "bg-[#ffe500] h-full" : "bg-transparent h-0"
            } transition-all duration-600 ease-in-out`}
          />
          <div className="w-full flex items-center justify-between text-2xl px-2 lg:px-5 relative z-10">
            <div className="flex gap-5 lg:gap-20 text-[#2c0412]">
              <h1 className="font-marckScript text-3xl">{count}</h1>
              <h1 className="font-gabarito">{title}</h1>
            </div>
            <div
              className={`w-9 h-9 flex items-center justify-center rounded-full ${
                hover ? "bg-[#2c0412]" : "bg-[#ffe500]"
              } transition-all duration-1000 ease-in-out`}
            >
              <img
                className={`${
                  ansVisible ? "rotate-140" : ""
                } transition-all duration-1000 ease-in-out`}
                src={hover ? Arrow_Yellow : Arrow}
                alt="Arrow"
              />
            </div>
          </div>
        </div>

        <div
          className={`relative pt-2 px-2 lg:px-5 ${
            ansVisible ? `opacity-100 bottom-0 ${expandedHeight}` : "opacity-0 bottom-12 h-0"
          } transition-all duration-1000 ease-in-out`}
        >
          <p className="font-gabarito">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProcessCard;
