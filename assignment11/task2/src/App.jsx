import React, { useState } from "react";

const App = () => {
  const [studentName, setStudentName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [maxMarks, setMaxMarks] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const percentage = (marks / maxMarks) * 100;

  let grade = "F";

  if (percentage >= 90) grade = "A";
  else if (percentage >= 75) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";

  return (
    <div className="dashboard">
      <h1>College Result Portal</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Max Marks"
          value={maxMarks}
          onChange={(e) => setMaxMarks(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <>
          <h2>Result</h2>

          <p>Student Name: {studentName}</p>
          <p>Subject: {subject}</p>
          <p>
            Marks: {marks} / {maxMarks}
          </p>

          <p>Result Status: {percentage >= 50 ? "Pass" : "Fail"}</p>

          <p>Grade: {grade}</p>
        </>
      )}
    </div>
  );
};

export default App;