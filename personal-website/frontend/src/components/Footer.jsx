import { FaLinkedin, FaGithub } from "react-icons/fa";
import selflogo from "../assets/selflogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-8 md:py-10 border-t border-gray-800 w-screen -mx-[calc((100vw-100%)/5)]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-10">
        {/* Left Section */}
        <div className="md:w-2/3">
          <div className="mb-3 sm:mb-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            <a href="/">
              <img
                src={selflogo}
                alt="Vedant Jadhav Logo"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
          <p className="roboto-para text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
            I'm Vedant - a front-end developer,
          </p>
          <p className="roboto-para text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
            freelancer & problem solver.
          </p>
          <p className="roboto-para text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
            Thanks for checking out my site!
          </p>
        </div>

        {/* Right Section (Links) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4 sm:gap-6 text-xs sm:text-sm">
          <div>
            <h3 className="font-mono text-md font-semibold text-gray-300 mb-2 sm:mb-3">
              General
            </h3>
            <ul className="roboto-para space-y-1 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-white hover:underline transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white hover:underline transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white hover:underline transition duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white hover:underline transition duration-300"
                >
                  Book a Call
                </Link>
              </li>
              <li>
                <Link
                  to="/links"
                  className="hover:text-white hover:underline transition duration-300"
                >
                  Links
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="roboto-para border-t border-gray-800 mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 -mx-[calc((100vw-100%)/5)] overflow-hidden overflow-y-hidden">
        <p className="text-center md:text-left">
          © 2025 Vedant Jadhav. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link to="/legal/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/legal/terms" className="hover:text-white transition">
            Terms & Conditions
          </Link>
        </div>

        <div className="flex justify-center md:justify-end items-center gap-3 sm:gap-4 text-base sm:text-lg">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-500 transition cursor-pointer" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-300 transition cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
}
