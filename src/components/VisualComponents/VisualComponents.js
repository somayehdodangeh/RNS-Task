import React, { useState } from "react";
import "./VisualComponents.css";
import Header from "../Header/Header";
import { PieMini } from "../Charts/PieMini";
import { DoughnutMini } from "../Charts/DoughnutMini";
import { PieBig } from "../Charts/PieBig";

const VisualComponents = (props) => {
  return (
    <div className="visualComponents">
      <Header children={"visual"} desc={"choose your components"} />
      <br />
      <br />
      <div className="chart" onClick={props.pieHandler}>
        <PieMini />
        Pie Chart
      </div>
      <div className="chart" onClick={props.doughnutHandler}>
        <DoughnutMini />
        Doughnut Chart
        
      </div>
      <br />
      Other VisualComponents are here ...
    </div>
  );
};

export default VisualComponents;
