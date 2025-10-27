import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { GoArrowRight } from "react-icons/go";
import { MdContentCopy } from "react-icons/md";
import AboutMe from "../components/AboutMe";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import BookCall from "@/components/BookCall";
import GradientText from "@/components/GradientText";
import GlareHover from "@/components/GlareHover";

const Home = () => {
  const [copied, setCopied] = useState(false);
  const email = "vedantjadhav173@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <Navbar />    
      {/* Announcement Banner */}
      <div className="flex items-center justify-center pt-16 sm:pt-20 md:pt-24 px-4 sm:px-8 md:px-10 lg:px-0">
        <h1 className="border border-gray-700 rounded-full p-1.5 sm:p-2 md:p-2 text-xs sm:text-sm md:text-base lg:text-lg text-white flex backdrop-blur-3xl flex-wrap sm:flex-nowrap justify-center">
          <span className="flex items-center justify-center rounded-full bg-cyan-600 px-2 sm:px-2.5 md:px-3 pb-0.5 sm:pb-1 text-xs sm:text-sm md:text-lg">
            new
          </span>
          <GradientText
            colors={["#ff1cf7", "#00f0ff", "#ff1cf7", "#00f0ff", "#ff1cf7"]}
            animationSpeed={10}
            showBorder={false}
            className="text-xs sm:text-sm md:text-base lg:text-lg"
          >
            Next Ventures is live!
          </GradientText>
        </h1>
      </div>

      {/* Hero Section */}
      <div className="text-center pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6 md:px-10 lg:px-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight">
          I help founders turn ideas
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight">
          into seamless <span className="italic">digital experiences.</span>
        </h1>

        <p className="roboto-para flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300 mt-20 tracking-wide font-semibold drop-shadow-[0_0_10px_rgba(147,197,253,0.5)] hover:drop-shadow-[0_0_20px_rgba(147,197,253,0.8)] transition-all duration-300">
          Hello, I'm Vedant Jadhav, a Front-End Developer
        </p>

        {/* Connect & Email */}
        <div className="pt-6 sm:pt-8 md:pt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <button onClick={() => window.location.href = '/contact'} className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg text-white cursor-pointer rounded-md">
              Let's Connect <GoArrowRight />
            </button>
          </GlareHover>

          <p
            onClick={handleCopy}
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-white cursor-pointer select-none"
          >
            <MdContentCopy className="hover:text-blue-400 transition-colors duration-200 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
            {copied ? (
              <span className="text-blue-400 font-medium transition-all duration-300">
                Copied!
              </span>
            ) : (
              <span className="hover:text-blue-400 transition-all duration-300 break-all sm:break-normal">
                {email}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="mt-12 sm:mt-16 md:mt-20">
        <AboutMe />
        <Projects />
        <BookCall />
        <Footer />
      </div>
    </div>
  );
};

export default Home;