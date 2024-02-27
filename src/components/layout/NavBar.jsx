import { CartWidget } from "../common/CartWidget";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"; // Importa los estilos CSS

export const NavBar = () => {
  return (
    <nav className={`${styles.Border1} navbar`}> {/* Aplica las clases de estilo al navbar */}
      <h4>PetShop</h4>
      <ul className={`${styles.ulFlex}`}>
        <li><Link to="/" className={`${styles.navLink} nav-link`}>Home</Link></li>
        <li><Link to="/category/perro" className={`${styles.navLink} nav-link`}>Perro</Link></li>
        <li><Link to="/category/gato" className={`${styles.navLink} nav-link`}>Gato</Link></li>
        <li><Link to="/category/nosotros" className={`${styles.navLink} nav-link`}>Nosotros</Link></li>
        <li><Link to="/category/contacto" className={`${styles.navLink} nav-link`}>Contacto</Link></li>
        <li><Link to="/carrito" className={`${styles.navLink} nav-link`}><CartWidget /></Link></li>
      </ul>
      <div >
      </div>
    </nav>
  );
};
