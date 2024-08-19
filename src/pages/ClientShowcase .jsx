// src/components/ClientShowcase.jsx

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react"; // Icon library
import clientImg1 from '../assets/bgcon.jpg'; // Replace with actual path
import clientImg2 from '../assets/bglogo.jpg'; // Replace with actual path

const clients = [
  {
    name: "Zara Infra Pvt. Ltd",
    project: "DS Group",
    workProfile: "External Development",
    amount: "20L",
    status: "Work in Progress",
    image: clientImg1, // Local image reference
  },
  {
    name: "Skytech Engineers",
    project: "METL Reliance",
    workProfile: "External Development",
    amount: "50L",
    status: "Work in Progress",
    image: clientImg2, // Local image reference
  },
];

const statusColors = {
  "Work in Progress": "bg-yellow-500",
  "Completed": "bg-green-500",
  "On Hold": "bg-red-500",
};

const statusIcons = {
  "Work in Progress": <XCircle className="text-yellow-500" />,
  "Completed": <CheckCircle className="text-green-500" />,
  "On Hold": <XCircle className="text-red-500" />,
};

const ClientShowcase = () => {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12 text-gray-800 text-center">Our Esteemed Clients</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="w-[600px] bg-white rounded-lg shadow-xl overflow-hidden bg-cover bg-center relative"
            style={{ backgroundImage: `url(${client.image})`, height: '350px' }} // Adjust height as needed
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8 relative bg-white bg-opacity-80 rounded-lg h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-4">
                {statusIcons[client.status]}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-semibold mb-4 text-gray-900">{client.name}</h2>
                <p className="text-xl font-medium text-gray-700 mb-2">
                  <strong>Project:</strong> {client.project}
                </p>
                <p className="text-xl font-medium text-gray-700 mb-2">
                  <strong>Work Profile:</strong> {client.workProfile}
                </p>
                <p className="text-xl font-medium text-gray-700 mb-10">
                  <strong>Amount:</strong> {client.amount}
                </p>
                <span className={`px-4  py-2 text-white text-sm font-medium rounded-full ${statusColors[client.status]}`}>
                  {client.status}
                </span>
              </div>
              <div className="flex items-center mt-4">
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClientShowcase;
