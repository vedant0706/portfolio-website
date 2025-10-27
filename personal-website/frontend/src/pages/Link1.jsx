import React from "react";
import selflogo from "../assets/selflogo.png";
import { GoArrowUpRight } from "react-icons/go";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import Navbar from "../components/Navbar";
import BookCall from "../components/BookCall";
import Footer from "../components/Footer";
import GlareHover2 from "../components/GlareHover2";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center pt-16 sm:pt-20 md:pt-24 px-4 text-center">
        <img
          src={selflogo}
          alt="self-logo"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border border-white/50 bg-black rounded-full"
        />
        <p className="roboto-para pt-3 sm:pt-4 md:pt-5 text-lg sm:text-xl md:text-2xl font-medium">
          Vedant Jadhav
        </p>

        {/* Role Tags */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 pt-4 sm:pt-5 md:pt-5">
          <p className="px-2.5 sm:px-3 md:px-3 py-1 rounded-3xl text-xs sm:text-sm md:text-base text-blue-400 bg-blue-700/20">
            Developer
          </p>
          <p className="px-2.5 sm:px-3 md:px-3 py-1 rounded-3xl text-xs sm:text-sm md:text-base text-green-400 bg-green-600/20">
            Freelancer
          </p>
          <p className="px-2.5 sm:px-3 md:px-3 py-1 rounded-3xl text-xs sm:text-sm md:text-base text-violet-400 bg-violet-700/20">
            Problem Solver
          </p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 md:pt-10 px-4">
        {/* Website Button */}
        <GlareHover2
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <Link to="/">
            <button className="playwrite-us-modern-project-info text-white flex flex-row items-center justify-center gap-2 text-xs sm:text-sm md:text-base py-2 px-4 sm:px-5 md:px-6 rounded-3xl cursor-pointer border border-transparent hover:scale-105 transition-transform">
              Website
              <GoArrowUpRight className="pt-0.5" />
            </button>
          </Link>
        </GlareHover2>

        {/* Email Button */}
        <button
          className="playwrite-us-modern-project-info text-white text-xs sm:text-sm md:text-base border border-gray-500 py-2 px-3 sm:px-8 md:px-8 rounded-3xl cursor-pointer hover:bg-gray-200 hover:text-black transition-all flex items-center gap-2 overflow-hidden"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=vedantjadhav173@gmail.com&su=&body=",
              "_blank"
            )
          }
        >
          <span className="hidden sm:inline">vedantjadhav173@gmail.com</span>
          <span className="inline sm:hidden">vedantjadhav173@gmail</span>
          <GoArrowUpRight className="text-base" />
        </button>
      </div>

      {/* Social Links */}
      <div className="roboto-para tracking-wide flex flex-col gap-2.5 sm:gap-3 md:gap-4 w-[95%] sm:w-[500px] mx-auto mt-8 sm:mt-10 md:mt-10 pb-16 sm:pb-20 md:pb-24 px-2">
        {[
          {
            href: "https://linkedin.com/in/vedant-jadhav-0b1947340",
            label: "LinkedIn",
            icon: <FiLinkedin />,
          },
          {
            href: "https://github.com/vedant0706",
            label: "GitHub",
            icon: <FiGithub />,
          },
          {
            href: "https://x.com/74_vedant",
            label: "Twitter",
            icon: <RiTwitterXFill />,
          },
          {
            href: "https://www.instagram.com/__vedanttt__23",
            label: "Instagram",
            icon: <FiInstagram />,
          },
        ].map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative border p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl md:rounded-2xl border-gray-600 text-gray-300 hover:bg-gray-300 hover:text-black cursor-pointer flex items-center justify-center transition-all duration-300"
          >
            {/* Icon Left */}
            <span className="absolute left-3 sm:left-4 md:left-8 text-base sm:text-lg md:text-lg">
              {icon}
            </span>
            {/* Center Text */}
            <span className="text-center w-full text-sm sm:text-base md:text-base">
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* Book Call & Footer */}
      <BookCall />
      <Footer />
    </div>
  );
};

export default Links;
