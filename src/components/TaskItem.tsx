import React from "react";
import type { Task } from "./Typ";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task.id)}
        />
        <span
          className={`${task.isCompleted ? "line-through text-gray-400" : ""}`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:underline"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
