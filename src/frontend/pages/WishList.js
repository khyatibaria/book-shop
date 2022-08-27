import "./WishList.css";
import NavBar from "../common/NavBar";
import ProductItem from "../common/ProductItem";
const WishList = () => {
  const products = [
    {
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      price: "200",
      categoryName: "finance",
      src: "https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg",
      ratings: "4.6",
      quantity: 100,
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: "250",
      categoryName: "finance",
      src: "https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
      ratings: "3",
      quantity: 100,
    },
    {
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      price: "450",
      categoryName: "finance",
      src: "https://images-na.ssl-images-amazon.com/images/I/51DLoxAJ68L._SX324_BO1,204,203,200_.jpg",
      ratings: "4",
      quantity: 100,
    },
    {
      title: "Diamonds in the Dust",
      author: "Saurabh Mukherjea",
      price: "320",
      categoryName: "finance",
      src: "https://images-na.ssl-images-amazon.com/images/I/41k0WnFsBGL._SX318_BO1,204,203,200_.jpg ",
      ratings: "3",
      quantity: 100,
    },
  ];
  return (
    <div>
      <NavBar sx={{ justifyContent: "space-between" }} />
      <div className="wishlist-container">
        {products?.map((item, index) => {
          return (
            <ProductItem
              key={index}
              title={item.title}
              author={item.author}
              price={item.price}
              src={item.src}
              buttonLabel="Add to Cart"
            />
          );
        })}
      </div>
    </div>
  );
};
export default WishList;
