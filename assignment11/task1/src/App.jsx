import React from "react";

const App = () => {
  const studentName = "Rahul";
  const subject = "Data Structures";
  const marks = 78;
  const maxMarks = 100;

  return (
    <div className="dashboard">
      <h1>College Result Portal</h1>
      <img src="https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=612x612&w=0&k=20&c=yNawJP9JGXU6LOL262ME5M1U2xxNKQsvT7F9DZhZCh4=" alt="student profile" />
      <h2>Student Name: {studentName}</h2>
      <p>Subject: {subject}</p>
      <p>
        Marks: {marks} / {maxMarks}
      </p>

      <h3>Result Status: {marks >= 50 ? "Pass" : "Fail"}</h3>

      <p>
        Grade:{" "}
        {marks >= 90
          ? "A"
          : marks >= 75
            ? "B"
            : marks >= 60
              ? "C"
              : marks >= 50
                ? "D"
                : "F"}
      </p>
    </div>
  );
};

export default App;
