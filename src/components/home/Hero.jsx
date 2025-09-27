"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mouse } from "lucide-react";
import { Link } from "react-router-dom";

// Background slides
const slides = [
  {
    id: 1,
    bg: "bg-[url('https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center",
  },
  {
    id: 2,
    bg: "bg-[url('https://plus.unsplash.com/premium_photo-1723759241072-50e54b13f5c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center",
  },
  {
    id: 3,
    bg: "bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center",
  },
];

// Typing effect component
const TypingText = ({ texts, speed = 100, pause = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= texts.length) return;

    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts, speed, pause]);

  return (
    <span className="text-purple-400 font-semibold">
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Slides */}
      <AnimatePresence>
        {slides.map((slide, idx) =>
          idx === current ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              className={`absolute inset-0 ${slide.bg}`}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-12 md:px-20">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight uppercase"
        >
          Olivier <span className="text-purple-500">The Box</span>
        </motion.h1>

        {/* Typing tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200"
        >
          <TypingText
            texts={[
              "Rwanda’s #1 Boxing Trainer",
              "Building Champions Inside the Ring",
              "Discipline • Strength • Skill",
            ]}
          />
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 max-w-2xl text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          Shaping champions with <span className="text-purple-400">discipline</span>,{" "}
          <span className="text-purple-400">strength</span>, and{" "}
          <span className="text-purple-400">skill</span> — inside and outside the ring.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/book"
            className="px-8 py-3 text-base font-semibold rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
          >
            Book Now
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 text-base font-semibold rounded-full border border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === idx
                ? "bg-purple-500 scale-125 shadow-lg"
                : "bg-gray-500/70 hover:bg-purple-400"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-gray-400 animate-bounce z-20">
        <Mouse size={22} />
      </div>
    </section>
  );
};

export default Hero;
