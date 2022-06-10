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
import { PieMini } from "../Charts/PieMini";
import { DoughnutMini } from "../Charts/DoughnutMini";

const Panel = (value0) => {
  const [pieState, setPieState] = useState([]);
  const [doughnutState, setDoughnutState] = useState();
  const [polarAreaState, setPolarAreaState] = useState();

  const [datavalue0, setDataValue0] = useState(0);
  const [datavalue1, setDataValue1] = useState(0);
  const [datavalue2, setDataValue2] = useState(0);
  const [datavalue3, setDataValue3] = useState(0);
  const [datavalue4, setDataValue4] = useState(0);
  const [datavalue5, setDataValue5] = useState(0);
  const [datavalue6, setDataValue6] = useState(0);

  const [doughnut0, setDoughnut0] = useState(0);
  const [doughnut1, setDoughnut1] = useState(0);
  const [doughnut2, setDoughnut2] = useState(0);
  const [doughnut3, setDoughnut3] = useState(0);
  const [doughnut4, setDoughnut4] = useState(0);
  const [doughnut5, setDoughnut5] = useState(0);
  const [doughnut6, setDoughnut6] = useState(0);

  const pieHandler = () => {
    if (
      datavalue0 !== 0 ||
      datavalue1 !== 0 ||
      datavalue2 !== 0 ||
      datavalue3 !== 0 ||
      datavalue4 !== 0 ||
      datavalue5 !== 0 ||
      datavalue6 !== 0
    ) {
      var type = <PieBig />;
    } else {
      <PieMini />;
    }

    const value = [data.datasets[0].data];
    const value0 = [(data.datasets[0].data[0] = datavalue0)];
    const value1 = [(data.datasets[0].data[1] = datavalue1)];
    const value2 = [(data.datasets[0].data[2] = datavalue2)];
    const value3 = [(data.datasets[0].data[3] = datavalue3)];
    const value4 = [(data.datasets[0].data[4] = datavalue4)];
    const value5 = [(data.datasets[0].data[5] = datavalue5)];
    const value6 = [(data.datasets[0].data[6] = datavalue6)];
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
        // typeBig,
        value,
        text,
        id,
      },
    ];

    setPieState(updatedValue);
  };

  const doughnutHandler = () => {
    if (doughnut0 !== 0) {
      var type = <DoughnutBig />;
    } else {
      <DoughnutMini />;
    }

    // const value = [data.datasets[0].data];
    const value0 = [(data.datasets[0].data[0] = doughnut0)];
    const value1 = [(data.datasets[0].data[1] = doughnut1)];
    const value2 = [(data.datasets[0].data[2] = doughnut2)];
    const value3 = [(data.datasets[0].data[3] = doughnut3)];
    const value4 = [(data.datasets[0].data[4] = doughnut4)];
    const value5 = [(data.datasets[0].data[5] = doughnut5)];
    const value6 = [(data.datasets[0].data[6] = doughnut6)];
    const text = <button className="idBtn">ID </button>;
    const id = uuidv4();
    const updatedValue = [
      ...doughnutState,
      {
        value0,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        type,
        // typeBig,
        // value,
        text,
        id,
      },
    ];

    setPieState(updatedValue);
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
        datavalue0={datavalue0}
        setDataValue0={setDataValue0}
        datavalue1={datavalue1}
        setDataValue1={setDataValue1}
        datavalue2={datavalue2}
        setDataValue2={setDataValue2}
        datavalue3={datavalue3}
        setDataValue3={setDataValue3}
        datavalue4={datavalue4}
        setDataValue4={setDataValue4}
        datavalue5={datavalue5}
        setDataValue5={setDataValue5}
        datavalue6={datavalue6}
        setDataValue6={setDataValue6}
        doughnut0={doughnut0}
        setDoughnut0={setDoughnut0}
        doughnut1={doughnut1}
        setDoughnut1={setDoughnut1}
        doughnut2={doughnut2}
        setDoughnut2={setDoughnut2}
        doughnut3={doughnut3}
        setDoughnut3={setDoughnut3}
        doughnut4={doughnut4}
        setDoughnut4={setDoughnut4}
        doughnut5={doughnut5}
        setDoughnut5={setDoughnut5}
        doughnut6={doughnut6}
        setDoughnut6={setDoughnut6}
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
