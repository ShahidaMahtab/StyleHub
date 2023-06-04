import React from "react";
import Sidebar from "./../../components/Dashboard/Sidebar";

const MyLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default MyLayout;
