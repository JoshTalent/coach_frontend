"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Personalized Fitness Programs",
    description:
      "Tailored strength, conditioning, and weight-loss programs designed with boxing fundamentals.",
    price: "Custom",
    features: [
      "Individual assessment",
      "Strength & cardio balance",
      "Weight-loss strategies",
      "Boxing-based drills",
    ],
  },
  {
    id: 2,
    title: "Amateur & Pro Boxer Coaching",
    description:
      "Professional fight preparation: sparring, advanced tactics, and stamina drills for competitions.",
    price: "$120/session",
    features: [
      "Fight strategy & tactics",
      "High-level sparring",
      "Endurance conditioning",
      "Competition readiness",
    ],
    popular: true,
  },
  {
    id: 3,
    title: "Boxing Bootcamps",
    description:
      "High-intensity group sessions mixing cardio, strength, and boxing technique.",
    price: "$60/session",
    features: [
      "Explosive workouts",
      "Strength & conditioning",
      "Cardio boxing drills",
      "Community motivation",
    ],
  },
  {
    id: 4,
    title: "Youth Boxing Academy",
    description:
      "Programs for kids & teens focusing on discipline, self-defense, and confidence building.",
    price: "$40/session",
    features: [
      "Safe sparring drills",
      "Confidence & respect training",
      "Fundamental boxing skills",
      "Fitness & agility drills",
    ],
  },
  {
    id: 5,
    title: "Corporate Team Training",
    description:
      "Boxing-inspired workouts for companies to build teamwork, stress relief, and fitness.",
    price: "Custom",
    features: [
      "Fun group workouts",
      "Stress-relief routines",
      "Team bonding activities",
      "Boost productivity & morale",
    ],
  },
  {
    id: 6,
    title: "Women’s Self-Defense & Fitness",
    description:
      "Classes designed for women focusing on empowerment, strength, and safety.",
    price: "$50/session",
    features: [
      "Self-defense techniques",
      "Strength & cardio training",
      "Confidence building",
      "Supportive environment",
    ],
  },
  {
    id: 7,
    title: "Nutrition & Recovery Coaching",
    description:
      "Meal planning + recovery routines (stretching, massage therapy, etc.) for athletes.",
    price: "Custom",
    features: [
      "Personalized meal plans",
      "Recovery routines",
      "Massage & therapy guidance",
      "Sleep & recovery optimization",
    ],
  },
  {
    id: 8,
    title: "Virtual/Online Training Sessions",
    description:
      "For people who can’t train in person—Zoom/online personalized workouts.",
    price: "$30/session",
    features: [
      "Live 1-on-1 coaching",
      "Flexible schedules",
      "Boxing & fitness drills",
      "Train anywhere worldwide",
    ],
  },
  {
    id: 9,
    title: "Fight Camps & Competition Prep",
    description:
      "Short-term intensive training for athletes preparing for tournaments or pro fights.",
    price: "Custom",
    features: [
      "Simulation fights",
      "Tailored fight camp",
      "Mental preparation",
      "Nutrition guidance",
    ],
  },
  {
    id: 10,
    title: "Boxing for Seniors / Wellness Programs",
    description:
      "Low-impact sessions for older adults focusing on mobility, balance, and cardiovascular health.",
    price: "$35/session",
    features: [
      "Mobility & balance training",
      "Light cardio boxing drills",
      "Safe exercise routines",
      "Heart health focus",
    ],
  },
];

const Pricings = () => {
  const particles = Array.from({ length: 40 });

  return (
    <section className="relative py-24 overflow-hidden bg-black text-white">
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
              x: [0, 10 + Math.random() * 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
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
            Advanced Boxing Services
          </h2>
          <div className="w-24 h-1 bg-purple-500 rounded-full mx-auto mt-3"></div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className="relative p-6 flex flex-col justify-between rounded-3xl shadow-xl border border-gray-800 bg-white/5 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-bold text-black uppercase shadow-lg animate-pulse">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-purple-500">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {service.description}
                </p>
                <p className="text-2xl md:text-3xl font-extrabold text-white mt-2">
                  {service.price}
                </p>

                <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full inline-block"></span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: service.popular
                    ? "0 0 30px rgba(128,0,255,0.8)"
                    : "0 0 15px rgba(128,0,255,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 w-full py-2 font-semibold rounded-full text-black transition ${
                  service.popular
                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                    : "bg-purple-500"
                }`}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

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
  );
};

export default Pricings;
