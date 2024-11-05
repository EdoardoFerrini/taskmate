import { useState } from "react";
import "./ShowTask.css";

export const ShowTask = () => {
    const [tasks, setTasks] = useState([
        { id : 1, name: "Go to the Supermarket" , time: "2:09:01 PM 05/11/2024"},
        {id : 2, name: "Study programming", time: "3:09:01 PM 05/11/2024"},
        {id : 3, name: "Go out for a walk", time: "6:09:01 PM 05/11/2024"},
    ])

  return (
    <section className="showTask">
      <div className="head">
        <div>
        <span className="title">Todo</span>
        <span className="count">{tasks.length}</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
      

      <ul>
      {tasks.map((task)=>(
        <li>
        <p>
          <span className="name">{task.name}</span>
          <span className="time">{task.time}</span>
        </p>
        <i className="bi bi-pencil-square"></i>
        <i className="bi bi-trash"></i>
      </li>
    ))}
        
        
      </ul>
    </section>
  );
};
