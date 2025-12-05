import React from "react";
import {Arrow} from "../assets/images"

function Button({text, textClassName, arrowClassName}) {
  return (
    <button className="w-full h-full flex items-center group cursor-pointer">
      <div className={`px-6 py-2 bg-[#ffe500] text-sm text-center rounded-3xl text-black font-gabarito font-bold ${textClassName}`}>{text}</div>
      <div className={`w-9 h-9 flex items-center justify-center bg-[#ffe500] rounded-full -translate-x-4 ${arrowClassName}`}>
        <img className="group-hover:rotate-52 transition-transform duration-1000 ease-in-out" src={Arrow} alt="Arrow" />
      </div>
    </button>
  );
}

export default Button;
