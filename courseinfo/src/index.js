import React from "react";
import ReactDOM from "react-dom";
import Course from "./components/course";
import courses from "./Data/course";

const App = () => {
  return <Course course={courses} />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
