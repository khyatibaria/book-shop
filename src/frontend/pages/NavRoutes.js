import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import ProductListing from "./ProductListing";
import Login from "./Login";
import Home from "./Home";
import WishList from "./WishList";
import Cart from "./Cart";
import Address from "./Address";
import Mockman from "mockman-js";
const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="productlist" element={<ProductListing />} />
      <Route path="wishlist" element={<WishList />} />
      <Route path="cart" element={<Cart />} />
      <Route path="address" element={<Address />} />
      <Route path="mockman" element={<Mockman />} />
    </Routes>
  );
};
export default NavRoutes;
