import "./Menu.css";
import { Link } from "react-router-dom";
const MenuBar = () => {
  return (
    <div className="menu-container">
      <button className="menu-btn">
        <i className="fas fa-bars"></i>
      </button>
      <Link to="/productlist" className="menu-link">
        Books
      </Link>
      <Link to="/productlist" className="menu-link">
        Popular
      </Link>
      <Link to="/productlist" className="menu-link">
        Bestsellers
      </Link>
      <Link to="/productlist" className="menu-link">
        New Arrivals
      </Link>
    </div>
  );
};
export default MenuBar;
