import React, { useRef } from "react";

export const Input = ({ addList }) => {
  const task = useRef("");

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Todo things"
        aria-label="Todo things"
        aria-describedby="button-addon2"
        ref={task}
      ></input>
      <button
        className="btn btn-outline-primary"
        type="button"
        id="button-addon2"
        onClick={() => {
          addList(task.current.value);
          task.current.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
};
