import React from "react";
import {Arrow} from "../assets/images"

function Button({text}) {
  return (
    <button className="w-full h-full flex items-center group/main cursor-pointer">
      <div className="px-6 py-2 bg-[#ffe500] text-sm text-center rounded-3xl text-black font-gabarito translate-x-2 group-hover/main:-translate-x-1 group-hover/item:translate-x-2 transition-transform duration-1000 ease-in-out">{text}</div>
      <div className="w-9 h-9 flex items-center justify-center bg-[#ffe500] rounded-full -translate-x-2 group-hover/main:translate-x-1 group-hover/item:-translate-x-2 transition-transform duration-1000 ease-in-out">
        <img className="group-hover/main:rotate-52 transition-transform duration-1000 ease-in-out" src={Arrow} alt="Arrow" />
      </div>
    </button>
  );
}

export default Button;
