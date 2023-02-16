import React from "react";
import "./sidebar.css";

const Sidebar = (props) => {
  const SidebarValues = [
    { number: 1, title: "YOUR INFO" },
    { number: 2, title: "SELECT PLAN" },
    { number: 3, title: "ADD-ONS" },
    { number: 4, title: "SUMMARY" },
  ];
  return (
    <div className="sidebar">
      {SidebarValues.map(({ number, title }) => (
          <div  key={number} className="sidebar-container">
            <div className={`sidebar-number ${props.active===number ? "active" : ""}`}>
              <p>{number}</p>
            </div>
            <div className="sidebar-text">
              <div className="sidebar-text-number">
                <p>STEP {number}</p>
              </div>
              <div className="sidebar-text-title">
                <p>{title}</p>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
};


export default Sidebar;


