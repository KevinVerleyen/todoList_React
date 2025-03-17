import { useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";

export const TaskContainer = () => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
  };

  const editTask = (id, completedValue) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const getTaskCounts = () => {
    const completedTasks = taskList.filter((task) => task.completed).length;
    const incompletedTasks = taskList.length - completedTasks;
    return {
      completedTasks,
      incompletedTasks,
    };
  };

  const { completedTasks, incompletedTasks } = getTaskCounts();

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList
        taskList={taskList}
        editTask={editTask}
        deleteTask={deleteTask}
        incompletedTasks={incompletedTasks}
      />
      <Footer completedTasks={completedTasks} />
    </main>
  );
};
