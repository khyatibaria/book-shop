import { Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import ProductListing from "../pages/ProductListing";
import Login from "../pages/Login";
import Home from "../pages/Home";
import WishList from "../pages/WishList";
import Cart from "../pages/Cart";
import Address from "../pages/Address";
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
