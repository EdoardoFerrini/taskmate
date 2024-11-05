import "./AddTask.css";

export const AddTask = () => {
  return (
    <section className="addTask">
      <form>
        <label htmlFor="task"></label>
        <input
          type="text"
          name="task"
          id="task"
          autoComplete="off"
          placeholder="Add Task"
          maxLength="25"
        ></input>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
