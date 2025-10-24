import React from "react";
import ecommerce from "../assets/e-commerce.png"
import quickblog from "../assets/quickblog.png"
import gymWebsite from "../assets/gym-website.png"
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRazorpay,
  SiFramer,
  SiFontawesome,
} from "react-icons/si";
import { TfiArrowCircleRight } from "react-icons/tfi";
import CurvedLoop from "./CurvedLoop";
import DecryptedText from "./DecryptedText";
import GradientText from "./GradientText";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="pb-8 pt-20 sm:pb-12 md:pb-16 lg:pb-24 px-1 sm:px-6 md:px-10 lg:px-5">
      <p className="roboto-para flex items-center justify-center text-xs sm:text-sm md:text-base lg:text-xl text-gray-300 mb-2 sm:mb-3 tracking-wide font-semibold drop-shadow-[0_0_10px_rgba(147,197,253,0.5)] hover:drop-shadow-[0_0_20px_rgba(147,197,253,0.8)] transition-all duration-300">
        FEATURED CASE STUDIES
      </p>
      <h1 className="heading text-white text-xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl flex flex-wrap items-center justify-center pt-2 sm:pt-3 md:pt-5">
        Curated
        <span className="italic">
          <GradientText
            colors={["#ff1cf7, #00f0ff, #ff1cf7, #00f0ff, #ff1cf7"]}
            animationSpeed={3}
            showBorder={false}
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
          >
            Work
          </GradientText>
        </span>
      </h1>

      {/* E-Commerce Project */}
      <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-24 flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-2">
        <div className="p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-2xl md:rounded-3xl lg:rounded-4xl bg-zinc-950 w-full max-w-sm md:max-w-md lg:max-w-none lg:w-auto">
          <div className="bg-pink-200 shadow-lg sm:shadow-xl shadow-pink-200/50 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer hover:shadow-pink-200/70 transition-shadow duration-300">
            <Link
              to="https://ecommerce-app-frontend-ochre.vercel.app"
              target="_blank"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 md:p-6 lg:p-8">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-semibold text-center sm:text-left max-w-xs md:max-w-sm lg:max-w-lg">
                  A space for entrepreneurs to pitch ideas, explore others, and
                  gain exposure with clean design
                </p>
                <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-0 sm:ml-3 md:ml-4 lg:ml-8">
                  <TfiArrowCircleRight />
                </p>
              </div>
              <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 pb-20 sm:pb-24 md:pb-32 lg:pb-40 xl:pb-48">
                <img
                  src={ecommerce}
                  className="w-full h-full rounded-lg sm:rounded-lg md:rounded-xl hover:scale-105 md:hover:scale-110 duration-500 hover:-rotate-1 md:hover:-rotate-2 lg:hover:-rotate-5 shadow-lg md:shadow-2xl transition-transform"
                  alt="E-Commerce Project"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-auto max-w-2xl lg:max-w-xl px-2">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl heading">
            <DecryptedText
              text="E-Commerce"
              animateOn="view"
              revealDirection="center"
            />
          </h3>
          <br />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 roboto-para leading-relaxed">
            A platform designed for early-stage entrepreneurs to pitch, browse,
            and engage with startup ideas. It's built to impress both users and
            investors with blazing speed, compelling visuals, and a modern tech
            stack.
          </p>
          <br />
          <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-4 sm:mb-6 md:mb-8 roboto-para text-xs sm:text-sm md:text-base lg:text-lg">
            <li className="flex gap-2 items-start">
              <span className="text-pink-300 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Leveraged Partial Prerendering and After for faster loading.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-pink-300 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Simplified idea submission with a clean, intuitive design.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-pink-300 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Enhanced browsing with seamless performance optimization.
              </span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mt-3 md:mt-6">
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-cyan-400 text-xs md:text-lg">
                <FaReact />
              </span>
              React
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-cyan-400 text-xs md:text-lg">
                <SiTailwindcss />
              </span>
              Tailwind
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-lime-500 text-xs md:text-lg">
                <FaNodeJs />
              </span>
              Node
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-xs md:text-lg">
                <SiExpress />
              </span>
              Express
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-green-500 text-xs md:text-lg">
                <SiMongodb />
              </span>
              MongoDB
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-blue-600 text-xs md:text-lg">
                <SiRazorpay />
              </span>
              Razorpay
            </p>
          </div>
        </div>
      </div>

      {/* Quick Blog */}
      <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-24 flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-2">
        <div className="p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-2xl md:rounded-3xl lg:rounded-4xl bg-zinc-950 w-full max-w-sm md:max-w-md lg:max-w-none lg:w-auto">
          <div className="bg-violet-600 shadow-lg sm:shadow-xl shadow-violet-600/50 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer hover:shadow-violet-600/70 transition-shadow duration-300">
            <Link to="https://quickblog-ochre.vercel.app" target="_blank">
              <div className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 md:p-6 lg:p-8">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black font-semibold text-center sm:text-left max-w-xs md:max-w-sm lg:max-w-lg">
                  A fast and intuitive blogging platform for writers to create,
                  publish, and share their stories with a modern, responsive
                  design
                </p>
                <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-0 sm:ml-3 md:ml-4 lg:ml-8">
                  <TfiArrowCircleRight />
                </p>
              </div>
              <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 pb-20 sm:pb-24 md:pb-32 lg:pb-40 xl:pb-48">
                <img
                  src={quickblog}
                  className="w-full h-auto rounded-lg sm:rounded-lg md:rounded-xl hover:scale-105 md:hover:scale-110 duration-500 hover:-rotate-1 md:hover:-rotate-2 lg:hover:-rotate-5 shadow-lg md:shadow-2xl transition-transform"
                  alt="Quick-Blog Project"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-auto max-w-2xl lg:max-w-xl px-2">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl heading">
            <DecryptedText
              text="Quick Blog"
              animateOn="view"
              revealDirection="center"
            />
          </h3>
          <br />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 roboto-para leading-relaxed">
            QuickBlog is a lightweight blogging platform that empowers writers
            to quickly create and publish engaging content. Built with
            performance and user experience in mind, it offers a seamless
            interface for composing posts, managing drafts, and reaching an
            audience with beautiful presentation and rapid load times.
          </p>
          <br />
          <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-4 sm:mb-6 md:mb-8 roboto-para text-xs sm:text-sm md:text-base lg:text-lg">
            <li className="flex gap-2 items-start">
              <span className="text-violet-600 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Optimized performance with fast page rendering and efficient
                caching strategies.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-violet-600 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Intuitive editor with real-time preview for composing and
                formatting blog posts.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-violet-600 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Responsive design ensuring seamless reading experience across
                all devices.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-violet-600 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Modern tech stack built for scalability and maintainability.
              </span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mt-3 md:mt-6">
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-cyan-500 text-xs md:text-lg">
                <FaReact />
              </span>
              React
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-cyan-400 text-xs md:text-lg">
                <SiTailwindcss />
              </span>
              Tailwind
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-lime-500 text-xs md:text-lg">
                <FaNodeJs />
              </span>
              Node
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-xs md:text-lg">
                <SiExpress />
              </span>
              Express
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-green-500 text-xs md:text-lg">
                <SiMongodb />
              </span>
              MongoDB
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-blue-600 text-xs md:text-lg">
                <SiRazorpay />
              </span>
              Razorpay
            </p>
          </div>
        </div>
      </div>

      {/* SP-Fitness GYM */}
      <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-24 flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-2">
        <div className="p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-2xl md:rounded-3xl lg:rounded-4xl bg-zinc-950 w-full max-w-sm md:max-w-md lg:max-w-none lg:w-auto">
          <div className="bg-zinc-800 shadow-lg sm:shadow-xl shadow-cyan-400/50 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer hover:shadow-cyan-400/70 transition-shadow duration-300">
            <Link to="https://sp-fitness-world.vercel.app" target="_blank">
              <div className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 md:p-6 lg:p-8">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-semibold text-center sm:text-left max-w-xs md:max-w-sm lg:max-w-lg">
                  Your ultimate fitness companion offering personalized workout
                  plans, progress tracking, and community support in one
                  powerful platform
                </p>
                <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-0 sm:ml-3 md:ml-4 lg:ml-8">
                  <TfiArrowCircleRight />
                </p>
              </div>
              <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 pb-20 sm:pb-24 md:pb-32 lg:pb-40 xl:pb-48">
                <img
                  src={gymWebsite}
                  className="w-full h-auto rounded-lg sm:rounded-lg md:rounded-xl hover:scale-105 md:hover:scale-110 duration-500 hover:-rotate-1 md:hover:-rotate-2 lg:hover:-rotate-5 shadow-lg md:shadow-2xl transition-transform"
                  alt="SP-Fiteness"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-auto max-w-2xl lg:max-w-xl px-2">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl heading">
            <DecryptedText
              text="SP-Fiteness GYM"
              animateOn="view"
              revealDirection="center"
            />
          </h3>
          <br />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 roboto-para leading-relaxed">
            A comprehensive gym and fitness platform designed to help members
            achieve their health goals. Features personalized workout routines,
            real-time progress tracking, class scheduling, trainer connections,
            and a vibrant community for motivation and accountability.
          </p>
          <br />
          <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-4 sm:mb-6 md:mb-8 roboto-para text-xs sm:text-sm md:text-base lg:text-lg">
            <li className="flex gap-2 items-start">
              <span className="text-cyan-400 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Personalized workout recommendations based on fitness level and
                goals.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-cyan-400 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Real-time progress tracking with visual analytics and
                performance metrics.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-cyan-400 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Seamless class booking and trainer scheduling with push
                notifications.
              </span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mt-3 md:mt-6">
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-cyan-500 text-xs md:text-lg">
                <FaReact />
              </span>
              React
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-cyan-400 text-xs md:text-lg">
                <SiTailwindcss />
              </span>
              Tailwind
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-lime-500 text-xs md:text-lg">
                <FaNodeJs />
              </span>
              Node
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-xs md:text-lg">
                <SiExpress />
              </span>
              Express
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-green-500 text-xs md:text-lg">
                <SiMongodb />
              </span>
              MongoDB
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-blue-600 text-xs md:text-lg">
                <SiRazorpay />
              </span>
              Razorpay
            </p>
          </div>
        </div>
      </div>

      {/* Personal Project */}
      <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-24 flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-2">
        <div className="p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-2xl md:rounded-3xl lg:rounded-4xl bg-zinc-950 w-full max-w-sm md:max-w-md lg:max-w-none lg:w-auto">
          <div className="bg-zinc-900 shadow-lg sm:shadow-xl shadow-zinc-200/50 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer hover:shadow-zinc-200/70 transition-shadow duration-300">
            <Link
              to="https://ecommerce-app-frontend-ochre.vercel.app/"
              target="_blank"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 md:p-6 lg:p-8">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-semibold text-center sm:text-left max-w-xs md:max-w-sm lg:max-w-lg">
                  A Capitivating Portfolio Showcasing Innovative Web Development
                  and UI/UX
                </p>
                <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-0 sm:ml-3 md:ml-4 lg:ml-8">
                  <TfiArrowCircleRight />
                </p>
              </div>
              <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 pb-20 sm:pb-24 md:pb-32 lg:pb-40 xl:pb-48">
                <img
                  // src={ecommerce}
                  className="w-full h-auto rounded-lg sm:rounded-lg md:rounded-xl hover:scale-105 md:hover:scale-110 duration-500 hover:-rotate-1 md:hover:-rotate-2 lg:hover:-rotate-5 shadow-lg md:shadow-2xl transition-transform"
                  alt="E-Commerce Project"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-auto max-w-2xl lg:max-w-xl px-2">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl heading">
            <DecryptedText
              text="Personal Portfolio"
              animateOn="view"
              revealDirection="center"
            />
          </h3>
          <br />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 roboto-para leading-relaxed">
            A personal portfolio showcasing modern web design and user
            experience with sleek layouts, smooth animations, and highlights of
            my skills and projects.
          </p>
          <br />
          <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-4 sm:mb-6 md:mb-8 roboto-para text-xs sm:text-sm md:text-base lg:text-lg">
            <li className="flex gap-2 items-start">
              <span className="text-pink-300 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Integrated PostgreSQL and Prisma for efficient data handling.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-pink-300 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Built with Next.js and TypeScript for performance and
                scalability.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-pink-300 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Project showcase with detailed case studies, technologies used,
                and live links. Zod.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-pink-300 text-sm sm:text-base md:text-lg mt-0.5 flex-shrink-0">
                ✦
              </span>
              <span>
                Secured authentication with Auth.js for user account management.
              </span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mt-3 md:mt-6">
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-cyan-500 text-xs md:text-lg">
                <FaReact />
              </span>
              React
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-cyan-400 text-xs md:text-lg">
                <SiTailwindcss />
              </span>
              Tailwind
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-lime-500 text-xs md:text-lg">
                <FaNodeJs />
              </span>
              Node
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-xs md:text-lg">
                <SiExpress />
              </span>
              Express
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-green-500 text-xs md:text-lg">
                <SiMongodb />
              </span>
              MongoDB
            </p>
            <p className="flex items-center justify-center gap-1 text-xs sm:text-md md:text-lg font-semibold border border-gray-600 bg-gray-950 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg">
              <span className="text-blue-600 text-xs md:text-lg">
                <SiRazorpay />
              </span>
              Razorpay
            </p>
          </div>
        </div>
      </div>

      {/* Curved Loop Marquee */}
      <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-24 font-4xl sm:font-5xl md:font-4xl lg:font-3xl">
        <CurvedLoop
          marqueeText="DYNAMIC ✦ SCALABLE ✦ SEARCH ✦ OPTIMIZED ✦ INTERACTIVE ✦ SECURE ✦ RELIABLE ✦ ENGAGING ✦ ACCESSIBLE ✦ RESPONSIVE ✦"
          speed={3}
          curveAmount={0}
          interactive={true}
        />
      </div>
    </div>
  );
};

export default Projects;
