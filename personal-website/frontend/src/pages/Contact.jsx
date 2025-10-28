import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Linkedin, Github } from "lucide-react";
import { TbLocationShare } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";
import GradientText from "@/components/GradientText";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("quick");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const email = "vedantjadhav173@gmail.com";

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Validate name (at least 2 characters)
    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Validate message (at least 10 characters)
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    // Return true if no errors
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid - open Gmail with pre-filled data
      const subject = encodeURIComponent(`Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      // Updated Gmail URL with subject and body
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=vedantjadhav173@gmail.com&su=${subject}&body=${body}`,
        "_blank"
      );

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
    }
  };

  return (
    <div className="relative flex flex-col overflow-hidden">
      <Navbar />
      {/* Contact Heading Section */}
      <section className="pt-12 sm:pt-10 md:pt-12 lg:pt-14 px-4 sm:px-6 md:px-10 lg:px-20 text-center">
        <p className="roboto-para flex items-center justify-center text-xs sm:text-sm md:text-base lg:text-xl dark:text-gray-300 text-black mb-2 sm:mb-3 tracking-wide font-semibold drop-shadow-[0_0_10px_rgba(147,197,253,0.5)] hover:drop-shadow-[0_0_20px_rgba(147,197,253,0.8)] transition-all duration-300 md:mb-6">
          CONTACT
        </p>
        <h1 className="heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 flex flex-row md:flex-row items-center justify-center tracking-tight gap-1 md:gap-2">
          Get in
          <span className="italic">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
            >
              touch
            </GradientText>
          </span>
        </h1>

        {/* Email Copy Section */}
        <p
          onClick={handleCopy}
          className="dark:text-white text-black flex items-center justify-center gap-1.5 sm:gap-2 text-xl sm:text-lg md:text-xl lg:text-2xl cursor-pointer select-none"
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
      </section>

      {/* Contact Section */}
      <div className="w-screen font-mono flex items-center justify-center pt-10">
        <div
          className="dark:bg-gradient-to-br dark:from-gray-900 dark:to-black dark:rounded-2xl dark:border dark:border-gray-800 
        bg-gradient-to-br from-white/20 to-white/40 rounded-2xl border border-gray-900
        p-8 max-w-2xl w-full relative"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 dark:text-gray-400 text-white hover:text-white text-3xl border bg-black w-8 h-8 flex items-center justify-center rounded-full dark:hover:bg-red-600/30 hover:bg-red-600/80 cursor-pointer transition"
          >
            ×
          </button>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://linkedin.com/in/vedant-jadhav-0b1947340"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-gray-400 hover:text-blue-400 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/vedant0706"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-gray-400 hover:text-gray-300 transition"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Tabs */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setActiveTab("quick")}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition cursor-pointer ${
                activeTab === "quick"
                  ? "dark:bg-gray-800 bg-black dark:text-white hover:text-white text-white"
                  : "dark:bg-gray-800 bg-black dark:text-gray-400 dark:hover:text-white text-gray-400"
              }`}
            >
              Quick connect
            </button>
            <button
              onClick={() => setActiveTab("form")}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition cursor-pointer ${
                activeTab === "form"
                  ? "dark:bg-gray-800 bg-black dark:text-white hover:text-white text-white"
                  : "dark:bg-gray-800 bg-black dark:text-gray-400 dark:hover:text-white text-gray-400"
              }`}
            >
              Fill a form
            </button>
          </div>

          {/* Content */}
          {activeTab === "quick" ? (
            <div className="space-y-4">
              {/* Email Card */}
              <div
                className="border border-gray-700 bg-black rounded-xl p-5 hover:border-blue-500 transition cursor-pointer"
                onClick={() =>
                  window.open(
                    "mailto:vedantjadhav173@gmail.com?subject=&body="
                  )
                }
              >
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="text-blue-400" size={24} />
                  <h3 className="dark:text-white text-white font-semibold">
                    Email
                  </h3>
                </div>
                <p className="dark:text-gray-300 text-white text-lg mb-2 font-bold">
                  {email}
                </p>
                <p className="dark:text-gray-500 text-zinc-300 text-sm">
                  Send me an email directly
                </p>
              </div>

              {/* Availability */}
              <div className="flex items-center justify-center gap-2 mt-6 p-4 rounded-xl border border-gray-700 dark:bg-green-500/7 bg-green-500/40">
                <span className="w-2 h-2 dark:bg-green-500 bg-green-700 m-2 p-1 animate-pulse rounded-full"></span>
                <p className="dark:text-green-400 text-green-700 text-lg">
                  Currently available for new opportunities
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => {
                    const { name, value } = e.target;

                    setFormData((prev) => ({
                      ...prev,
                      [name]: value,
                    }));

                    setTouched((prev) => ({
                      ...prev,
                      [name]: true,
                    }));

                    // Validate and clear error if valid
                    let error = "";
                    if (!value.trim()) {
                      error = "Name is required";
                    } else if (value.trim().length < 2) {
                      error = "Name must be at least 2 characters";
                    }

                    setErrors((prev) => ({
                      ...prev,
                      [name]: error,
                    }));
                  }}
                  className={`w-full dark:bg-gray-800 bg-black border ${
                    touched.name && errors.name
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition`}
                />
                {touched.name && errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    const { name, value } = e.target;

                    setFormData((prev) => ({
                      ...prev,
                      [name]: value,
                    }));

                    setTouched((prev) => ({
                      ...prev,
                      [name]: true,
                    }));

                    // Validate and clear error if valid
                    let error = "";
                    if (!value.trim()) {
                      error = "Email is required";
                    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                      error = "Please enter a valid email";
                    }

                    setErrors((prev) => ({
                      ...prev,
                      [name]: error,
                    }));
                  }}
                  className={`w-full dark:bg-gray-800 bg-black border ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition`}
                />
                {touched.email && errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  placeholder="What would you like to discuss?"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => {
                    const { name, value } = e.target;

                    setFormData((prev) => ({
                      ...prev,
                      [name]: value,
                    }));

                    setTouched((prev) => ({
                      ...prev,
                      [name]: true,
                    }));

                    // Validate and clear error if valid
                    let error = "";
                    if (!value.trim()) {
                      error = "Message is required";
                    } else if (value.trim().length < 10) {
                      error = "Message must be at least 10 characters";
                    }

                    setErrors((prev) => ({
                      ...prev,
                      [name]: error,
                    }));
                  }}
                  className={`w-full dark:bg-gray-800 bg-black border ${
                    touched.message && errors.message
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none`}
                ></textarea>
                {touched.message && errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
                <p className="text-gray-500 text-xs mt-1 text-right">
                  {formData.message.length}/1000
                </p>
              </div>

              <button
                type="submit"
                className="text-xl font-sans w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
              >
                <span className="text-2xl">
                  <TbLocationShare />
                </span>
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
      {/* <BookCall /> */}
      <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <Footer />
      </div>
    </div>
  );
}
