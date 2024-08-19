// src/components/Profile.jsx

import { Button } from "@nextui-org/button";
import React from "react";
import profile from '../assets/profile.webp';
import { ArrowBigRightDash } from "lucide-react";

const Profile = () => {
  return (
    <div className="h-screen bg-[#04213f] text-white p-10 flex items-center justify-between">
      {/* Left Side - Text Content */}
      <div className="flex flex-col justify-center max-w-2xl space-y-8">
       <span>
       <h1 className="text-4xl font-bold mb-2">Welcome To </h1>
       <h1 className="text-5xl font-bold">Adiathermic Technologies</h1>
       </span>
        <h2 className="text-3xl font-semibold">Build Up Your Business Strategy</h2>
        <p className="text-lg">
          Empowering your business to reach new heights with our strategic expertise.
        </p>
        <div className="flex gap-4 mt-8">
          <Button className="bg-blue-600 hover:bg-blue-700 w-40 text-white font-semibold py-2 px-4 rounded">
            Find Consultant
            <ArrowBigRightDash />
          </Button>
          <Button className="bg-transparent border w-36 border-white hover:bg-gray-700 hover:text-white text-white font-semibold py-2 px-4 rounded">
            Read More
            <ArrowBigRightDash />
          </Button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center items-center">
        <img
          src={profile}
          alt="Adiathermic Technologies"
          className="w-[670px] h-auto object-cover rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default Profile;
