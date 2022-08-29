import "./Cart.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../common/NavBar";
import CartList from "./CartList";
import Summary from "../components/Summary";
const Cart = () => {
  return (
    <div>
      <NavBar sx={{ justifyContent: "space-between" }} />
      <div className="cart-container">
        <CartList />
        <Summary />
      </div>
    </div>
  );
};
export default Cart;
