import React from "react";
import { XCircle } from "lucide-react";
import {
  Logo_Black,
  Arrow,
  My_Project,
  Arrow_Small_Yellow,
} from "../assets/images";

function SliderMenu({ openMenu, setOpenMenu }) {
  return (
    <div
      className={`w-full h-screen mx-auto font-gabarito flex items-center bg-white fixed top-20 lg:top-0 z-50 overflow-hidden ${
        openMenu ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-1100 ease-in-out`}
    >
      <div className="w-1/2 hidden lg:block h-full bg-[#ffe500]">
        <div className="h-16 border-b border-[rgb(44,4,18)] pl-16">
          <div className="h-full flex items-center px-6 border-l border-[rgb(44,4,18)]">
            <a href="#">
              <img className="w-8 h-auto" src={Logo_Black} alt="Logo" />
            </a>
          </div>
        </div>

        <div className="w-full h-full flex items-center">
          <div className="w-16 h-full flex items-center justify-center line">
            <h1 className="rotate-270 mb-10 text-[rgb(44,4,18)] text-4xl font-architectsDaughter tracking-[30px]">
              CREATIVITY
            </h1>
          </div>
          <div className="w-full h-full border-l border-[rgb(44,4,18)] bg-[#fffdeb]">
            <img
              className="w-full h-full object-cover"
              src={My_Project}
              alt="My_Project"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-full px-4 lg:px-0 bg-[#fffdeb] lg:bg-[#100a0d]">
        <div className="h-16 hidden lg:flex items-center justify-between lg:justify-end border-x border-gray-300 lg:border-none px-5">
          <div className="flex w-fit items-center gap-2 group/main">
            <a className="w-full h-full hidden lg:flex items-center cursor-pointer group/item">
              <div className="px-6 py-2 bg-[#ffe500] text-sm text-center rounded-3xl text-black translate-x-2 group-hover/item:-translate-x-1 transition-transform duration-1000 ease-in-out">
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
              onClick={() => setOpenMenu(prev => !prev)}
              className="px-3 py-1 flex items-center justify-center gap-1 bg-[#2c0412] text-[#ffe500] rounded-3xl group-hover/main:translate-x-4 hover:translate-x-0 transition-transform duration-1000 ease-in-out cursor-pointer"
            >
              <p className="mb-0.5">Close</p>
              <span>
                <XCircle className="lg:w-5 lg:h-5" />
              </span>
            </button>
          </div>
        </div>

        <div className="h-[91%] w-full flex flex-col justify-between border-x border-[rgb(44,4,18)] lg:border-none pb-16 lg:pt-16">
          <div className="lg:border-t border-[rgb(32,30,31)] pt-8 lg:pt-0">
            <div className="px-5 md:px-10 py-5 border-b border-[rgb(32,30,31)] text-2xl text-[rgb(123,117,120)]">
              <a
                href="#"
                className="inline-block text-black lg:text-white hover:text-[#ffe500] hover:line-through hover:translate-x-5 transition-all duration-400 ease-in-out"
              >
                My Works
              </a>
            </div>
            <div className="px-5 md:px-10 py-5 border-b border-[rgb(32,30,31)] text-2xl text-[rgb(123,117,120)]">
              <a
                href="#"
                className="inline-block hover:text-[#ffe500] hover:line-through hover:translate-x-5 transition-all duration-400 ease-in-out"
              >
                Fusion
              </a>
            </div>
            <div className="px-5 md:px-10 py-5 border-b border-[rgb(32,30,31)] text-2xl text-[rgb(123,117,120)]">
              <a
                href="#"
                className="inline-block hover:text-[#ffe500] hover:line-through hover:translate-x-5 transition-all duration-400 ease-in-out"
              >
                About Sofiat
              </a>
            </div>
            <div className="px-5 md:px-10 py-5 border-b border-[rgb(32,30,31)] text-2xl text-[rgb(123,117,120)]">
              <a
                href="#"
                className="inline-block hover:text-[#ffe500] hover:line-through hover:translate-x-5 transition-all duration-400 ease-in-out"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="px-7 lg:px-12">
            <h1 className="text-2xl text-[#2c0412] lg:text-[#ffe500]">
              Connect on Socials
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <p>
                  <a
                    href="#"
                    className="text-[#2c0412] lg:text-[#bab5b8] hover:text-[#ffe500] hover:line-through transition-all duration-300 ease-in-out"
                  >
                    email
                  </a>
                  <span className="text-[#ffe500] ml-1 text-xl">|</span>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-[#2c0412] lg:text-[#bab5b8] hover:text-[#ffe500] hover:line-through transition-all duration-300 ease-in-out"
                  >
                    linkedIn
                  </a>
                  <span className="text-[#ffe500] ml-1 text-xl">|</span>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-[#2c0412] lg:text-[#bab5b8] hover:text-[#ffe500] hover:line-through transition-all duration-300 ease-in-out"
                  >
                    twitter
                  </a>
                  <span className="text-[#ffe500] ml-1 text-xl">|</span>
                </p>
                <p className="flex">
                  <a
                    href="#"
                    className="text-[#2c0412] lg:text-[#bab5b8] hover:text-[#ffe500] hover:line-through transition-all duration-300 ease-in-out"
                  >
                    behance
                  </a>
                </p>
              </div>

              <div>
                <img
                  className="w-8"
                  src={Arrow_Small_Yellow}
                  alt="Arrow_Small_Yellow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderMenu;
