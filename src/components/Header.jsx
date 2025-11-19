import React from "react";
import { Logo_Black, Logo_Yellow, Arrow } from "../assets/images";
import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 w-full h-16 px-10 z-50 mx-auto bg-[rgba(255,253,235,1)]">
      <div className="w-full h-full py-2 px-8 border-x border-b border-[rgb(44,4,18)] flex items-center justify-between">
        <div>
          <a href="#">
            <img className="w-8 h-auto" src={Logo_Black} alt="Logo" />
          </a>
        </div>

        <div className="flex w-fit items-center gap-2 group/main">
          <a className="w-full h-full flex items-center cursor-pointer group/item">
            <div className="px-6 py-2 bg-[#ffe500] text-sm text-center rounded-3xl text-black font-gabarito translate-x-2 group-hover/item:-translate-x-1 transition-transform duration-1000 ease-in-out">
              hello@gmail.com
            </div>
            <div className="w-9 h-9 flex items-center justify-center bg-[#ffe500] rounded-full -translate-x-2 group-hover/item:translate-x-1 transition-transform duration-1000 ease-in-out">
              <img
                className="group-hover/item:rotate-52 transition-transform duration-1000 ease-in-out"
                src={Arrow}
                alt="Arrow"
              />
            </div>
          </a>
          <button className="py-1 px-4 flex items-center justify-center gap-1 bg-[#2c0412] text-[#ffe500] rounded-3xl group-hover/main:translate-x-4 hover:translate-x-0 transition-transform duration-1000 ease-in-out cursor-pointer">
            <p className="mb-0.5">Menu</p>
            <span>
              <Menu className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>

      <div className="w-[200px] font-gabarito absolute top-48 -right-8 px-4 py-3 bg-black text-white -rotate-90 flex items-center justify-between">
        <p className="font-medium text-2xl">Nominee</p>
        <p className="font-bold text-3xl inline-block rotate-90 -mr-2">W.</p>
      </div>
    </header>
  );
}

export default Header;
