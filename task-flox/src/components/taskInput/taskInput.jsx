import { useState } from "react";
import styles from "./taskInput.module.css";
export const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajoute ta prochaine tâche</h2>
      <form className={styles.container} onSubmit={handleAddTask}>
        <input
          type="text"
          className={styles.input}
          placeholder="Indequez un titre de tâche explicite."
          onChange={handleInputChange}
          value={taskTitle}
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};

//* // Importation du hook useState de React pour gérer l'état local dans le composant
// import { useState } from "react";

//* // Importation des styles spécifiques au composant depuis le fichier CSS Module
// import styles from "./taskInput.module.css";

//* // Déclaration d'un composant fonctionnel TaskInput, prenant en prop la fonction addTask
// export const TaskInput = ({ addTask }) => {
//*   // Déclaration d'un état local "taskTitle" avec une valeur initiale vide
//   const [taskTitle, setTaskTitle] = useState("");

//*   // Fonction pour mettre à jour l'état "taskTitle" en fonction de l'entrée utilisateur
//   const handleInputChange = (e) => {
//     setTaskTitle(e.target.value);
//   };

//*   // Fonction pour gérer l'événement de soumission du formulaire
//   const handleAddTask = (e) => {
//     e.preventDefault(); //* Empêche le comportement par défaut du navigateur (rechargement de la page)
//*     // Vérifie si "taskTitle" n'est pas vide ou rempli uniquement d'espaces
//     if (taskTitle.trim()) {
//       addTask(taskTitle); //* Ajoute la nouvelle tâche en appelant la prop addTask
//       setTaskTitle(""); //* Réinitialise le champ d'entrée à une chaîne vide
//     }
//   };

//*   // Rendu du composant
//   return (
//     <div className={`box ${styles.element}`}>
//*       {/* Titre du formulaire pour inciter l'utilisateur à entrer une nouvelle tâche */}
//       <h2 className={styles.title}>Ajoute ta prochaine tâche</h2>
//       <form className={styles.container} onSubmit={handleAddTask}>
//*         {/* Champ d'entrée pour le titre de la tâche */}
//         <input
//           type="text" //* Déclare que l'entrée est de type texte
//           className={styles.input} //* Applique les styles CSS au champ d'entrée
//           placeholder="Indequez un titre de tâche explicite." //* Texte indicatif pour guider l'utilisateur
//           onChange={handleInputChange} //* Appelle handleInputChange à chaque modification
//           value={taskTitle} //* L'entrée est liée à l'état "taskTitle"
//         />
//*         {/* Bouton pour soumettre le formulaire et ajouter la tâche */}
//         <button className="button-primary" type="submit">
//           Ajouter
//         </button>
//       </form>
//     </div>
//   );
// };

// Gestion de l'état local (useState) : Le hook useState permet de conserver la valeur actuelle du titre de la tâche (taskTitle) et de la mettre à jour dynamiquement.

// handleInputChange : Cette fonction met à jour l'état taskTitle lorsque l'utilisateur tape dans le champ d'entrée.

// handleAddTask : Cette fonction est déclenchée lors de la soumission du formulaire. Elle empêche le rechargement de la page grâce à e.preventDefault() et vérifie si taskTitle contient un texte valide avant d'ajouter la tâche.

// Styling CSS Modules : Les styles spécifiques au composant sont appliqués via le fichier taskInput.module.css. Cela garantit une meilleure modularité et évite les collisions de styles.

// Expérience utilisateur (UX) :

// Un placeholder guide l'utilisateur sur le type de texte attendu.

// Après l'ajout de la tâche, le champ est automatiquement vidé, améliorant l'expérience utilisateur.
