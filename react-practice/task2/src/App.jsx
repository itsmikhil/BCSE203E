import React, { useEffect, useState } from "react";
import importedData from "./students.json";

const App = () => {
  const [data, setdata] = useState(importedData);
  const [showdata, setshowdata] = useState(importedData);
  const [show, setshow] = useState("all");
  const [search, setsearch] = useState("");

  const addFields = () => {
    let result = data.map((el) => {
      let total = Number(el.marks.Math + el.marks.Science + el.marks.English);
      let avg = Number((total / 3).toFixed(2));
      return { ...el, total, avg, status: avg >= 75 ? "Pass" : "Fail" };
    });
    setshowdata(result);
    setdata(result);
  };

  const handleSearch = (e) => {
    const input = e.target.value;
    if (input === "") {
      setsearch(input);
      setshowdata(data);
      addFields();
      return;
    }
    setsearch(input);
    setshowdata((prev) => prev.filter((el) => el.name.includes(input)));
  };

  const sortByName = () => {
    setshowdata((prev) =>
      [...prev].sort((a, b) => a.name.localeCompare(b.name)),
    );
  };

  const sortByTotal = () => {
    // we have to ...prev so that new array is returned and accepted
    // otherwise on it returns same aaray so react doesnt accept it
    setshowdata((prev) => [...prev].sort((a, b) => b.total - a.total));
  };

  const handleFilter = (val) => {
    if (val === "all") {
      addFields();
      setshow("all");
      return;
    }
    setshow(val);
    setshowdata(data.filter((el) => el.status.toLowerCase() === val));
  };

  useEffect(() => {
    addFields();
  }, []);

  return (
    <div>
      <h3>Student Report Dashboard</h3>
      <input value={search} onChange={(e) => handleSearch(e)} type="text" />
      <select
        value={show}
        onChange={(e) => handleFilter(e.target.value)}
        name="show"
        id=""
      >
        <option value="all">All</option>
        <option value="pass">Pass</option>
        <option value="fail">Fail</option>
      </select>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByTotal}>Sort By Total</button>
      <table>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Class</th>
          <th>Math</th>
          <th>Science</th>
          <th>English</th>
          <th>Total</th>
          <th>Average</th>
          <th>Result</th>
        </tr>
        {showdata.map((el) => {
          return (
            <tr>
              <td>{el.roll}</td>
              <td>{el.name}</td>
              <td>{el.class}</td>
              <td>{el.marks.Math}</td>
              <td>{el.marks.Science}</td>
              <td>{el.marks.English}</td>
              <td>{el.total}</td>
              <td>{el.avg}</td>
              <td>{el.status}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default App;
