import styles from "./header.module.css";
import reactLogo from "../../assets/react.svg";
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={reactLogo} alt="logo" width={50} height={50} />
        <div>
          <h1>TaskFlow</h1>
          <div className="color-gray">
            <code>Éliminez le chaos, suivez le flux.</code>
          </div>
        </div>
      </div>
      <code className="color-primary">v.1.0</code>
    </div>
  );
};

//* Importation des styles spécifiques pour le composant depuis le fichier CSS Module
//  import styles from "./header.module.css";

//*  Importation d'une image (le logo React) depuis les assets du projet
// import reactLogo from "../../assets/react.svg";

// * Déclaration d'un composant fonctionnel Header
// export const Header = () => {
//   return (
//     <div className={styles.container}>
//*       {/* Conteneur principal avec des styles appliqués */}
//       <div className={styles.titleContainer}>
//*         {/* Affiche le logo React avec une largeur et une hauteur définies */}
//         <img src={reactLogo} alt="logo" width={50} height={50} />
//         <div>
//*           {/* Affiche le titre principal de l'application */}
//           <h1>TaskFlow</h1>
//*           {/* Ajoute un sous-texte dans une couleur grise */}
//           <div className="color-gray">
//             <code>Éliminez le chaos, suivez le flux.</code>
//           </div>
//         </div>
//       </div>
//*       {/* Version actuelle de l'application affichée en bas */}
//       <code className="color-primary">v.1.0</code>
//     </div>
//   );
// };

//? Utilisation des styles (CSS Modules) : Vous appliquez des styles à vos éléments en important un fichier CSS module (header.module.css). Cela garantit que vos styles sont isolés et ne sont pas affectés par d'autres classes globales.

//? Gestion du logo (asset) : L'image du logo React est importée et affichée avec des dimensions précises grâce aux attributs width et height.

//? Structure sémantique :

//? Le div principal utilise une classe pour organiser les éléments enfants, créant une structure propre et lisible.

//? h1 est utilisé pour marquer le titre principal de l'application, ce qui est bon pour l'accessibilité et le SEO.

//? Texte stylisé : Vous utilisez des classes globales (color-gray et color-primary) pour appliquer des couleurs spécifiques au texte, probablement définies dans votre fichier CSS global.

//? Version de l'application : L'affichage de la version (v.1.0) est pratique pour les utilisateurs et développeurs, indiquant clairement la version actuelle.
