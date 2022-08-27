import { Routes, Route } from "react-router-dom";
import Signup from "./frontend/pages/Signup";
import ProductListing from "./frontend/pages/ProductListing";
import Login from "./frontend/pages/Login";
import Home from "./frontend/pages/Home";
import WishList from "./frontend/pages/WishList";
import Mockman from "mockman-js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="productlist" element={<ProductListing />} />
      <Route path="wishlist" element={<WishList />} />
      <Route path="mockman" element={<Mockman />} />
    </Routes>
  );
}

export default App;
