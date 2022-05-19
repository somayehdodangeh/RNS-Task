import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import VisualComponents from "../VisualComponents/VisualComponents";
import Inspector from "../Inspector/Inspector";

const Panel = () => {
  return (
    <>
      <Inspector />
      <Dashboard />
      <VisualComponents />
    </>
  );
};

export default Panel;
