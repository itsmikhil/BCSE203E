import React from "react";
import { useState } from "react";
import DisplayEmployee from "./components/DisplayEmployee";
import DisplayDeptAvg from "./components/DisplayDeptAvg";
import { useEffect } from "react";
import DisplayGlobalAvg from "./components/DisplayGlobalAvg";
import ChartComp from "./components/ChartComp";

const App = () => {
  const [employee, setemployee] = useState([]);
  const [inputName, setinputName] = useState("");
  const [inputDept, setinputDept] = useState("IT");
  const [inputSalary, setinputSalary] = useState(0);
  const [globalAvg, setglobalAvg] = useState(0);
  const [deptAvg, setdeptAvg] = useState({ IT: 0, HR: 0, Finance: 0 });

  const findAvg = (dept) => {
    if (dept === "all") {
      let sum = employee.reduce((acc, curr) => {
        return acc + curr.sal;
      }, 0);
      let avg = (sum / employee.length).toFixed(2);
      setglobalAvg(avg);
      return;
    }

    let sum = 0;
    let count = 0;
    employee.forEach((el) => {
      if (el.dept === dept) {
        sum += el.sal;
        count++;
      }
    });
    if(count==0){
      return;
    }
    let avg = (sum / count).toFixed(2);
    setdeptAvg((prev) => 
      ({...prev,[dept] : avg})
    );
  };

  const handleAddEmployee = () => {
    if (inputName === "" || inputSalary <= 0) {
      return;
    }
    setemployee((prev) => [
      ...prev,
      { name: inputName, sal: inputSalary, dept: inputDept },
    ]);
    setinputName("");
    setinputSalary(0);
    setinputDept("IT");
    console.log(employee);
    // console.log(deptAvg["IT"]);
  };

  useEffect(() => {
    if(employee.length>0){
      findAvg("all");
      findAvg("IT");
      findAvg("HR");
      findAvg("Finance");
    }
  }, [employee])

  const sortBySal=()=>{
    let sorted=employee.sort((a,b)=>b.sal-a.sal);
    setemployee([...sorted]);
  }
  

  return (
    <div className="main">
      <div className="inner gap-3 p-3">
        <h1>Employee Dashboard</h1>
        <h3>Add Employee</h3>
      <input
      className="border-1"
        value={inputName}
        onChange={(e) => setinputName(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <input
      className="border-1"
        value={inputSalary}
        onChange={(e) => setinputSalary(Number(e.target.value))}
        type="number"
        name=""
        id=""
      />
      <select
        className="border-1"
        onChange={(e) => setinputDept(e.target.value)}
        defaultValue={"IT"}
        name=""
        id=""
      >
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>
      <button className="border-1 bg-blue-500 " onClick={handleAddEmployee}>Submit</button>
      <button className="border-1 bg-blue-500 " onClick={sortBySal}>Sort</button>
      <DisplayGlobalAvg globalAvg={globalAvg}/>
      <h3>Employee List:-</h3>
      <DisplayEmployee employee={employee} />
      <DisplayDeptAvg deptAvg={deptAvg}/>
      <ChartComp employee={employee}/>
      </div>
    </div>
  );
};

export default App;
