import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      {props.children} (some decribtion)
    </div>
  );
};

export default Header;
