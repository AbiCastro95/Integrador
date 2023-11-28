import { useState, useEffect, useRef } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const isFirstRender = useRef(true);

  const addTask = (task) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, task];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const deleteTask = (taskIdToDelete) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskIdToDelete);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const onToggleCompleted = (taskIdToToggle) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => task.id === taskIdToToggle ? { ...task, completed: !task.completed } : task);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  }, [tasks]);

  return (
    <>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggleCompleted={onToggleCompleted} />
    </>
  );
}

export default App;