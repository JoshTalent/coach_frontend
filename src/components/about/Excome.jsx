"use client";
import React from "react";
import { motion } from "framer-motion";

const excomMembers = [
  {
    id: 1,
    name: "Olivier Niyigena",
    role: "Founder & Coach",
    phone: "+250 781 288 442",
  },
  {
    id: 2,
    name: "Josue Ntwari",
    role: "Assistant",
    phone: "+250 788 234 567",
  }
];

const Excome = () => {
  const particles = Array.from({ length: 25 });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90" />

        {/* Floating particles */}
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500 opacity-30"
            style={{
              width: `${5 + Math.random() * 15}px`,
              height: `${5 + Math.random() * 15}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 20 + Math.random() * 20, 0],
              x: [0, 10 + Math.random() * 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-500 uppercase">
            Our Executive Committee
          </h2>
          <div className="w-24 h-1 bg-purple-500 rounded-full mx-auto mt-3"></div>
        </motion.div>

        {/* Excom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {excomMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              className="bg-white/10 backdrop-blur-md rounded-3xl border border-gray-700 hover:border-purple-500 hover:scale-105 hover:shadow-2xl transition-all duration-500 p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Avatar */}
              <div className="mb-5">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-gray-300 italic mb-2">{member.role}</p>
              <p className="text-gray-200 font-medium">{member.phone}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excome;
