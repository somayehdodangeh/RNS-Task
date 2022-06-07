import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import VisualComponents from "../VisualComponents/VisualComponents";
import Inspector from "../Inspector/Inspector";
import "./Panel.css";
import { DoughnutBig } from "../Charts/DoughnutBig";
import { PolarAreaBig } from "../Charts/PolarAreaBig";
import { v4 as uuidv4 } from "uuid";
import { PieBig } from "../Charts/PieBig";
import { data } from "../Charts/PieBig";

const Panel = (props) => {
  const [pieState, setPieState] = useState([]);
  const [doughnutState, setDoughnutState] = useState();
  const [polarAreaState, setPolarAreaState] = useState();

  const pieHandler = () => {
    const type = <PieBig />;
    const value = [data.datasets[0].data];
    const value0 = [data.datasets[0].data[0]];
    const value1 = [data.datasets[0].data[1]];
    const value2 = [data.datasets[0].data[2]];
    const value3 = [data.datasets[0].data[3]];
    const value4 = [data.datasets[0].data[4]];
    const value5 = [data.datasets[0].data[5]];
    const value6 = [data.datasets[0].data[6]];
    const text = <button className="idBtn">ID </button>;
    const id = uuidv4();
    const updatedValue = [
      ...pieState,
      {
        value0,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        type,
        value,
        text,
        id,
      },
    ];
    setPieState(updatedValue);
  };

  const doughnutHandler = () => {
    const value = <DoughnutBig />;
    const id = uuidv4();
    const text = <button className="idBtn">ID </button>;
    const updatedValue = [doughnutState, value, text, id];
    setDoughnutState(updatedValue);
  };
  const polarAreaHandler = () => {
    const value = <PolarAreaBig />;
    const id = uuidv4();
    const text = <button className="idBtn">ID </button>;
    const updatedValue = [polarAreaState, value, text, id];
    setPolarAreaState(updatedValue);
  };

  return (
    <div className="panel">
      <Inspector
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
