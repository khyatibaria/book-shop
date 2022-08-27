import "./Home.css";
import NavBar from "../common/NavBar";
import MenuBar from "../common/MenuBar";
import { images } from "../assets/index";
import Carousel from "../common/Carousel";
import Footer from "../common/Footer";
const Home = () => {
  const { AllBooks, SlideOne, SlideTwo, SlideThree, SlideFour } = images;
  return (
    <div>
      <NavBar
        searchBar={true}
        // wishlistCount={wishlistCount}
        // productCount={productCount}
      />
      <MenuBar />
      <Carousel
        imgOne={SlideOne}
        imgTwo={SlideTwo}
        imgThree={SlideThree}
        imgFour={SlideFour}
      />
      <section className="bestseller-section">
        <div className="bestseller-container">
          <div className="bestseller-head">Bestsellers</div>
          <p className="bestseller-text">
            Discover the books and authors that readers are buzzing. From
            mysteries to love stories, discover some of the most anticipated
            books coming out coming out this spring!
          </p>
          <button className="btn outline-primary">See all bestsellers</button>
        </div>
        <div className="image-container">
          <img src={AllBooks} className="bestseller-img" alt="all_books" />
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
