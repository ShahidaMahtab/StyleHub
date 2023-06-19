import React from "react";
import Sidebar from "./../../components/Dashboard/Sidebar";

const MyLayout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <Sidebar />
        </div>
        <div className="col-span-8 p-4">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default MyLayout;
