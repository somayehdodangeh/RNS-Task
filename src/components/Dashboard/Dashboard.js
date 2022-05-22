import "./Dashboard.css";
import Header from "../Header/Header";
import { useState } from "react";
import { LineBig } from "../Charts/PolarAreaMini";

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
        ) : null}
        {props.doughnutState ? (
          <div className="bigchart">{props.doughnutState}</div>
        ) : null}
        {props.polarAreaState ? (
          <div className="bigchart">{props.polarAreaState}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;
