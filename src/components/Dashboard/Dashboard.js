import "./Dashboard.css";
import Header from "../Header/Header";
import { useState } from "react";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <Header
        children={"Dashboard"}
        desc={"You can edit/delete the charts from left sidebar (Inspector)"}
      />

      <div className="chartHolder">
        {props.pieState ? (
          <div>
            <div className="bigchart">{props.pieState}</div>
          </div>
        ) : (
          <h1>Choose a Chart</h1>
        )}
        {props.doughnutState ? (
          <div className="bigchart">{props.doughnutState}</div>
        ) : (
          <h1>Choose a Chart</h1>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
