import React, { useState } from "react";
import { Logo_Black, Logo_Yellow, Arrow } from "../assets/images.js";
import { Menu } from "lucide-react";
import SliderMenu from "./SliderMenu";

function Header() {
  const [openMenu, setOpenMenu] = useState();
  return (
    <>
    <header className="sticky top-0 w-full h-20 lg:h-16 lg:border-b border-[rgb(44,4,18)] px-4 lg:px-10 z-50 mx-auto bg-[rgba(255,253,235,1)]">
      <div className="w-full h-full px-4 lg:px-8 lg:py-2 border-x border-b lg:border-b-0 2xl:border-x-none border-[rgb(44,4,18)] flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#">
            <img className="w-8 h-auto" src={Logo_Black} alt="Logo" />
          </a>
        </div>

        <div className="flex w-fit items-center gap-2 group/main">
          <a className="w-full h-full hidden  lg:flex items-center cursor-pointer group/item">
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
          <button
            onClick={() => setOpenMenu((prev) => !prev)}
            className="px-3 lg:px-4 py-3 lg:py-1 flex items-center justify-center gap-1 bg-[#2c0412] text-[#ffe500] rounded-full lg:rounded-3xl group-hover/main:translate-x-4 hover:translate-x-0 transition-transform duration-1000 ease-in-out cursor-pointer"
          >
            <p className="mb-0.5 hidden lg:block">Menu</p>
            <span>
              <Menu className="lg:w-5 lg:h-5" />
            </span>
          </button>
        </div>
      </div>

      <div className="w-[200px] font-gabarito absolute top-48 -right-13.5 lg:-right-7.5 px-4 py-3 bg-black text-white -rotate-90 flex items-center justify-between">
        <p className="font-medium text-2xl">Nominee</p>
        <p className="font-bold text-3xl inline-block rotate-90 -mr-2">W.</p>
      </div>
    </header>
    <SliderMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
    </>
  );
}

export default Header;
