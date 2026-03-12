let students = [];

document.getElementById("studentForm").addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const marks = parseInt(document.getElementById("marks").value);
  const maxMarks = parseInt(document.getElementById("maxMarks").value);

  const student = {
    name: name,
    subject: subject,
    marks: marks,
    maxMarks: maxMarks
  };

  students.push(student);

  displayResults();

  document.getElementById("studentForm").reset();
});


function displayResults(){

  const container = document.getElementById("results");
  container.innerHTML = "";

  students.forEach(function(student){

    const status = student.marks >= 50 ? "Pass" : "Fail";

    let grade = "";

    if(student.marks >= 90) grade = "A";
    else if(student.marks >= 75) grade = "B";
    else if(student.marks >= 60) grade = "C";
    else if(student.marks >= 50) grade = "D";
    else grade = "F";

    const box = document.createElement("div");
    box.className = "resultBox";

    box.innerHTML = `
      <p>Student Name: ${student.name}</p>
      <p>Subject: ${student.subject}</p>
      <p>Marks: ${student.marks} / ${student.maxMarks}</p>
      <p>Result Status: ${status}</p>
      <p>Grade: ${grade}</p>
      <hr>
    `;

    container.appendChild(box);

  });

}
