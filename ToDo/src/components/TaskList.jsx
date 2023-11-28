import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import TaskItem from './TaskItem'; 
import styles from './TaskList.module.css';


TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

function TaskList ({ tasks, onToggleCompleted, onDelete }) {
  const [taskList, setTasks] = useState(tasks);

  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  return (
    <div className={styles.containerList}>
      {taskList && taskList.map(task => (
        <TaskItem key={task.id} task={task} onToggleCompleted={() => onToggleCompleted(task.id)} onDelete={() => onDelete(task.id)} />
      ))}
    </div>
  );
}
export default TaskList;