import { Button } from "@nextui-org/button";
import { Facebook, Instagram, Linkedin, Mails, PhoneCall } from "lucide-react";
import React from "react";
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-red-700 font-sans text-xl h-16 shadow-md z-50">
      <div className="flex justify-between items-center h-full px-4">
      
        <div className="flex gap-2">
        <img src={logo} alt={logo} className="w-20  mt-1"/>
          <Button className="hover:bg-slate-700 hover:text-white bg-gray-900 text-gray-200">Home</Button>
          <Button className="hover:bg-slate-700 hover:text-white bg-gray-900 text-gray-200">About</Button>
          <Button className="hover:bg-slate-700 hover:text-white bg-gray-900 text-gray-200">Services</Button>
          <Button className="hover:bg-slate-700 hover:text-white bg-gray-900 text-gray-200">Team</Button>
          <Button className="hover:bg-slate-700 hover:text-white bg-gray-900 text-gray-200">Contact</Button>
        </div>
        <div className="flex items-center gap-2">
          <Button className="hover:bg-slate-700 hover:text-white bg-gray-900 text-gray-200">
            <Instagram />
          </Button>
          <Button className="hover:bg-slate-700 hover:text-white bg-gray-900 text-gray-200">
            <Facebook />
          </Button>
          <Button className="hover:bg-slate-700 hover:text-white bg-gray-900 text-gray-200">
            <Linkedin />
          </Button>
          <Button className="hover:bg-slate-700 hover:text-white bg-gray-900 text-gray-200">
            <Mails />
          </Button>
          <Button className="hover:bg-slate-700 hover:text-white bg-gray-900 text-gray-200">
            <PhoneCall />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
