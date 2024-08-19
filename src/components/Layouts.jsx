import React from "react";
import Header from "./Header";

const Layouts = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="bg-gray-100">{children}</main>
    </div>
  );
};
export default Layouts;
