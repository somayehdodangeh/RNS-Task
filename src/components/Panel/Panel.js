import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import VisualComponents from "../VisualComponents/VisualComponents";
import Inspector from "../Inspector/Inspector";
import "./Panel.css";
import PieBig from "../Charts/PieBig";
import { DoughnutBig } from "../Charts/DoughnutBig";
import { data } from "../Charts/PieMini";
import { PolarAreaBig } from "../Charts/PolarAreaBig";

const Panel = (props) => {
  const [pieState, setPieState] = useState();
  const [doughnutState, setDoughnutState] = useState();
  const [polarAreaState, setPolarAreaState] = useState();

  const pieHandler = () => {
    const value = <PieBig />;
    const updatedValue = [pieState, value];
    setPieState(updatedValue);
  };

  const doughnutHandler = () => {
    const value = <DoughnutBig />;
    const updatedValue = [doughnutState, value];
    if (updatedValue.length <= 2) {
      setDoughnutState(updatedValue);
    } else {
      setDoughnutState("");
    }
  };
  const polarAreaHandler = () => {
    const value = <PolarAreaBig />;
    const updatedValue = [polarAreaState, value];
    setPolarAreaState(updatedValue);
  };
  return (
    <div className="panel">
      <Inspector />
      <Dashboard
        pieState={pieState}
        setPieState={setPieState}
        pieHandler={pieHandler}
        doughnutState={doughnutState}
        setDoughnutState={setDoughnutState}
        doughnutHandler={doughnutHandler}
        polarAreaState={polarAreaState}
        setPolarAreaState={setPolarAreaState}
        polarAreaHandler={polarAreaHandler}
      />

      <VisualComponents
        pieState={pieState}
        setPieState={setPieState}
        pieHandler={pieHandler}
        doughnutState={doughnutState}
        setDoughnutState={setDoughnutState}
        doughnutHandler={doughnutHandler}
        polarAreaState={polarAreaState}
        setPolarAreaState={setPolarAreaState}
        polarAreaHandler={polarAreaHandler}
      />
    </div>
  );
};

export default Panel;
