// src/pages/Dashboard.jsx

import React from "react";
import Profile from "./Profile";
import ServiceCards from "./ServiceCards";
import CompanyProfile from "./CompanyProfile ";
import ContactDetails from "./ContactDetails ";
import OurServices from "./OurServices";
import ExperienceShowcase from "./ExperienceShowcase ";
import ClientShowcase from "./ClientShowcase ";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* Profile Section */}
      <Profile />
      <CompanyProfile />
      {/* Service Cards Section */}
      <ServiceCards />
      <OurServices />
      <ExperienceShowcase />
      <ClientShowcase />
      <ContactDetails />
    </div>
  );
};

export default Dashboard;
