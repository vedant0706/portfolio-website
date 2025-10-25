import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ContactDialog } from "/src/pages/ContactDialog.jsx";
import selflogo from "../assets/selflogo.png";

// ==================== CONSTANTS ====================
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Book a Call", isContact: true, href: "/contact" },
];

const MENU_ITEMS = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Work", ariaLabel: "View our work", link: "/projects" },
  { label: "Book a Call", ariaLabel: "Get in touch", link: "/contact" },
];

const SOCIAL_ITEMS = [
  { label: "GitHub", link: "" },
  { label: "LinkedIn", link: ""},
  { label: "Instagram", link: "" },
];

// ==================== STYLES ====================
const STYLES = {
  navBase:
    "px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-white text-[11px] xs:text-xs sm:text-sm font-semibold inline-block transition-all duration-300",
  navActive:
    "bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50",
  navInactive: "hover:bg-white/10 backdrop-blur-sm",
};

// ==================== COMPONENTS ====================

const NavItem = ({ item, isActive, onItemClick }) => {
  const classes = `${STYLES.navBase} ${
    isActive ? STYLES.navActive : STYLES.navInactive
  }`;

  return (
    <li>
      <Link to={item.href} onClick={onItemClick} className={classes}>
        {item.label}
      </Link>
    </li>
  );
};

// DesktopNav - Desktop navigation bar
const DesktopNav = ({ activeLink, onItemClick }) => {
  return (
    <ul className="hidden md:flex flex-row gap-0.5 md:gap-1 items-center backdrop-blur-2xl bg-white/5 border border-white/20 px-1.5 md:px-2 py-1.5 md:py-2 rounded-full shadow-2xl">
      {NAV_ITEMS.map((item, index) => (
        <NavItem
          key={`nav-${index}`}
          item={item}
          isActive={activeLink === item.href}
          onItemClick={() => onItemClick(item)}
        />
      ))}
    </ul>
  );
};

// Logo Component
const Logo = ({ onLogoClick }) => {
  return (
    <Link
      to="/"
      onClick={onLogoClick}
      className="flex-shrink-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center"
      aria-label="Home"
    >
      <img
        src={selflogo}
        alt="Logo"
        className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
      />
    </Link>
  );
};

// MobileMenuButton - Hamburger/Close button for mobile
const MobileMenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      className="md:hidden text-white p-1.5 xs:p-2 hover:bg-white/10 rounded-lg transition-all duration-300 flex items-center justify-center"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <X size={20} className="xs:w-6 xs:h-6" strokeWidth={2.5} />
      ) : (
        <Menu size={20} className="xs:w-6 xs:h-6" strokeWidth={2.5} />
      )}
    </button>
  );
};

// MobileMenu - Mobile menu items display
const MobileMenu = ({ isOpen, onClose, activeLink, onItemClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 md:hidden" onClick={onClose}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Menu Panel */}
      <div
        className="absolute top-12 xs:top-14 sm:top-16 right-0 w-56 xs:w-64 sm:w-72 bg-gradient-to-b from-black/90 to-black/80 backdrop-blur-xl border-l border-white/10 rounded-l-2xl shadow-2xl max-h-[calc(100vh-3rem)] xs:max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 xs:p-5 sm:p-6 flex flex-col gap-3 xs:gap-4">
          {/* Menu Items */}
          <ul className="flex flex-col gap-2 xs:gap-2.5 sm:gap-3">
            {MENU_ITEMS.map((item, index) => {
              const isActive = activeLink === item.link;
              const itemClass = `block w-full text-left px-3 xs:px-4 py-2 xs:py-2.5 sm:py-3 rounded-lg text-white text-sm xs:text-base font-medium transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50"
                  : "hover:bg-white/10"
              }`;

              {
                item.label === "Book a Call" ? (
                  <li key={index}>
                    <button
                      onClick={() => {
                        onItemClick(item);
                        onClose();
                      }}
                      className={itemClass}
                    >
                      Book a Call
                    </button>
                    <ContactDialog />
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      to={item.link}
                      onClick={() => {
                        onItemClick(item);
                        onClose();
                      }}
                      className={itemClass}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={index}>
                  <Link
                    to={item.link}
                    onClick={() => {
                      onItemClick(item);
                      onClose();
                    }}
                    className={itemClass}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Social Links */}
          <div className="border-t border-white/10 pt-3 xs:pt-4 mt-3 xs:mt-4">
            <p className="text-[10px] xs:text-xs text-white/60 uppercase tracking-wide font-semibold mb-2 xs:mb-3">
              Connect
            </p>
            <ul className="flex flex-col gap-1.5 xs:gap-2">
              {SOCIAL_ITEMS.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="text-white/80 hover:text-white hover:bg-white/10 px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg block transition-all duration-300 text-sm xs:text-base"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Navbar - Main navigation component
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  // Update active link when route changes
  useEffect(() => {
    setActiveLink(location.pathname);
    setMenuOpen(false);
  }, [location.pathname]);

  // Handle navigation item click
  const handleItemClick = (item) => {
    if (!item.isContact) {
      setActiveLink(item.href || item.link);
    }
    setMenuOpen(false);
  };

  // Handle logo click
  const handleLogoClick = () => {
    setActiveLink("/");
    setMenuOpen(false);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-xl bg-black/20 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 md:py-4">
          {/* Logo Section */}
          <Logo onLogoClick={handleLogoClick} />

          {/* Desktop Navigation */}
          <DesktopNav activeLink={activeLink} onItemClick={handleItemClick} />

          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeLink={activeLink}
        onItemClick={handleItemClick}
      />

      {/* Spacer for navbar height */}
      <div className="h-12 xs:h-14 sm:h-16 md:h-20" />
    </>
  );
};

export default Navbar;
