import React from "react";

function StudentResult(props) {

  const { name, subject, marks, maxMarks } = props;

  const status = marks >= 50 ? "Pass" : "Fail";

  let grade = "";
  if (marks >= 90) grade = "A";
  else if (marks >= 75) grade = "B";
  else if (marks >= 60) grade = "C";
  else if (marks >= 50) grade = "D";
  else grade = "F";

  return (
    <div className="resultBox">

      <p>Student Name: {name}</p>
      <p>Subject: {subject}</p>
      <p>Marks: {marks} / {maxMarks}</p>
      <p>Result Status: {status}</p>
      <p>Grade: {grade}</p>

      <hr />

    </div>
  );
}

export default StudentResult;