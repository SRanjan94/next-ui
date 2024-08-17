import { Button } from "@nextui-org/button";
import { Facebook, Instagram, Linkedin, Mails, PhoneCall } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gray-300 text-red-700 font-sans text-xl h-20">
      <div className="flex gap-2">
        <Button className="hover:bg-slate-400">Home</Button>
        <Button className="hover:bg-slate-400">About</Button>
        <Button className="hover:bg-slate-400">Services</Button>
        <Button className="hover:bg-slate-400">Team</Button>
        <Button className="hover:bg-slate-400">Contact</Button>
      </div>
      <div className="flex items-center">
        {" "}
        <Button className=" hover:bg-slate-400">
          <Instagram />
        </Button>
        <Button className="hover:bg-slate-400">
          <Facebook />
        </Button>
        <Button className="hover:bg-slate-400">
          <Linkedin />
        </Button>
        <Button className="hover:bg-slate-400">
          <Mails />
        </Button>
        <Button className="hover:bg-slate-400">
          <PhoneCall />
        </Button>
      </div>
    </div>
  );
};

export default Header;
