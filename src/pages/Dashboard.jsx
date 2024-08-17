import { Card } from "@nextui-org/react";
import React from "react";
const Dashboard = () => {
  return (
    <div className="flex flex-row gap-10 p-10 justify-around">
      <Card className="bg-gray-300 h-96 w-96 p-4">
        <span className="font-semibold text-lg mb-2">Business Strategy</span>
        <span className="p-1">
          {" "}
          Our approach to business strategy is focused on understanding your
          unique needs and challenges also a concise plan or approach that
          outlines how your company intends to achieve its long-term goals and
          objectives, typically by leveraging its resources and capabilities to
          gain a competitive advantage in its industry or market.
        </span>
      </Card>
      <Card className="bg-gray-300 h-96 w-96 p-4">
        {" "}
        <span className="font-semibold text-lg mb-2">Financial Planning</span>
        <span className="p-1">
          {" "}
          Financial planning is the process of setting and achieving your
          financial goals through budgeting, saving, investing, and managing
          your money wisely. It involves assessing your current financial
          situation, creating a plan to meet your objectives, and regularly
          reviewing and adjusting your strategy as needed to ensure financial
          success.
        </span>
      </Card>{" "}
      <Card className="bg-gray-300 h-96 w-96 p-4">
        {" "}
        <span className="font-semibold text-lg mb-2">
          Manpower Training for Stellar Success
        </span>
        <span className="p-1">
          {" "}
          Manpower training is a strategic investment in developing the skills,
          knowledge, and capabilities of your workforce. It equips employees
          with the tools and expertise needed to excel in their roles, drive
          productivity, and contribute to the organization's stellar success.
        </span>
      </Card>
    </div>
  );
};

export default Dashboard;
