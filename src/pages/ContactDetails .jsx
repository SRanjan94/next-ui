// src/components/ContactDetails.jsx

import React from "react";
import { Card, Input, Button, Textarea } from "@nextui-org/react";

const ContactDetails = () => {
  return (
    <div className="flex h-screen bg-gray-300  p-8">
      {/* Contact Details Section */}
      <div className="w-1/2 pr-8 flex flex-col justify-center">
        <div className="text-gray-800 p-8 ml-10">
          <h1 className="text-3xl font-bold mb-6">Contact Details</h1>
          <h2 className="text-2xl font-semibold mb-2">Rohit Kumar Rai</h2>
          <p className="text-lg font-medium mb-2">Managing Partner - Business Development</p>
          <p className="text-lg font-medium mb-8">Adiathermic Technologies LLP</p>
          <p className="text-lg mb-2">
            <strong>Regd. Office:</strong> BC161A, Sambhav Bapu Colony, Jonapur, Chhatarpur, Delhi 110047
          </p>
          <p className="text-lg mb-2">
            <strong>Phone:</strong> +91-9716375968
          </p>
          <p className="text-lg mb-2">
            <strong>Email:</strong> <a href="mailto:rohitk494@adiathermic.com" className="text-blue-600 hover:underline">rohitk494@adiathermic.com</a>, <a href="mailto:rohitk494@gmail.com" className="text-blue-600 hover:underline">rohitk494@gmail.com</a>
          </p>
          <p className="text-lg">
            <strong>Web:</strong> <a href="http://www.adiathermic.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.adiathermic.com</a>
          </p>
        </div>
      </div>

      {/* Free Consultation Form Section */}
      <div className="w-1/2 flex justify-center items-center mt-10">
        <Card className="w-[500px] p-4 shadow-lg h-[520px] mt-4 ">
          <h1 className="text-3xl font-bold mb-10 text-center">Free Consultation</h1>
          <form className="flex flex-col items-center ">
            <Input
              className="mb-8 w-96"
              placeholder="Enter your name"
            />
            <Input
              className="mb-8 w-96"
              type="email"
              placeholder="Enter your email"
            />
            <Input
              className="mb-8 w-96"
              placeholder="Enter subject"
            />
            <Textarea
              className="mb-8 w-96"
              placeholder="Your message"
              rows={4}
            />
            <Button className="w-96 bg-blue-600 text-white" type="submit">
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactDetails;
