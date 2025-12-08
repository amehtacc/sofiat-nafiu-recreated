import React, { useState } from "react";
import ProcessCard from "../components/ProcessCard";
function HowToProcess() {
  const [openIndex, setOpenIndex] = useState(null);

  const processDetails = [
    {
        count:"01",
        title:"UX design",
        details:"UX design, User Research, User Psychology, Wireframing, Prototyping, Usability Testing, Interface Design, Interaction Design, Visual Design, Information Architecture, Design Systems",
        expandedHeight:"h-32 sm:h-20 md:h-14 2xl:h-8",
    },
    {
        count:"02",
        title:"Branding",
        details:"Brand design, Brand identity, Brand Strategy, Logo, Brand assets (Color, typography, pattern) Marketing Materials, Custom icon illustration, Email Template design, Brand guideline, Pitch deck",
        expandedHeight:"h-32 sm:h-20 md:h-14",
    },
    {
        count:"03",
        title:"Visual design",
        details:"User interface, Web design, Color theory & use, Typography skills, Visual aesthetic, layout",
        expandedHeight:"h-18 md:h-8",
    },
    {
        count:"04",
        title:"Soft Skills",
        details:"Creativity, Time management, Collaboration, Problem solving, Critical thinking, Communication",
        expandedHeight:"h-20 md:h-8",
    },
  ]
  return (
    <section className="relative w-full px-4 lg:px-10">
      <div className="w-full h-full pb-14 border-x border-[rgb(44,4,18)]">
        <h1 className="lg:w-[50%] text-4xl font-semibold py-6 px-2 lg:px-5">
          {" "}
          How I transform your ideas into captivating stories!{" "}
        </h1>
        {processDetails.map((process, index) => (
            <ProcessCard 
            key={index}
            index={index}
            count={process.count}
            title={process.title}
            details={process.details}
            expandedHeight={process.expandedHeight}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            />
        ))}
      </div>
    </section>
  );
}

export default HowToProcess;
