import { useRef } from "react";
import { Input } from "./components/Input";
import { List } from "./components/List";

function App() {
  const tasks = useRef([]);

  const addList = (task) => {
    tasks.current.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks.current));
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1 className="text-center mb-3">To Do List App</h1>
          <Input addList={addList} />
          <List tasks={tasks.current} />
        </div>
      </div>
    </div>
  );
}

export default App;
