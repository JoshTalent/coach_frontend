"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Abouts from "../components/about/About";
import Gallery from "./Gallery";
import Pricings from "../components/home/Pricings";
import Partners from "../components/home/Partiners";
import Testimonial from "../components/home/Testimonial";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Abouts />
      <Pricings />
      <Partners />
      <Testimonial />
      <Gallery />
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/250781288442"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl"
        style={{ zIndex: 9999 }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(0,255,0,0.8)" }}
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Floating Call Button */}
      <motion.a
        href="tel:+250781288442"
        className="fixed bottom-20 right-6 bg-purple-500 text-white p-4 rounded-full shadow-2xl"
        style={{ zIndex: 9999 }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 0.5,
        }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(128,0,255,0.8)" }}
      >
        <Phone size={28} />
      </motion.a>
    </>
  );
};

export default Home;
