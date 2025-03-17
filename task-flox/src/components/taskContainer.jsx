import { useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";

export const TaskContainer = () => {

  const [taskList, setTaskList] = useState([
    // {
    //   id: 1,
    //   title: "Faire la vaiselle",
    //   completed: false,
    // },
    // {
    //   id: 2,
    //   title: "Sortir le chien",
    //   completed: true,
    // }
  ]);

  const addTask = (title) => {
    const newTask = {
      id: taskList.length + 1,
      title: title,
      completed: false,
    };
    setTaskList([...taskList, newTask])
  }

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask}/>
      <TaskList />
      <Footer/>
    </main>
  );
};
