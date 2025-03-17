import styles from "./footer.module.css";

export const Footer = ({ completedTasks }) => {
  if (completedTasks) {
    return (
      <footer>
        <code className={styles.footer}>
          Avec TaskFlow tu as éliminé {completedTasks} tâche
          {completedTasks > 1 ? "s" : null} !
        </code>
      </footer>
    );
  }

  return null;
};
//* // Importation des styles spécifiques pour le composant depuis le fichier CSS Module
// import styles from "./footer.module.css";

//* // Déclaration d'un composant fonctionnel Footer qui accepte la prop "completedTasks"
// export const Footer = ({ completedTasks }) => {
//*   // Vérifie si "completedTasks" contient une valeur (n'est pas null, undefined ou 0)
//  if (completedTasks) {
//    return (
//       <footer>
// *        {/* Utilisation de styles CSS via CSS Modules,
// *            et affichage dynamique d'un message dans une balise <code> */}
//         <code className={styles.footer}>
// *          {/* Message contenant le nombre de tâches terminées,
// *             avec gestion conditionnelle pour ajouter un 's' pluriel si nécessaire */}
// *          Avec TaskFlow tu as éliminé {completedTasks} tâche
//           {completedTasks > 1 ? "s" : null} !
//         </code>
//      </footer>
//     );
//   }

//*    Si "completedTasks" n'a pas de valeur (0, null, undefined), retourne null,
//*    ce qui signifie que rien ne sera rendu dans le DOM
//   return null;
// };
//? CSS Modules : L'import styles utilise un module CSS, ce qui permet d'appliquer des styles spécifiques au composant Footer sans risque de collisions avec d'autres styles dans l'application.

//? Condition ternaire (completedTasks > 1 ? "s" : null) : Cette condition sert à ajouter la lettre "s" pour accorder le mot "tâche" au pluriel uniquement si le nombre de tâches est strictement supérieur à 1.

//? Prop completedTasks : Le composant est conçu pour être réactif aux données. Si aucune tâche n'est terminée (completedTasks est falsy), le composant retourne null, ce qui signifie qu'il n'affichera rien dans l'interface.

//? Accessibilité et structure : Le contenu est encapsulé dans une balise <footer>, indiquant que ce composant est un pied de page, ce qui est bon pour la sémantique HTML.