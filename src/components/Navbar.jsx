"use client";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 shadow-lg backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-extrabold tracking-wide uppercase cursor-pointer"
        >
          <span className="text-white">Olivier</span>{" "}
          <span className="text-purple-500">The Box</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.href}
                className={`font-semibold tracking-wide transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-purple-400"
                    : "text-white hover:text-purple-300"
                }`}
              >
                {link.label}
              </Link>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-500 ${
                  location.pathname === link.href
                    ? "w-full bg-purple-400"
                    : "w-0 bg-purple-400 group-hover:w-full"
                }`}
              />
            </motion.div>
          ))}

          {/* Book Now Button */}
          <Link to="/booking">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168,85,247,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 font-semibold rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition"
            >
              Book Now
            </motion.button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  to={link.href}
                  className={`text-2xl font-bold transition ${
                    location.pathname === link.href
                      ? "text-purple-400"
                      : "text-white hover:text-purple-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <Link to="/booking" onClick={() => setIsOpen(false)}>
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(168,85,247,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-10 py-3 font-semibold text-lg rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition"
              >
                Book Now
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
