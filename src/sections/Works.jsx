import React from "react";
import Button from "../components/Button";
import ScrollContainer from "../components/ScrollContainer";
import HorizontalWorkCard from "../components/HorizontalWorkCard";
import VerticalWorkCard from "../components/VerticalWorkCard";
import {
  Ecoremind_Overlay_1,
  Ecoremind_Overlay_2,
  Edueat_Overlay_1,
  Edueat_Overlay_2,
  Glasgopal_Overlay_1,
  Glasgopal_Overlay_2,
  Spintowin_Overlay_1,
  Spintowin_Overlay_2,
  Arrow_Long_Yellow,
} from "../assets/images";

function Works() {
  return (
    <section className="relative w-full px-4 lg:px-10">
      <ScrollContainer />

      {/* Project - 01 */}
      <HorizontalWorkCard
        className="lg:flex-row "
        src1={Edueat_Overlay_2}
        src2={Edueat_Overlay_1}
        count="01"
        year="2024"
        projectsTech="SUSTAINABILITY | UI/UX DESIGN | MOBILE DESIGN | EDUCATION"
        projectTitle="EduEat;"
        projectDescription=" Promoting Healthy and Eco-Friendly Eating Habits for University Students. "
      />

      <div className="hidden lg:block border-b border-[rgb(44,4,18)]"></div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 pb-5 lg:pb-0 px-2 lg:px-5 w-full h-full border-x border-[rgb(44,4,18)]">
        {/* Project - 02 */}
        <VerticalWorkCard
          className="lg:border-r border-[rgb(44,4,18)]"
          src1={Ecoremind_Overlay_1}
          src2={Ecoremind_Overlay_2}
          count="02"
          year="2024"
          projectsTech="REMINDER APP | UI/UX DESIGN | MOBILE DESIGN "
          projectTitle="EcoRemind;"
          projectDescription=" Inovating the Reminder App with Voice Sound "
        />

        {/* Project - 03 */}
        <VerticalWorkCard
          imageClassName="justify-end"
          detailsClassName="lg:px-8"
          src1={Glasgopal_Overlay_1}
          src2={Glasgopal_Overlay_2}
          count="03"
          year="2023"
          projectsTech="SAAS APP | UI/UX DESIGN | MOBILE DESIGN"
          projectTitle="GlasgoPal;"
          projectDescription=" Personalized and rewarding app for new students to navigate their unfamiliar environment. "
        />
      </div>

      <div className="hidden lg:block border-b border-[rgb(44,4,18)]"></div>

      {/* Project - 04 */}
      <HorizontalWorkCard
        className="lg:flex-row-reverse"
        imageClassName="justify-end"
        src1={Spintowin_Overlay_1}
        src2={Spintowin_Overlay_2}
        count="04"
        year="2022"
        projectsTech="UI/UX DESIGN | WEBSITE DESIGN | WEB APP"
        projectTitle="Fortuna Hotel;"
        projectDescription=' How I Designed a "Spin to Win" Gamification Feature for a Hotel Booking Website '
      />

      <div className="border-b border-[rgb(44,4,18)]"></div>

      <div className="w-full h-full border-x lg:border-b border-[rgb(44,4,18)]">
        <div className="lg:pb-14">
          {/* Project - 05 */}
          <div className="w-full flex flex-col lg:flex-row lg:items-center px-2 py-5 lg:p-5 cursor-pointer">
            <div className="w-full lg:w-[40%] lg:mr-32">
              <div className="lg:hidden flex items-center gap-2 text-3xl font-marckScript font-thin mb-4">
                <h1 className="font-medium">05</h1>
                <img src={Arrow_Long_Yellow} alt="Arrow_Long_Yellow" />
                <p>2023</p>
              </div>
              <p className="text-xs font-architectsDaughter flex gap-1 text-[#2c0412]">
                <span className="tracking-[1.1px] lg:tracking-[1.8px] hidden lg:flex">
                  UI/UX DESIGN | VISUAL DESIGN | MARKETING DESIGN
                </span>
                <span className="tracking-[1.1px] lg:tracking-[1.8px] flex lg:hidden">
                  UI/UX DESIGN | VISUAL & MARKETING DESIGN
                </span>
              </p>
              <h1 className="font-gabarito text-xl lg:text-3xl font-semibold mt-4">
                Your go-to solution for secure and seamless transactions.
              </h1>
            </div>

            <h1 className="lg:w-[15%] hidden lg:block text-4xl text-[#4a4547] font-gabarito">
              {" "}
              Escrowly{" "}
            </h1>

            <div className="mt-5 lg:mt-0 lg:ml-auto">
              <div className="hidden lg:flex items-center gap-2 text-3xl font-marckScript font-thin mb-1">
                <h1 className="font-medium">05</h1>
                <img src={Arrow_Long_Yellow} alt="Arrow_Long_Yellow" />
                <p>2023</p>
              </div>

              <Button
                text="View live project"
                textClassName="group-hover:-translate-x-6 transition-transform duration-1000 ease-in-out"
              />
            </div>
          </div>

          <div className="border-b border-[rgb(44,4,18)]"></div>

          {/* Project - 06 */}
          <div className="w-full flex flex-col lg:flex-row lg:items-center px-2 py-5 lg:p-5 cursor-pointer">
            <div className="w-full lg:w-[40%] lg:mr-32">
              <div className="lg:hidden flex items-center gap-2 text-3xl font-marckScript font-thin mb-4">
                <h1 className="font-medium">06</h1>
                <img src={Arrow_Long_Yellow} alt="Arrow_Long_Yellow" />
                <p>2022</p>
              </div>
              <p className="text-xs font-architectsDaughter flex gap-1 text-[#2c0412]">
                <span className="tracking-[1.1px] lg:tracking-[1.8px] hidden lg:flex">
                  BRANDING | VISUAL DESIGN | MARKETING DESIGN
                </span>
                <span className="tracking-[1.1px] lg:tracking-[1.8px] flex lg:hidden">
                  BRANDING | VISUAL & MARKETING DESIGN
                </span>
              </p>
              <h1 className="font-gabarito text-xl lg:text-3xl font-semibold mt-4">
                Where developers and people in tech call home
              </h1>
            </div>

            <h1 className="lg:w-[15%] hidden lg:block text-4xl text-[#4a4547] font-gabarito">
              {" "}
              Devtranet{" "}
            </h1>

            <div className="mt-5 lg:mt-0 lg:ml-auto">
              <div className="hidden lg:flex items-center gap-2 text-3xl font-marckScript font-thin mb-1">
                <h1 className="font-medium">06</h1>
                <img src={Arrow_Long_Yellow} alt="Arrow_Long_Yellow" />
                <p>2022</p>
              </div>

              <Button
                text="View live project"
                textClassName="group-hover:-translate-x-6 transition-transform duration-1000 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
