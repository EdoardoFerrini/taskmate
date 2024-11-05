import "./ShowTask.css";

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  function handleClear() {
    setTaskList([]);
  }

  function handleDelete(id) {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  }

  function handleEdit(id){
    const task = taskList.find(t => t.id === id);
    setTask(task);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button className="clearAll" onClick={handleClear}>
          Clear All
        </button>
      </div>

      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDelete(task.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
