import React from "react";
import { Progress } from "@nextui-org/react";
import { Star, StarHalf } from "lucide-react"; // Ensure you have these icons available
import bg from '../assets/bg.jpg';
import bgtex from '../assets/bgtex3.jpeg';

const CompanyProfile = () => {
  return (
    <div className="relative h-screen bg-gray-100 p-10 flex flex-col items-center overflow-hidden">
      {/* Pseudo-element for background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgtex})`, opacity: 0.3 }}
      ></div>

      <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Side - Text Content */}
        <div className="flex-1 md:w-2/3 p-6 relative">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center md:text-left">
            Our Company Provides High Quality Ideas
          </h1>
          <p className="text-lg mb-6 text-gray-800">
            Adiathermic Technologies is a startup of professionals who provide a ‘One Stop Solution’ to our clients and are known for excellence in a diverse range of business. Our extensive experience in every project is driven by a qualified team for on-time delivery with 100% quality. As an employee-owned company, we believe in ‘Tech Ahead’ in every project and deliver on our promises with integrity.
          </p>

          {/* Success Rate and Customer Review Bars */}
          <div className="flex flex-col md:flex-row gap-8 mt-10">
            <div className="flex-1 flex flex-col items-start mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">Success Rate</h2>
              <Progress value={85} color="success" size="lg" className="w-full mb-2" />
              <span className="text-xl font-semibold text-gray-800">85%</span>
              <p className="mt-2 text-gray-600">
                We are dedicated to delivering results that exceed our clients' expectations.
              </p>
            </div>

            <div className="flex-1 flex flex-col items-start mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">Customer Review</h2>
              <Progress value={90} color="primary" size="lg" className="w-full mb-2" />
              <div className="flex items-center space-x-1 text-xl font-semibold text-gray-800">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>
                    {index < 4 ? (
                      <Star size={20} />
                    ) : (
                      <StarHalf size={20} />
                    )}
                  </span>
                ))}
                <span className="text-xl font-semibold text-gray-800 ml-2">4.5</span>
              </div>
              <p className="mt-2 text-gray-600">
                We value our clients' feedback and strive to deliver exceptional service to them.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/3 p-6 flex items-center justify-center relative">
          <img
            src={bg}
            alt="Company Image"
            className="w-96 h-[450px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
