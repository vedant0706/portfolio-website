import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFramer,
  SiNpm,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { LogoLoop } from "@/components/LogoLoop";
import GradientText from "./GradientText";

const AboutMe = () => {
  const techLogos = [
    {
      node: (
        <span
          className="bg-[#F7DF1E] text-black p-2 sm:p-3 md:p-4 rounded"
          title="JavaScript"
        >
          <SiJavascript className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
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
          <SiReact className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
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
          <SiTailwindcss className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
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
          <SiNodedotjs className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
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
          <SiExpress className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
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
          <SiMysql className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
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
          <SiMongodb className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
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
          <SiGit className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
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
          <SiGithub className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
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
          <SiFigma className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
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
          <SiFramer className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
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
          <SiNpm className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
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
          <SiPostman className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" />
        </span>
      ),
      title: "Postman",
    },
  ];

  return (
    <div className="pt-8 xs:pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 px-3 xs:px-4 sm:px-6 md:px-10 lg:px-20 relative">
      {/* Section Title */}
      <p className="roboto-para text-xs sm:text-sm md:text-base lg:text-xl text-black dark:text-gray-300 mb-2 sm:mb-3 tracking-wide font-semibold drop-shadow-[0_0_10px_rgba(147,197,253,0.5)] hover:drop-shadow-[0_0_20px_rgba(147,197,253,0.8)] transition-all duration-300">
        KNOW ABOUT ME
      </p>

      <div className="">
        <h2 className="heading text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-2">
          Front-End Developer and
        </h2>
        <h2 className="heading text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight flex flex-wrap items-center sm:gap-2 mb-4 sm:mb-6">
          a little bit of
          <span className="italic">
            <GradientText
              colors={["#ff1cf7", "#00f0ff", "#ff1cf7", "#00f0ff", "#ff1cf7"]}
              showBorder={false}
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              everything
            </GradientText>
          </span>
        </h2>
      </div>

      {/* About Text */}
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-2xl">
        <p className="text-black dark:text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4">
          I'm Vedant Jadhav, a proactive front-end developer passionate about
          creating dynamic web experiences. From frontend to a little bit of
          backend, I thrive on solving complex problems with clean, efficient
          code. My expertise spans React and Node.js, and I'm always eager to
          learn more.
        </p>
        <p className="text-black dark:text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4">
          When I'm not immersed in work, I'm exploring new ideas and staying
          curious. Life's about balance, and I love embracing every part of it.
        </p>
        <p className="text-black dark:text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
          I believe in waking up each day eager to make a difference!
        </p>
      </div>

      {/* Social Links */}
      <div className="flex flex-row gap-3 sm:gap-4 text-base xs:text-lg sm:text-xl mb-6 xs:mb-8 sm:mb-12">
        <Link
          to="https://github.com/vedant0706"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FiGithub />
        </Link>
        <Link
          to="https://linkedin.com/in/vedant-jadhav-0b1947340"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <FiLinkedin />
        </Link>
        <Link
          to="https://www.instagram.com/__vedanttt__23"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          <FiInstagram />
        </Link>
      </div>

      {/* Skills Section */}
      <p className="roboto-para flex items-center justify-center text-xs sm:text-sm md:text-base lg:text-xl text-black dark:text-gray-300 mb-2 sm:mb-3 tracking-wide font-semibold pt-20 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)] hover:drop-shadow-[0_0_20px_rgba(147,197,253,0.8)] transition-all duration-300">
        MY SKILLS
      </p>
      <h2 className="text-black dark:text-white heading text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-row sm:flex-row items-center justify-center sm:gap-2 md:gap-3 mb-6 md:mb-8">
        The Secret
        <span className="italic">
          <GradientText
            colors={["#ff1cf7", "#00f0ff", "#ff1cf7", "#00f0ff", "#ff1cf7"]}
            showBorder={false}
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            Sauce
          </GradientText>
        </span>
      </h2>

      {/* Logo Loop */}
      <div className="relative cursor-pointer -mx-[calc((90vw-100%)/0.60)] xs:-mx-4 sm:-mx-6 md:-mx-[calc((100vw-100%)/1.80)] overflow-hidden overflow-y-hidden">
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
    </div>
  );
};

export default AboutMe;
