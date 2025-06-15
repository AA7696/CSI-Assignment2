import React, { useState } from "react";

export default function TodoCard({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const [important, setImportant] = useState(task.important);
  const [urgent, setUrgent] = useState(task.urgent);

  const handleSave = () => {
    const trimmed = text.trim();
    if (!trimmed) return alert("Task cannot be empty.");
    onEdit(task.id, { text: trimmed, important, urgent });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-yellow-100 p-3 rounded shadow space-y-2">
        <input
          className="w-full border p-1 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex gap-4 items-center text-sm">
          <label>
            <input
              type="checkbox"
              checked={important}
              onChange={(e) => setImportant(e.target.checked)}
            />
            <span className="ml-1">Important</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={urgent}
              onChange={(e) => setUrgent(e.target.checked)}
            />
            <span className="ml-1">Urgent</span>
          </label>
        </div>
        <div className="flex justify-end gap-2 text-sm">
          <button onClick={handleSave} className="px-2 py-1 bg-blue-600 text-white rounded">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="text-red-500">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow p-3 rounded flex flex-col gap-2">
      <span className={`font-medium ${task.done ? "line-through text-gray-400" : ""}`}>
        {task.text}
      </span>
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onToggle(task.id)}
            />
            Done
          </label>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
