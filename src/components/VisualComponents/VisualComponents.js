import React, { useState } from "react";
import "./VisualComponents.css";
import Header from "../Header/Header";
import { PieMini } from "../Charts/PieMini";
import { DoughnutMini } from "../Charts/DoughnutMini";
import { PolarAreaMini } from "../Charts/PolarAreaMini";

const VisualComponents = (props) => {
  return (
    <div className="visualComponents">
      <Header children={"visual"} desc={"choose your components"} />
      <br />
      <br />
      <div className="chart" onClick={props.pieHandler}>
        <PieMini />
        Pie
      </div>
      <div className="chart" onClick={props.doughnutHandler}>
        <DoughnutMini />
        Doughnut
      </div>
      <div className="chart" onClick={props.polarAreaHandler}>
        <PolarAreaMini />
        PolarArea
      </div>
      <br />
      <a
        href="https://react-chartjs-2.js.org/examples"
        target="_blank"
        className="btn"
      >
        + Add More
      </a>
    </div>
  );
};

export default VisualComponents;
