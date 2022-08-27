import { useEffect, useState } from "react";
import "./ProductListing.css";
import NavBar from "../common/NavBar";
import MenuFilters from "../components/MenuFilters";
import ProductItem from "../common/ProductItem";
const ProductListing = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [wishlistCount, setWishlistCount] = useState("0");
  const [productCount, setProductCount] = useState("0");
  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setAllProduct(data.products);
      });
  }, []);
  return (
    <div>
      <NavBar
        searchBar={true}
        wishlistCount={wishlistCount}
        productCount={productCount}
      />
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
                addToCart={() => {
                  setProductCount((prev) => {
                    return +prev + 1;
                  });
                }}
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
    </div>
  );
};
export default ProductListing;
