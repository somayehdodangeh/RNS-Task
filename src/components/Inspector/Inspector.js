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
          <div className="data">{props.oneHandler()}</div>
        </div>
      </div>
    </div>
  );
};

export default Inspector;
