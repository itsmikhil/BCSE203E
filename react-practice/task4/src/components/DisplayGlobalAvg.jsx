import React from "react";

const DisplayGlobalAvg = ({ globalAvg }) => {
  const findGrade = () => {
    if (globalAvg >= 60000) {
      return "A";
    } else if (globalAvg >= 50000) {
      return "B";
    } else if (globalAvg >= 45000) {
      return "C";
    } else if (globalAvg >= 40000) {
      return "D";
    } else {
      return "E";
    }
  };
  let grade = findGrade();
  return (
    <div className="globalAvg">
      <div className="left">
        <h3>Avg Salary</h3>
        <h3>{globalAvg}</h3>
      </div>
      <div className="right">
        <h3>Grade</h3>
        <h3>{grade}</h3></div>
    </div>
  );
};

export default DisplayGlobalAvg;
