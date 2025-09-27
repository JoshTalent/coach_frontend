"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, MessageCircle, Phone } from "lucide-react";
import Navbar from "../components/Navbar";

// Gallery items
const galleryItems = [
  {
    id: 1,
    type: "image",
    category: "Training",
    src: "https://plus.unsplash.com/premium_photo-1681400614910-2e80fa375521?q=80&w=1277&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "400px",
  },
  {
    id: 2,
    type: "image",
    category: "Training",
    src: "https://images.unsplash.com/photo-1660212074310-6d7ed176c746?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "500px",
  },
  {
    id: 3,
    type: "image",
    category: "Events",
    src: "https://images.unsplash.com/photo-1601039834076-c41cf1766d4b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGJveGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    height: "400px",
  },
  {
    id: 4,
    type: "image",
    category: "Events",
    src: "https://plus.unsplash.com/premium_photo-1661956568986-df0b2403fd39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJveGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    height: "450px",
  },
  {
    id: 5,
    type: "image",
    category: "Boxers",
    src: "https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "350px",
  },
  {
    id: 6,
    type: "image",
    category: "Training",
    src: "https://plus.unsplash.com/premium_photo-1721755999925-8b59f881c6fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "350px",
  },
];

// Filters
const filters = ["All", "Images", "Videos", "Training", "Events", "Boxers"];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredItems = galleryItems.filter((item) =>
    filter === "All"
      ? true
      : filter === "Images"
      ? item.type === "image"
      : filter === "Videos"
      ? item.type === "video"
      : item.category === filter
  );

  const particles = Array.from({ length: 30 });

  return (
    <>
      <Navbar />

      <section className="relative py-24 bg-black text-white overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
          {particles.map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500/30 blur-xl opacity-40"
              style={{
                width: `${5 + Math.random() * 15}px`,
                height: `${5 + Math.random() * 15}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 20 + Math.random() * 20, 0],
                x: [0, 15 + Math.random() * 10, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 12 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-500 uppercase">
              Olivier’s Gallery
            </h2>
            <div className="w-24 h-1 bg-purple-500 rounded-full mx-auto mt-2"></div>
            <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg">
              Explore highlights from training sessions, boxing events, and
              fighters from The Real Boxing Club & Soho Gym.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 font-semibold rounded-full border ${
                  filter === f
                    ? "bg-purple-500 border-purple-500 text-black"
                    : "border-gray-500 text-white hover:border-purple-500 hover:text-purple-500"
                } transition-all duration-300`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="relative rounded-3xl shadow-xl overflow-hidden break-inside-avoid border border-gray-800 bg-white/5 backdrop-blur-lg cursor-pointer"
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setSelected(item)}
                  style={{ height: item.height }}
                >
                  <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden">
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={`Gallery ${item.id}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <video
                          src={item.src}
                          muted
                          loop
                          className="w-full h-full object-cover"
                        />
                        <Play className="absolute inset-0 m-auto w-12 h-12 text-white opacity-70 pointer-events-none" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Modal / Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative w-full max-w-3xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              >
                {selected.type === "image" ? (
                  <img
                    src={selected.src}
                    alt="Selected"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                ) : (
                  <video
                    src={selected.src}
                    controls
                    autoPlay
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Button */}
        <motion.a
          href="https://wa.me/250781288442"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-[9999]"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px rgba(0,255,0,0.8)",
          }}
        >
          <MessageCircle size={28} />
        </motion.a>

        {/* Floating Call Button */}
        <motion.a
          href="tel:+250781288442"
          className="fixed bottom-20 right-6 bg-purple-500 text-white p-4 rounded-full shadow-2xl z-[9999]"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px rgba(128,0,255,0.8)",
          }}
        >
          <Phone size={28} />
        </motion.a>
      </section>
    </>
  );
};

export default Gallery;
