import "./App.css";
import NavBar from "./frontend/common/NavBar";
import NavRoutes from "./frontend/routes/NavRoutes";
import Footer from "./frontend/common/Footer";
import { useCart } from "./frontend/context/cart-context";
function App() {
  const { cartProduct } = useCart();
  return (
    <div className="app">
      <NavBar searchBar={true} wishlistCount="0" productCount={cartProduct} />
      <NavRoutes />
      <Footer />
    </div>
  );
}

export default App;
