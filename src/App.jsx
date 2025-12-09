import React from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Works from "./sections/Works";
import HowToProcess from "./sections/HowToProcess";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="relative max-w-[1550px] mx-auto">
      <Header />
      <main>
        <Hero />
        <Works />
        <HowToProcess />
      </main>
      <Footer />
    </div>
  );
}

export default App;
