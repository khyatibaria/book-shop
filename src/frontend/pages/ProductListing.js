import { useCallback, useEffect, useState } from "react";
import "./ProductListing.css";
import NavBar from "../common/NavBar";
import MenuFilters from "../components/MenuFilters";
import ProductItem from "../common/ProductItem";
import { useCart } from "../context/cart-context";
import { FilterProvider, useFilter } from "../context/filter-context";

const ProductListing = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [wishlistCount, setWishlistCount] = useState("0");
  const { setCartProduct, addToCart } = useCart();
  const { sortFilter } = useFilter();
  const menuFilterHandler = useCallback(() => {
    console.log("called", sortFilter["low to high"]);
    //if (sortFilter["low to high"] === true) console.log("hey");
  }, []);
  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setAllProduct(data.products);
      });
  }, []);
  useEffect(() => {
    if (sortFilter !== null) menuFilterHandler();
  }, [sortFilter]);
  return (
    <FilterProvider>
      <div className="product-list-wrapper">
        <div className="menu-filter-container">
          <MenuFilters />
        </div>
        <div className="product-listing-container">
          {allProduct?.map((item, index) => {
            return (
              <ProductItem
                key={item.id}
                title={item.title}
                author={item.author}
                price={item.price}
                src={item.src}
                buttonLabel="Add to Cart"
                onClick={addToCart}
                addToWishList={() => {
                  setWishlistCount((prev) => {
                    return +prev + 1;
                  });
                }}
              />
            );
          })}
        </div>
      </div>
    </FilterProvider>
  );
};
export default ProductListing;
