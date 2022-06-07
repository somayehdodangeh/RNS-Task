import React from "react";
import "./Inspector.css";
import Header from "../Header/Header";

const Inspector = (props) => {
  return (
    <div className="Inspector">
      <Header children={"Inspector"} desc={"edit/delete charts here"} />
      <br />
      <br />
      <br />
      <div>
        <div>
          {/* {props.pieState.map((item, index) => {
            return <div>Value:{item.value}</div>;
          })} */}
          {props.pieClick()}
        </div>
        <div>{props.pieClick}</div>
      </div>
    </div>
  );
};

export default Inspector;
