// src/components/ExperienceShowcase.jsx

import React from "react";
import { motion } from "framer-motion";
import workImage1 from "../assets/work.png";
import workImage2 from "../assets/work2.png";
import fire from "../assets/fire.png";
import electric from "../assets/electric.png";
import plumbing from "../assets/plumbing.png";
import people from "../assets/people.png";
const images = [
    { src: workImage2, title: "MEP Work " },
  { src: workImage1, title: "Interior Work " },
  { src: fire, title: "Fire Work " },
  { src: electric, title: "Electric Work " },
  { src: plumbing, title: "Plumbing Work " },
  { src: people, title: "People at Work " },
];

const ExperienceShowcase = () => {
  return (
    <div className="p-10 bg-gradient-to-b from-gray-100 to-gray-200">
      {/* <h1 className="text-4xl font-bold mb-6 text-gray-800">Company has vast experience in handling interior & MEP work</h1> */}
      <div className="grid grid-cols-2 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            aria-label={image.title} // Add aria-label for accessibility
          >
            <img src={image.src} alt={image.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{image.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceShowcase;
