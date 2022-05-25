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
  const [pieState, setPieState] = useState();
  const [doughnutState, setDoughnutState] = useState();
  const [polarAreaState, setPolarAreaState] = useState();

  const pieHandler = () => {
    const value = <PieBig />;
    const text = <button className="idBtn">ID </button>;
    const id = uuidv4();
    const updatedValue = [pieState, value, text, id];
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
  const oneHandler = () => {
    const value = [data.datasets[0].data];
    if (!pieState && !doughnutState && !polarAreaState) {
      return <h4>NO DATA</h4>;
    } else {
      return <h5>values:{value}</h5>;
    }
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
        oneHandler={oneHandler}
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
        oneHandler={oneHandler}
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
        oneHandler={oneHandler}
      />
    </div>
  );
};

export default Panel;
