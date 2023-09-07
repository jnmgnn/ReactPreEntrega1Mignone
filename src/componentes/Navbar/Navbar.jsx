import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <h1><a href="#">Sanrio</a></h1>
        <ul>
            <li><a href="$">Inicio</a></li>
            <li><a href="$">Peluches</a></li>
            <li><a href="$">Ropa</a></li>
            <li><a href="$">Nosotros</a></li>
        </ul>
        <CartWidget contador = {5}/>
    </div>
  );
};

export default Navbar;