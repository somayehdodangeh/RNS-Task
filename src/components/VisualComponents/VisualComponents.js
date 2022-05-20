import React from "react";
import "./VisualComponents.css";
import Header from "../Header/Header";
import { App2 } from "../Charts/Pie";
import { App3 } from "../Charts/Doughnut";

const VisualComponents = () => {
  return (
    <div className="visualComponents">
      <Header children={"visual"} desc={"choose your components"} />
      <br />
      <br />
      <App2 />
      <App3 />
      <br />
      Other VisualComponents are here
    </div>
  );
};

export default VisualComponents;
