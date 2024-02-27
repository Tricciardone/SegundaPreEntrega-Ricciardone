import { CartWidget } from "../common/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2">
      <h4>Tienda App</h4>
      <div>
        <Link to="/">
          <button className="btn btn-outline-dark mx-2">Home</button>
        </Link>
        <Link to="/category/perro">
          <button className="btn btn-outline-dark mx-2">Perro</button>
        </Link>
        <Link to="/category/gato">
          <button className="btn btn-outline-dark mx-2">Gato</button>
        </Link>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};
