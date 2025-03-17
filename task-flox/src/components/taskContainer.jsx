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

//* // Importation du hook useState depuis React pour gérer l'état local
// import { useState } from "react";

//* // Importation des composants enfants utilisés dans le TaskContainer
// import { Footer } from "./footer/footer";
// import { Header } from "./header/header";
// import { TaskInput } from "./taskInput/taskInput";
// import { TaskList } from "./taskList/taskList";

//* // Déclaration du composant TaskContainer, qui gère l'ensemble des tâches
// export const TaskContainer = () => {
//*   // État local pour stocker la liste des tâches
//   const [taskList, setTaskList] = useState([]);

//*   // Fonction pour ajouter une nouvelle tâche
//   const addTask = (title) => {
//*     // Création d'une nouvelle tâche avec un identifiant unique
//     const newTask = {
//       id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1, //* Calcul du prochain ID
//       title: title, //* Titre de la tâche défini par l'utilisateur
//       completed: false, //* La tâche est initialement marquée comme non terminée
//     };
//*     // Mise à jour de l'état avec la nouvelle liste de tâches
//     setTaskList([...taskList, newTask]);
//   };

//*   // Fonction pour modifier l'état de complétion d'une tâche
//   const editTask = (id, completedValue) => {
//*     // Parcours de la liste des tâches pour mettre à jour la tâche correspondant à l'ID
//     setTaskList(
//       taskList.map((task) =>
//         task.id === id ? { ...task, completed: completedValue } : task
//       )
//     );
//   };

//*   // Fonction pour supprimer une tâche de la liste
//   const deleteTask = (id) => {
//*     // Filtrage des tâches pour retirer celle ayant l'ID correspondant
//     setTaskList(taskList.filter((task) => task.id !== id));
//   };

//*   // Fonction pour calculer les tâches terminées et non terminées
//   const getTaskCounts = () => {
//     const completedTasks = taskList.filter((task) => task.completed).length; //* Nombre de tâches terminées
//     const incompletedTasks = taskList.length - completedTasks; //* Nombre de tâches non terminées
//     return {
//       completedTasks,
//       incompletedTasks,
//     };
//   };

//*   // Récupération des tâches terminées et non terminées
//   const { completedTasks, incompletedTasks } = getTaskCounts();

//*   // Rendu du composant principal
//   return (
//     <main>
//*       {/* Affichage de l'en-tête */}
//       <Header />
//*       {/* Composant pour ajouter de nouvelles tâches */}
//       <TaskInput addTask={addTask} />
//*       {/* Composant pour afficher la liste des tâches avec les fonctions d'édition et de suppression */}
//       <TaskList
//         taskList={taskList} //* Liste des tâches actuelles
//         editTask={editTask} //* Fonction pour éditer une tâche
//         deleteTask={deleteTask} //* Fonction pour supprimer une tâche
//         incompletedTasks={incompletedTasks} //* Nombre de tâches non terminées
//       />
//*       {/* Composant pour afficher le pied de page avec le nombre de tâches terminées */}
//       <Footer completedTasks={completedTasks} />
//     </main>
//   );
// };

// Gestion de l'état local avec useState :

// taskList contient toutes les tâches et est mis à jour via les fonctions addTask, editTask et deleteTask.

// Logique des tâches :

// addTask : Ajoute une nouvelle tâche avec un ID unique et marque initialement la tâche comme non terminée.

// editTask : Met à jour l'état completed d'une tâche.

// deleteTask : Supprime une tâche en filtrant la liste actuelle.

// Calculs dynamiques :

// getTaskCounts : Calcule dynamiquement les tâches terminées et non terminées pour mettre à jour les informations affichées.

// Architecture modulaire :

// Le composant TaskContainer est le conteneur principal qui combine les composants enfants (Header, TaskInput, TaskList, Footer).

// Chaque composant enfant a un rôle bien défini, ce qui rend l'application maintenable et évolutive.

// Structure sémantique :

// Utilisation de la balise <main> pour indiquer que c'est la section principale de la page.

// Les composants enfants sont placés dans un ordre logique, améliorant l'expérience utilisateur.