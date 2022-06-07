import React from "react";
import "./Inspector.css";
import Header from "../Header/Header";

const Inspector = (props) => {
  return (
    <div className="Inspector">
      <Header children={"Inspector"} desc={"edit/delete charts here"} />

      <div>
        <div>
          {props.pieState.map((item, index) => {
            return (
              <div className="values">
                {/* <div>Value:{item.value}</div> */}
                Red <input className="inputValue" value={item.value0} />
                <br />
                Blue <input className="inputValue" value={item.value1} />
                <br />
                Yellow <input className="inputValue" value={item.value2} />
                <br />
                Green <input className="inputValue" value={item.value3} />
                <br />
                Purple <input className="inputValue" value={item.value4} />
                <br />
                Orange <input className="inputValue" value={item.value5} />
                <br />
                <button className="change">change</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Inspector;
