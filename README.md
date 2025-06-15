# 🧠 Todo Application Quadrant-Based Kanban Board 

A modern, drag-and-drop enabled Todo Kanban board built with **React**, **Tailwind CSS**, and **@dnd-kit/core**, designed to help you prioritize your tasks based on **Importance** and **Urgency** using the **Eisenhower Matrix**.

---

## 📌 Features

✅ Add new tasks with importance and urgency  
✏️ Edit task details  
✔️ Mark tasks as completed  
🗑️ Delete tasks  
🔄 Drag and drop tasks between quadrants  
💾 Persistent storage using `localStorage`

---

## 🧠 Eisenhower Matrix Explained

Tasks are organized into 4 quadrants:

| Quadrant | Meaning                          | Actions                |
|----------|----------------------------------|------------------------|
| Q1       | ✅ Important & Urgent            | Do Immediately         |
| Q2       | 🕐 Not Important but Urgent      | Delegate if possible   |
| Q3       | 📅 Important but Not Urgent      | Plan & Schedule        |
| Q4       | 🧹 Not Important & Not Urgent    | Eliminate or Ignore    |

---

## 🚀 How It Works

1. **Add a Task**  
   Fill in the task text, select "Important" and/or "Urgent", and hit **Add**.

2. **Task Cards**  
   Each task appears in one of the 4 quadrants based on its priority.

3. **Drag and Drop**  
   - Drag any task card into another quadrant to change its priority.
   - This updates the `important` and `urgent` flags.

4. **Edit / Delete / Mark as Done**  
   - Use ✏️ to edit task text or change its priority.
   - Use ✔️ checkbox to mark the task as complete.
   - Use ✕ to delete the task.

5. **Persistence**  
   All tasks are saved in your browser’s `localStorage`.

---


