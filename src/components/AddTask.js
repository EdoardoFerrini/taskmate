import { useState } from "react";
import "./AddTask.css";

export const AddTask = ({ taskList, setTaskList }) => {

  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    setTaskList([...taskList, task]);
    e.target.task.value = ""
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add Task"
          maxLength="25"
        ></input>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
