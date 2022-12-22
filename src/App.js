import { useEffect, useState } from "react";
import { Input } from "./components/Input";
import { List } from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let storeTasks = localStorage.getItem("tasks");
    if (storeTasks != null) {
      setTasks(JSON.parse(storeTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify([...tasks]));
  }, [tasks]);

  const addList = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1 className="text-center mb-3">To Do List App</h1>
          <Input addTasks={addList} />
          <List tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
