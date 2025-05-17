import { useState } from "react";
import type { Task } from "./type/Typ";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React with TypeScript",
      isCompleted: false,
    },
  ]);

  const [taskName, setTaskName] = useState<string>("");

  const addTask = () => {
    const trimmed = taskName.trim();
    if (!trimmed) return;

    setTasks((prev) => [
      ...prev,
      { id: prev.length + 1, title: trimmed, isCompleted: false },
    ]);
    setTaskName("");
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center h-screen p-10">
      <h1 className="text-3xl text-blue-500">Tasks</h1>
      <TaskInput
        taskName={taskName}
        setTaskName={setTaskName}
        addTask={addTask}
      />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
