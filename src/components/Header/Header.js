import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div>{props.children}</div>
      <div>
        <h6>description : {props.desc}</h6>
      </div>
    </div>
  );
};

export default Header;
