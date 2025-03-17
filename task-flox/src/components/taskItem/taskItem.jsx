import styles from "./taskItem.module.css";

export const TaskItem = ({ task, editTask, deleteTask }) => {
  return (
    <li
      className={`${styles.container} ${
        task?.completed ? styles.success : styles.default
      }`}
      onClick={() => editTask(task.id, !task.completed)}
    >
      <div className={styles.item}>
        <div
          className={`${styles.id} ${
            task?.completed ? styles.idSuccess : styles.idDefault
          }`}
        >
          {task.id}
        </div>
        <div
          className={
            task?.completed ? styles.contentSuccess : styles.contentDefault
          }
        >
          {task.title}
        </div>
      </div>
      <button
        className="button-primary"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
      >
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: "20px", height: "20px" }}
          >
            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
            <path
              fillRule="evenodd"
              d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </>
      </button>
    </li>
  );
};

//* // Importation des styles spécifiques au composant depuis le fichier CSS Module
// import styles from "./taskItem.module.css";

//* // Déclaration d'un composant fonctionnel TaskItem qui accepte trois props : task, editTask, deleteTask
// export const TaskItem = ({ task, editTask, deleteTask }) => {
//   return (
//     <li
//*       // Classe CSS conditionnelle en fonction de l'état de "completed" de la tâche
//       className={`${styles.container} ${
//         task?.completed ? styles.success : styles.default
//       }`}
//*       // Appelle la fonction editTask avec l'ID de la tâche et son nouvel état lorsqu'on clique sur l'élément
//       onClick={() => editTask(task.id, !task.completed)}
//     >
//       <div className={styles.item}>
//         <div
//*           // Classe CSS conditionnelle pour styliser l'identifiant selon l'état "completed" de la tâche
//           className={`${styles.id} ${
//             task?.completed ? styles.idSuccess : styles.idDefault
//           }`}
//         >
//*           {/* Affiche l'identifiant de la tâche */}
//           {task.id}
//         </div>
//         <div
//*           // Classe CSS conditionnelle pour styliser le contenu selon l'état "completed" de la tâche
//           className={
//             task?.completed ? styles.contentSuccess : styles.contentDefault
//           }
//         >
//*           {/* Affiche le titre de la tâche */}
//           {task.title}
//         </div>
//       </div>
//       <button
//         className="button-primary" //* Classe CSS globale pour styliser le bouton
// *        // Empêche la propagation du clic sur le bouton pour éviter d'activer l'événement onClick sur l'élément parent
//         onClick={(e) => {
//           e.stopPropagation();
//           deleteTask(task.id); //* Appelle la fonction deleteTask avec l'identifiant de la tâche
//         }}
//       >
//         <>
// *          {/* SVG représentant une icône (probablement une corbeille pour la suppression) */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor" //* Définit la couleur du SVG
//             style={{ width: "20px", height: "20px" }} //* Définit la taille du SVG
//           >
//*             {/* Path 1 : Représente la partie supérieure du dessin (par exemple, une barre sur une corbeille) */}
//            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
//*             {/* Path 2 : Représente le corps principal du dessin avec une forme spécifique */}
//             <path
//               fillRule="evenodd"
//               d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </>
//       </button>
//     </li>
//   );
// };
