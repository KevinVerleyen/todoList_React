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

  if (taskList && taskList.length > 0) {
    return (
      <div className="box">
        <h2 className={styles.title}>
          {incompletedTasks > 0 && (
            <>
              Il te reste encore{" "}
              <span className="important">{incompletedTasks}</span> tâches à
              accomplir !
            </>
          )}

          {incompletedTasks === 0 && (
            <>Génial, tu as accompli toutes tes tâches !</>
          )}
        </h2>
        {taskList && taskList.length > 0 && (
          <ul className={styles.container}>{tasksList}</ul>
        )}
      </div>
    );
  }
  return (
    <div className="box">
      <h2 className={styles.emptyState}>
        Salut, tu n'as rien à faire ! Profite de ton temps libre !
      </h2>
    </div>
  );
};

//* // Importation du composant TaskItem depuis son chemin relatif
// import { TaskItem } from "../taskItem/taskItem";

//* // Importation des styles spécifiques au composant depuis le fichier CSS Module
// import styles from "./taskList.module.css";

//* // Déclaration d'un composant fonctionnel TaskList qui accepte plusieurs props :
//* // - taskList : la liste des tâches
//* // - editTask : une fonction pour modifier une tâche
//* // - deleteTask : une fonction pour supprimer une tâche
//* // - incompletedTasks : le nombre de tâches non accomplies
// export const TaskList = ({
//   taskList,
//   editTask,
//   deleteTask,
//   incompletedTasks,
// }) => {
//*   // Création d'une liste de composants TaskItem en parcourant "taskList"
//   const tasksList = taskList.map((task) => (
//     <TaskItem
//       key={task.id} //* Clé unique pour chaque élément de la liste
//       task={task} //* Passage de l'objet tâche en prop au composant TaskItem
//       editTask={editTask} //* Passage de la fonction d'édition en prop
//       deleteTask={deleteTask} //* Passage de la fonction de suppression en prop
//     />
//   ));

//*   // Si la liste des tâches existe et n'est pas vide
//   if (taskList && taskList.length > 0) {
//     return (
//       <div className="box">
//*         {/* Titre conditionnel, affichant un message basé sur le nombre de tâches non accomplies */}
//         <h2 className={styles.title}>
//           {incompletedTasks > 0 && (
//             <>
//*               {/* Message indiquant le nombre de tâches restantes */}
//               Il te reste encore{" "}
//               <span className="important">{incompletedTasks}</span> tâches à
//               accomplir !
//             </>
//           )}
//           {incompletedTasks === 0 && (
//*             // Message indiquant que toutes les tâches sont accomplies
//             <>Génial, tu as accompli toutes tes tâches !</>
//           )}
//         </h2>
//*         {/* Affichage de la liste des tâches sous forme de balises <ul> */}
//         {taskList && taskList.length > 0 && (
//           <ul className={styles.container}>{tasksList}</ul>
//         )}
//       </div>
//     );
//   }

//*   // Si la liste des tâches est vide ou inexistante, retourne un message différent
//   return (
//     <div className="box">
//       <h2 className={styles.emptyState}>
//*         {/* Message indiquant qu'il n'y a aucune tâche à faire */}
//         Salut, tu n'as rien à faire ! Profite de ton temps libre !
//       </h2>
//     </div>
//   );
// };

// Mapping des tâches :

// La fonction map est utilisée pour générer un composant TaskItem pour chaque tâche dans taskList.

// Chaque composant TaskItem reçoit une clé unique et les fonctions nécessaires (editTask, deleteTask).

// Conditions d'affichage :

// Si taskList contient des éléments, on affiche la liste des tâches et un message conditionnel.

// Si taskList est vide ou non définie, un message indiquant qu'il n'y a pas de tâches est affiché.

// Messages dynamiques :

// Les messages pour l'utilisateur sont personnalisés en fonction du nombre de tâches restantes (incompletedTasks).

// Structure HTML et styles :

// Les balises <ul> et <li> sont utilisées pour structurer la liste des tâches.

// Les styles spécifiques sont appliqués via le fichier CSS Modules (taskList.module.css).

// Accessibilité et modularité :

// Ce composant est bien structuré, modulaire et réactif, ce qui le rend facile à maintenir et réutiliser.