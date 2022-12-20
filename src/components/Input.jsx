import React, { useRef, useState } from "react";

export const Input = ({ addTasks }) => {
  const [task, setTask] = useState('');
  const inputRef = useRef();

  const addTask = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTasks(task);
    setTask('');
    inputRef.current.focus();
  }

  return (
    <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Todo things"
          aria-label="Todo things"
          aria-describedby="button-addon2"
          value={task}
          ref={inputRef}
          onChange={addTask}
        ></input>
        <button
          className="btn btn-outline-primary"
          type="submit"
          id="button-addon2"
          onClick={handleSubmit}
        >
          Add
        </button>
    </div>
  );
};
