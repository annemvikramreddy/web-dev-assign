import React from 'react';
export default function TaskList() {
  const tasks = [
    { id: 1, title: 'Task One', completed: true },
    { id: 2, title: 'Task Two', completed: false },
    { id: 3, title: 'Task Three', completed: true }
  ];
  return (
    <ul>
      {tasks.map(task => <li key={task.id}>{task.title} - {task.completed ? 'Done' : 'Pending'}</li>)}
    </ul>
  );
}