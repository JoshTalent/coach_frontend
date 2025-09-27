"use client";
import React from "react";
import { motion } from "framer-motion";

const Abouts = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Section Title */}
      <motion.div
        className="max-w-7xl mx-auto px-6 mb-12 text-center"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-500 tracking-wide uppercase">
          About Us
        </h2>
        <div className="w-20 h-1 bg-purple-500 rounded-full mx-auto mt-2"></div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-purple-500 relative inline-block"
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            Olivier Boxing Trainer
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-purple-500 rounded-full"></span>
          </motion.h2>

          <motion.h3
            className="text-xl md:text-2xl font-semibold text-gray-300 flex items-center gap-2"
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { delay: 0.2, duration: 0.8 },
              },
            }}
          >
            <span className="w-1 h-8 bg-purple-500 rounded-full inline-block"></span>
            Rwanda’s Leading National Boxing Coach
          </motion.h3>

          <motion.div
            className="space-y-4 text-gray-400 leading-relaxed text-lg md:text-xl"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.p
              variants={{
                hidden: { x: -30, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              Olivier is Rwanda’s top national boxing coach, dedicated to
              shaping champions. He transforms raw talent into disciplined
              fighters ready for big stages. His training combines modern
              techniques with mental and physical strength. Passionate and
              driven, Olivier inspires the next generation of boxers.
            </motion.p>

            <motion.p
              variants={{
                hidden: { x: -30, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              Olivier is the head coach at The Real Boxing Club and a dedicated
              boxing trainer at Soho Gym. Renowned for his expertise and
              discipline, he has trained athletes of all levels, from beginners
              to professional fighters. Olivier combines technical skill,
              strategic insight, and motivation to help his students achieve
              their peak performance both in and out of the ring. Under his
              guidance, countless boxers have built strength, confidence, and
              championship potential.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Images */}
        <div className="flex-1 relative w-full h-[500px] md:h-[600px]">
          <motion.img
            src="https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Creative Work 1"
            className="absolute top-0 left-0 w-3/5 h-4/5 md:w-3/5 md:h-4/5 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            initial={{ y: 20, opacity: 0, rotate: -2 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Creative Work 2"
            className="absolute top-16 right-0 w-2/5 h-2/5 md:w-2/5 md:h-2/5 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            initial={{ y: 20, opacity: 0, rotate: 2 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.img
            src="https://plus.unsplash.com/premium_photo-1672791843132-cea1902ad66b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Creative Work 3"
            className="absolute bottom-0 left-1/3 w-2/5 h-2/5 md:w-2/5 md:h-2/5 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            initial={{ y: 20, opacity: 0, rotate: -1 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </div>

      {/* Mobile Adjustments: Stack images */}
      <div className="lg:hidden mt-10 grid grid-cols-1 gap-4 px-6">
        <motion.img
          src="https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Creative Work 1"
          className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src="https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Creative Work 2"
          className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1672791843132-cea1902ad66b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Creative Work 3"
          className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </section>
  );
};

export default Abouts;
