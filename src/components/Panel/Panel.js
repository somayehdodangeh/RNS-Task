import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import VisualComponents from "../VisualComponents/VisualComponents";
import Inspector from "../Inspector/Inspector";
import "./Panel.css";

const Panel = () => {
  return (
    <div className="panel">
      <Inspector />
      <Dashboard />
      <VisualComponents />
    </div>
  );
};

export default Panel;
