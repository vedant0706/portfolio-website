import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub as SiGithubIcon,
  SiFramer,
  SiNpm,
  SiPostman,
  SiFigma,
  SiGithub,
} from "react-icons/si";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoLoop from "@/components/ThemeComponents/LogoLoop";
import BookCall from "@/components/BookCall";
import GradientText from "@/components/ThemeComponents/GradientText";
import Background from "@/pages/Background";

const About = () => {
  const techLogos = [
    {
      node: (
        <span
          className="bg-[#F7DF1E] text-black p-2 sm:p-3 md:p-4 rounded"
          title="JavaScript"
        >
          <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "JavaScript",
    },
    {
      node: (
        <span
          className="bg-[#61DAFB] text-black p-2 sm:p-3 md:p-4 rounded"
          title="React"
        >
          <SiReact className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "React",
    },
    {
      node: (
        <span
          className="bg-[#06B6D4] text-white p-2 sm:p-3 md:p-4 rounded"
          title="Tailwind CSS"
        >
          <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "Tailwind CSS",
    },
    {
      node: (
        <span
          className="bg-[#339933] text-white p-2 sm:p-3 md:p-4 rounded"
          title="Node Js"
        >
          <SiNodedotjs className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "Node.js",
    },
    {
      node: (
        <span
          className="bg-[#000000] text-white p-2 sm:p-3 md:p-4 rounded"
          title="Express Js"
        >
          <SiExpress className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "Express.js",
    },
    {
      node: (
        <span
          className="bg-[#4479A1] text-white p-2 sm:p-3 md:p-4 rounded"
          title="MySQL"
        >
          <SiMysql className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "MySQL",
    },
    {
      node: (
        <span
          className="bg-[#47A248] text-white p-2 sm:p-3 md:p-4 rounded"
          title="MongoDB"
        >
          <SiMongodb className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "MongoDB",
    },
    {
      node: (
        <span
          className="bg-[#F05032] text-white p-2 sm:p-3 md:p-4 rounded"
          title="Git"
        >
          <SiGit className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "Git",
    },
    {
      node: (
        <span
          className="bg-[#181717] text-white p-2 sm:p-3 md:p-4 rounded"
          title="GitHub"
        >
          <SiGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "GitHub",
    },
    {
      node: (
        <span
          className="bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] text-white p-2 sm:p-3 md:p-4 rounded"
          title="Figma"
        >
          <SiFigma className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "Figma",
    },
    {
      node: (
        <span
          className="bg-[#0055FF] text-white p-2 sm:p-3 md:p-4 rounded"
          title="Framer-Motion"
        >
          <SiFramer className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "Framer-Motion",
    },
    {
      node: (
        <span
          className="bg-[#CB3837] text-white p-2 sm:p-3 md:p-4 rounded"
          title="NPM"
        >
          <SiNpm className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "NPM",
    },
    {
      node: (
        <span
          className="bg-[#FF6C37] text-white p-2 sm:p-3 md:p-4 rounded"
          title="Postman"
        >
          <SiPostman className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </span>
      ),
      title: "Postman",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Background />
      <Navbar />

      <section className="pt-8 sm:pt-12 md:pt-12 px-8 sm:px-6 md:px-10 lg:px-20 relative -mx-[calc((100vw-100%)/2)] overflow-hidden overflow-y-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          {/* Left: Text */}
          <div className="w-full md:w-1/2">
            <p className="roboto-para text-xs sm:text-sm md:text-base lg:text-xl dark:text-gray-300 text-black mt-20 tracking-wide font-semibold drop-shadow-[0_0_10px_rgba(147,197,253,0.5)] hover:drop-shadow-[0_0_20px_rgba(147,197,253,0.8)] transition-all duration-300 sm:mb-3 md:mb-4">
              MORE ABOUT ME
            </p>
            <h2 className="heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              I'm Vedant, a
            </h2>
            <h2 className="heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-row sm:flex-row items-start sm:items-center gap-1 sm:gap-2 md:gap-3 tracking-tight pb-4 md:pb-6 lg:pb-10">
              creative
              <span className="italic">
                <GradientText
                  colors={[
                    "#ff1cf7",
                    "#00f0ff",
                    "#ff1cf7",
                    "#00f0ff",
                    "#ff1cf7",
                  ]}
                  showBorder={false}
                >
                  developer
                </GradientText>
              </span>
            </h2>
            {/* About Text */}
            <p className="roboto-para dark:text-gray-300 text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4">
              I'm Vedant Jadhav, a proactive front-end developer passionate
              about creating dynamic web experiences. From frontend to a little
              bit of backend, I thrive on solving complex problems with clean,
              efficient code. My expertise spans React and Node.js, and I'm
              always eager to learn more.
            </p>
            <p className="roboto-para dark:text-gray-300 text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4">
              When I'm not immersed in work, I'm exploring new ideas and staying
              curious. Life's about balance, and I love embracing every part of
              it.
            </p>
            <p className="roboto-para dark:text-gray-300 text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
              I believe in waking up each day eager to make a difference!
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 text-lg sm:text-xl md:text-2xl">
              <Link to="https://github.com/vedant0706" target="_blank" rel="noopener noreferrer">
                <FiGithub className="hover:text-white transition-all duration-200" />
              </Link>
              <Link to="https://linkedin.com/in/vedant-jadhav-0b1947340" target="_blank" rel="noopener noreferrer">
                <FiLinkedin className="hover:text-white transition-all duration-200" />
              </Link>
              <Link to="https://www.instagram.com/__vedanttt__23" target="_blank" rel="noopener noreferrer">
                <FiInstagram className="hover:text-white transition-all duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <p className="roboto-para text-black flex items-center justify-center pt-20 text-xs sm:text-sm md:text-base lg:text-xl dark:text-gray-300 mt-20 tracking-wide font-semibold drop-shadow-[0_0_10px_rgba(147,197,253,0.5)] hover:drop-shadow-[0_0_20px_rgba(147,197,253,0.8)] transition-all duration-300">
          MY SKILLS
        </p>
        <h2 className="heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-row sm:flex-row items-center justify-center gap-1 sm:gap-3 md:gap-4 pt-2 md:pt-4 lg:pt-6 text-center">
          The Secret
          <span className="italic">
            <GradientText
              colors={["#ff1cf7", "#00f0ff", "#ff1cf7", "#00f0ff", "#ff1cf7"]}
              showBorder={false}
            >
              Sauce
            </GradientText>
          </span>
        </h2>

        <div className="relative cursor-pointer mt-10 pb-4 sm:pb-6 md:pb-8 -mx-[calc((100vw-100%)/1.80)] overflow-hidden overflow-y-hidden">
          <LogoLoop
            logos={techLogos}
            speed={90}
            direction="left"
            logoHeight={32}
            gap={16}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </section>
      <BookCall />
      <Footer />
    </div>
  );
};

export default About;
