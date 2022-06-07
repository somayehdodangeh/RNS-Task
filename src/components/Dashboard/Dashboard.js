import "./Dashboard.css";
import Header from "../Header/Header";
import { useState } from "react";
import { LineBig } from "../Charts/PolarAreaMini";
import PieBig from "../Charts/PieBig";
import Inspector from "../Inspector/Inspector";
import { v4 as uuidv4 } from "uuid";

const Dashboard = (props) => {
  console.log(props);
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
        {props.pieState.length > 0 ? (
          <div className="bigchart">
            {props.pieState.map((item, index) => {
              return (
                <span onClick={() => props.pieClick(item.id)} key={item.id}>
                  {item.type}
                  Value:{item.value} ID:{item.id}
                </span>
              );
            })}
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
