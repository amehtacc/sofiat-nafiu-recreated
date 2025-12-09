import React from "react";
import { Arrow_Small_Yellow } from "../assets/images";
function Footer() {
  return (
    <footer className="relative w-full bg-[#100a0d] lg:bg-transparent px-4 lg:px-10 overflow-hidden">
      <div className="w-full h-full text-white font-gabarito lg:bg-[#100a0d]">
        <div className="border-x 2xl:border-none border-[rgb(74,69,71)] px-5 pt-5 lg:pt-10 pb-10">
          <h1 className="lg:w-[70%] text-4xl lg:text-[4rem] lg:leading-none">
            {" "}
            The journey to transform ideas into unforgettable memories{" "}
            <span className="text-[#ffe500]">starts here!</span>
          </h1>
        </div>

        <div className="border-b border-[rgb(74,69,71)] -mx-5 lg:mx-0"></div>

        <div className="relative lg:hidden flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-full flex items-center justify-center bg-[#201e1f]">
              <img
                className="w-8 rotate-90 lg:rotate-0"
                src={Arrow_Small_Yellow}
                alt="Arrow_Small_Yellow_Right"
              />
            </div>        
        </div>

        <div>
          <div className="border-x 2xl:border-none border-[rgb(74,69,71)] px-5 py-12 lg:py-10">
            <p className="lg:w-[25%] text-[#bab5b8] font-thin">
              {" "}
              Have a project in mind or would like to work with me? Get in
              touch!{" "}
            </p>
          </div>

          <div className="relative flex items-center justify-center border-b border-[rgb(74,69,71)]">
            <div className="absolute w-12 h-12 rounded-full hidden lg:flex items-center justify-center bg-[#201e1f]">
              <img
                className="w-8 rotate-90 lg:rotate-0"
                src={Arrow_Small_Yellow}
                alt="Arrow_Small_Yellow_Right"
              />
            </div>
          </div>

          <div className="border-x 2xl:border-none flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-0 border-[rgb(74,69,71)] lg:py-10">
            <div className="px-5 py-10 lg:py-0">
              <h1 className="text-2xl text-[#ffe500]">Connect on Socials</h1>
              <div className="flex items-center mt-2 lg:mt-0 gap-3">
                <p>
                  <a href="#" className="text-[#bab5b8]">
                    email
                  </a>
                  <span className="text-[#ffe500] ml-2">|</span>
                </p>
                <p>
                  <a href="#" className="text-[#bab5b8]">
                    linkedIn
                  </a>
                  <span className="text-[#ffe500] ml-2">|</span>
                </p>
                <p>
                  <a href="#" className="text-[#bab5b8]">
                    twitter
                  </a>
                  <span className="text-[#ffe500] ml-2">|</span>
                </p>
                <p>
                  <a href="#" className="text-[#bab5b8]">
                    behance
                  </a>
                </p>
              </div>
            </div>

            <div className="text-sm lg:text-base text-[#7b7578] px-5 lg:px-0 py-10 lg:py-0 lg:mr-10 border-t border-[rgb(74,69,71)] lg:border-none">
              <p>Re-created with ❤️ by</p>
              <p className="text-white">
                <a href="https://github.com/amehtacc" target="_blank">
                  Aryan Mehta
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-[rgb(74,69,71)] -mx-5 lg:mx-0"></div>

        <div className="flex items-center justify-center border-x 2xl:border-none border-[rgb(74,69,71)] px-5 py-8">
            <p className="text-white font-medium">
                <span className="mr-1"> (c) Sofiat Nafiu 2025.</span>
                <span>All rights reserved.</span>
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
