import React from "react";
import Part from "./parts";

const Content = ({ parts }) => {
  const renderParts = () =>
    parts.map((p) => (
      <Part key={p.name} part={p.name} exercises={p.exercises} />
    ));
  return <>{renderParts()}</>;
};

export default Content;
