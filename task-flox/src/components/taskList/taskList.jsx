import { TaskItem } from "../taskItem/taskItem";
import styles from "./taskList.module.css";

export const TaskList = ({
  taskList,
  editTask,
  deleteTask,
  incompletedTasks,
}) => {
  const tasksList = taskList.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  ));

  return (
    <div className="box">
      <h2 className={styles.title}>
        Il te reste encore {incompletedTasks} tâches à accomplir !
      </h2>

      {taskList && taskList.length > 0 && (
        <ul className={styles.container}>{tasksList}</ul>
      )}
    </div>
  );
};
