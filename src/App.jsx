import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Works from "./sections/Works";
import HowToProcess from "./sections/HowToProcess";
import Footer from "./sections/Footer";
import TypingAnimation from "./components/TypingAnimation";
import ImageAnimation from "./components/ImageAnimation";

function App() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 1) {
      setTimeout(() => setStep(2), 3300);
    } else if (step === 2) {
      setTimeout(() => setStep(3), 2000);
    }
  }, [step]);

  return (
    <>
      {step === 1 && <TypingAnimation />}
      {step === 2 && <ImageAnimation />}
      {step === 3 && (
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        
        className="relative max-w-[1550px] mx-auto">
          <Header />
          <main>
            <Hero />
            <Works />
            <HowToProcess />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
