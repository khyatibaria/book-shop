import "./Menu.css";
import { Link } from "react-router-dom";
const MenuBar = () => {
  return (
    <div className="menu-container">
      <div>
        <button className="menu-btn">
          <i className="fas fa-bars"></i>
        </button>
        <Link to="/productlist">Books</Link>
      </div>
      <div>Popular</div>
      <div>Bestsellers</div>
      <div>New Arrivals</div>
    </div>
  );
};
export default MenuBar;
