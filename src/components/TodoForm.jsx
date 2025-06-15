// components/TaskForm.js
import React, { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");
  const [important, setImportant] = useState(false);
  const [urgent, setUrgent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return alert("Task can't be empty.");
    onAdd({ text: trimmed, important, urgent });
    setText("");
    setImportant(false);
    setUrgent(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow space-y-3">
      <input
        className="w-full border p-2 rounded"
        placeholder="Enter your task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex gap-4 items-center">
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
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 ml-auto">
          Add Task
        </button>
      </div>
    </form>
  );
}
