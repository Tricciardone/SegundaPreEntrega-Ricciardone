import { Link } from "react-router-dom";
import styles from "./Item.module.css"; // Importa los estilos CSS

export const Item = ({ id, name, img, description }) => {
  return (
    <div className={`${styles.item} border m-2`}>
      <div className={`${styles.card}`}>
        <div className={`${styles["card-body"]}`}>
          <h5 className={`${styles["card-title"]}`}>{name}</h5>
          <img src={img} alt="" />
          <p className={`${styles["card-text"]}`}>{description}</p>
          <Link to={`/item/${id}`}>
            <button className={`${styles.btn} btn btn-outline-success`}>Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
