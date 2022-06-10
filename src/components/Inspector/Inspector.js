import React, { useEffect, useState } from "react";
import "./Inspector.css";
import Header from "../Header/Header";
// import { data } from "../Charts/PieBig";

const Inspector = (props) => {
  return (
    <div className="Inspector">
      <Header children={"Inspector"} desc={"edit/delete charts here"} />

      <div>
        <div>
          {props.pieState.map((index) => {
            return (
              <div key={index} className="values">
                {/* <div>Value:{value0}</div> */}
                Red{" "}
                <input
                  value={props.datavalue0}
                  type="number"
                  className="inputValue"
                  onChange={(e) => props.setDataValue0(e.target.value)}
                />
                <br />
                Blue{" "}
                <input
                  value={props.datavalue1}
                  type="number"
                  className="inputValue"
                  onChange={(e) => props.setDataValue1(e.target.value)}
                />
                <br />
                Yellow{" "}
                <input
                  value={props.datavalue2}
                  type="number"
                  className="inputValue"
                  onChange={(e) => props.setDataValue2(e.target.value)}
                />
                <br />
                Green{" "}
                <input
                  value={props.datavalue3}
                  type="number"
                  className="inputValue"
                  onChange={(e) => props.setDataValue3(e.target.value)}
                />
                <br />
                Purple{" "}
                <input
                  value={props.datavalue4}
                  type="number"
                  className="inputValue"
                  onChange={(e) => props.setDataValue4(e.target.value)}
                />
                <br />
                Orange{" "}
                <input
                  value={props.datavalue5}
                  type="number"
                  className="inputValue"
                  onChange={(e) => props.setDataValue5(e.target.value)}
                />
                <br />
                <button onClick={props.pieHandler} className="change">
                  change
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Inspector;
