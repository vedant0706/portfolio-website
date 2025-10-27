import BookCall from "@/components/BookCall";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import React from "react";

const Work = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="pt-12 sm:pt-10 md:pt-16 lg:pt-18 relative">
        <Projects />
      </div>
      <BookCall />
      <Footer />
    </div>
  );
};

export default Work;
