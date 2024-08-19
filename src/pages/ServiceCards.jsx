// src/components/ServiceCards.jsx

import React from "react";
import { Card } from "@nextui-org/react";
import { motion } from "framer-motion";

// Importing images from the assets folder
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/image3.jpg';

import bg from '../assets/bgtex.jpg'; // Replace with your actual background image path

const members = [
  {
    name: "Mahesh Rai",
    experience: "More than 30 Years",
    description: "He has served almost every industry such as Hotels, healthcare, Commercial building, retails & entertainment building, Education, residential, manufacturing factory, warehouse, transportation, etc.",
    imgSrc: img3, // Local image reference
  },
  {
    name: "Rohit Kumar Rai",
    experience: "11 Years",
    description: "B.Tech in Mechanical Engineering from Delhi Technological University. He has also led the sales and services wings of Paharpur cooling towers for 6 years and is an ex-employee of Blue Star, Sobha Limited, and Ams Project Consultant.",
    imgSrc: img2, // Local image reference
  },
  {
    name: "Dashmeet Kaur",
    experience: "5 Years",
    description: "MBA in Marketing & Management from Delhi University. He is an Ex-employee of Wipro & Skytech Engineers.",
    imgSrc: img1, // Local image reference
  },
];

const ServiceCards = () => {
  return (
    <div
      className="h-screen flex flex-col items-center p-4 bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-4xl font-bold mb-10 text-gray-900 text-center mt-6">
        Meet Our Founding Members
      </h1>
      <div className="flex flex-wrap gap-36 justify-center">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="relative group h-80 w-80"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-[420px] w-full bg-white shadow-lg rounded-md p-4 overflow-hidden flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 text-center">
                {member.name}
              </h2>
              <p className="text-lg font-medium text-gray-700 text-center">
                {member.experience} of Experience
              </p>
              <p className="text-base text-gray-600 text-center mt-2">
                {member.description}
              </p>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-700 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white">Click to learn more!</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
