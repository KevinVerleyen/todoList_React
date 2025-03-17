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
