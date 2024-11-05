import "./AddTask.css";

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    if (task.id) {
      const updatedTasks = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : {
              id: todo.id,
              name: todo.name,
              time: todo.time,
            }
      );
      setTaskList(updatedTasks);
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      e.target.task.value = "";
    }
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
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        ></input>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
