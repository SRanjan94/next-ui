// src/components/ServicesShowcase.jsx

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    category: "Landscape Solution",
    items: ["Granite work", "Tile Work", "Cobal stone work", "Water fountains", "Swimming pool", "Jogging park", "Façade work"],
  },
  {
    category: "MEP Solution",
    items: ["HVAC work", "Electrical", "Plumbing", "Fire-fighting", "AMC of Plant"],
  }
];

const ServicesShowcase = () => {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col justify-center items-start">
      <motion.h1
        className="text-5xl font-bold mb-4 text-gray-800 font-sans-serif"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h1>

      <motion.div
        className="text-2xl font-semibold text-gray-700 italic mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        "Developing solutions for the future."
      </motion.div>

      <div className="w-full flex flex-row justify-between gap-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="w-1/2 bg-white rounded-lg shadow-lg p-8 relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-left">
              {service.category}
            </h2>
            <ul className="text-gray-600 text-lg space-y-2">
              {service.items.map((item, i) => (
                <li key={i}>
                  {item}
                </li>
              ))}
            </ul>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 hover:opacity-20 transition-opacity duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesShowcase;
