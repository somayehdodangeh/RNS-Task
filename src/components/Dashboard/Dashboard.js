import React from "react";
import "./Dashboard.css";
import Header from "../Header/Header";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header children={"Dashboard"} des />
      <div>Dashboard</div>
    </div>
  );
};

export default Dashboard;
