import React, { useState } from "react";
import StudentResult from "./StudentResult";

function App() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [maxMarks, setMaxMarks] = useState("");

  const [students, setStudents] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      name: name,
      subject: subject,
      marks: parseInt(marks),
      maxMarks: parseInt(maxMarks)
    };

    setStudents([...students, newStudent]);

    setName("");
    setSubject("");
    setMarks("");
    setMaxMarks("");
  }

  return (
    <div className="container">
      <h1>College Result Portal</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

        <button type="submit">Add Student</button>

      </form>

      <h2>Student Results</h2>

      {students.map((student, index) => (
        <StudentResult
          key={index}
          name={student.name}
          subject={student.subject}
          marks={student.marks}
          maxMarks={student.maxMarks}
        />
      ))}

    </div>
  );
}

export default App;