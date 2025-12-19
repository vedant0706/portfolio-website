import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import Magnet from "./ThemeComponents/Magnet";
import Threads from "./ThemeComponents/Threads";
import selflogo from "../assets/selflogo.png";
import SplitText from "./ThemeComponents/SplitText";
import { color } from "framer-motion";

const BookCall = () => {
  const handleAnimationComplete = () => {
  };

  return (
    <div className="relative w-screen min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] text-center justify-center pt-20 xs:pt-6 sm:pt-10 pb-12 xs:pb-16 sm:pb-24 md:pb-36 -mx-[calc((100vw-100%)/5)]">
      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Threads amplitude={0.9} distance={0.10} enableMouseInteraction={true} />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-3 xs:px-4 sm:px-6 md:px-12 text-white space-y-3 xs:space-y-4 sm:space-y-6 m-auto">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <img
            src={selflogo}
            alt="logo img"
            className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-zinc-950 rounded-full"
          />
        </div>

        {/* Headings */}
        <div className="text-center mt-3 xs:mt-4 sm:mt-6 md:mt-10 space-y-2 sm:space-y-3 md:space-y-4">
          {/* First Line */}
          <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold leading-tight sm:leading-snug px-2">
            <SplitText
              text="FROM CONCEPT TO"
              className="inline-block font-medium text-center dark:text-white text-zinc-900"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <span className="ml-1 sm:ml-2 font-bold dark:text-white text-zinc-900">
              <SplitText
                text="CREATION"
                className="inline-block font-bold dark:text-white text-zinc-900 text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </span>
          </h4>

          {/* Second Line */}
          <h4 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold leading-tight sm:leading-snug px-2">
            <SplitText
              text="LET'S MAKE IT"
              className="inline-block font-medium text-center dark:text-white text-zinc-900"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <span className="ml-1 sm:ml-2 font-bold dark:text-white text-zinc-900">
              <SplitText
                text="HAPPEN!"
                className="inline-block font-bold dark:text-white text-zinc-900 text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </span>
          </h4>
        </div>

        {/* Button */}
        <Magnet padding={40} disabled={false} magnetStrength={10}>
          <div className="mt-3 xs:mt-4 sm:mt-6 border dark:border-white/70 border-black/70 bg-black/50 p-2 xs:p-2.5 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl px-4 xs:px-5 sm:px-6 md:px-8 dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white cursor-pointer transition-all duration-300">
            <button 
              onClick={() => window.location.href = '/contact'} 
              className="flex items-center justify-center gap-2 sm:gap-3 font-semibold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
            >
              Get in Touch
              <span className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
                <BsArrowRightCircle />
              </span>
            </button>
          </div>
        </Magnet>

        {/* Paragraphs */}
        <div className="space-y-1.5 xs:space-y-2 sm:space-y-2.5 mt-3 xs:mt-4 sm:mt-5 md:mt-6 text-xs xs:text-sm sm:text-base md:text-lg max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto px-2">
          <p className="dark:text-white text-black font-bold mb-2 sm:mb-3 md:mb-4 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide">
            I'm available for full-time roles & freelance projects.
          </p>
          <p className="dark:text-white text-black roboto-para tracking-wide text-xs xs:text-sm sm:text-base md:text-lg">
            I thrive on crafting dynamic web applications,
          </p>
          <p className="dark:text-white text-black roboto-para tracking-wide text-xs xs:text-sm sm:text-base md:text-lg">
            delivering seamless user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCall;