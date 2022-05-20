import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import VisualComponents from "../VisualComponents/VisualComponents";
import Inspector from "../Inspector/Inspector";
import "./Panel.css";
import { PieBig } from "../Charts/PieBig";
import { DoughnutBig } from "../Charts/DoughnutBig";

const Panel = (props) => {
  const [pieState, setPieState] = useState();
  const [doughnutState, setDoughnutState] = useState();
  const pieHandler = () => {
    const value = <PieBig />;
    setPieState(value);
  };

  const doughnutHandler = () => {
    const value = <DoughnutBig />;
    setDoughnutState(value);
  };
  return (
    <div className="panel">
      <Inspector />
      <Dashboard
        pieState={pieState}
        doughnutState={doughnutState}
        setPieState={setPieState}
      />

      <VisualComponents
        pieState={pieState}
        setPieState={setPieState}
        pieHandler={pieHandler}
        doughnutState={doughnutState}
        setDoughnutState={setDoughnutState}
        doughnutHandler={doughnutHandler}
      />
    </div>
  );
};

export default Panel;
