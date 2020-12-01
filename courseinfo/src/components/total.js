import React from "react";

const Total = ({ parts }) => {
  const total = parts
    .map((part) => part.exercises)
    .reduce((total, part) => total + part);
  return <p>Number of exercises {total}</p>;
};

export default Total;
