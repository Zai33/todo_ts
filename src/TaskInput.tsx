import React from "react";

interface TaskInputProps {
  taskName: string;
  setTaskName: (value: string) => void;
  addTask: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({
  taskName,
  setTaskName,
  addTask,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="flex items-center gap-4 my-4">
      <input
        type="text"
        value={taskName}
        className="px-4 py-2 rounded-md shadow-md border-2"
        placeholder="Add a new task"
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={addTask}
        className="px-4 py-2 rounded-md bg-blue-400 text-white shadow-md"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
