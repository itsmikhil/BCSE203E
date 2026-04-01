import { react, useState } from "react";
import Edit from "./Edit";

const App = () => {
  const [tasks, settasks] = useState([]);
  const [task, settask] = useState("");
  const [numOfTask, setnumOfTask] = useState(0);
  const [show, setshow] = useState("all");
  const [editFlg, seteditFlg] = useState(0);
  const [editIdx, seteditIdx] = useState(0);

  const handleAddTask = (e) => {
    e.preventDefault();
    settasks((prev) => [
      ...prev,
      { content: task, status: "inProgress", id: numOfTask },
    ]);
    setnumOfTask((prev) => prev + 1);
    settask("");
  };
  const HandleCompletedTask = (id) => {
    settasks((prev) => {
      return prev.map((el) => {
        if (el.id == id) {
          if (el.status === "completed") {
            return { ...el, status: "inProgress" };
          } else {
            return { ...el, status: "completed" };
          }
        }
        return el;
      });
    });
  };

  const handleEditBefore=(id)=>{
    seteditFlg(1);
    seteditIdx(id);
    settask(tasks[id].content); 
  }
  
  const handleEditAfter=()=>{
    let result=tasks.map((el)=>{
      if(el.id===editIdx){
        el.content=task;
      }
      return el;
    })
    settasks(result);
    seteditFlg(0);
    seteditIdx(0);
    settask("");
    
  }

  const handleDelteTask = (id) => {
    settasks((prev) => prev.filter((el) => el.id != id));
  };
  return (
    <div>
      <input
        value={task}
        onChange={(e) => settask(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <button onClick={(e) => handleAddTask(e)}>Submit</button>
      <button onClick={() => setshow("all")}>All</button>
      <button onClick={() => setshow("active")}>Active</button>
      <button onClick={() => setshow("completed")}>Completed</button>
      {tasks &&
        tasks
          .filter((el) => {
            if (show == "all") {
              return true;
            } else if (show == "completed" && el.status == "completed") {
              return true;
            } else if (show == "active" && el.status == "inProgress") {
              return true;
            }
            return false;
          })
          .map((el) => {
            return (
              <div key={el.id}>
                <input
                  checked={el.status === "completed"}
                  onClick={() => HandleCompletedTask(el.id)}
                  type="checkbox"
                  name=""
                  id=""
                />
                <h3
                  className={`${el.status === "completed" ? "complete" : ""}`}
                >
                  {el.content}
                </h3>
                <button onClick={() => handleEditBefore(el.id)}>Edit</button>
                <button onClick={() => handleDelteTask(el.id)}>Delete</button>
              </div>
            );
          })}
          {editFlg===1 && <Edit task={task} settask={settask} handleEditAfter={handleEditAfter}/>}
    </div>
  );
};

export default App;
