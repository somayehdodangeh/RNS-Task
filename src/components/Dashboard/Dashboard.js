import "./Dashboard.css";
import Header from "../Header/Header";
import { useState } from "react";
import { LineBig } from "../Charts/PolarAreaMini";

const Dashboard = (props) => {
  const removeHandler = () => {
    props.setPieState("");
    props.setDoughnutState("");
    props.setPolarAreaState("");
  };

  return (
    <div className="dashboard">
      <Header
        children={"Dashboard"}
        desc={"You can edit/delete the charts from left sidebar (Inspector)"}
      />
      <button onClick={removeHandler} className="btnDashremove">
        Clear
      </button>
      <button className="btnDashsave">Save</button>

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
