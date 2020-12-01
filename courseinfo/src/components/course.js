import React from "react";
import Header from "./header";
import Content from "./content";
import Total from "./total";

const Course = ({ course }) => {
  const renderCourse = () => {
    return course.map((cour) => (
      <div key={cour.name}>
        <Header course={cour.name} />
        <Content parts={cour.parts} />
        <Total parts={cour.parts} />
      </div>
    ));
  };
  return <>{renderCourse()}</>;
};

export default Course;
