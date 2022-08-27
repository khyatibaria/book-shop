import { useEffect, useState } from "react";
import "./Carousel.css";
const Carousel = (props) => {
  const { imgOne, imgTwo, imgThree, imgFour } = props;
  const [imageCounter, setImageCounter] = useState(0);
  const prevHandler = () => {
    setImageCounter((prev) => {
      if (prev !== 0) return prev - 1;
      else return 3;
    });
  };
  const nextHandler = () => {
    setImageCounter((prev) => {
      if (prev !== 3) return prev + 1;
      else return 0;
    });
  };
  // useEffect(() => {
  //   setTimeout(nextHandler, 4000);
  // }, [imageCounter]);
  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={prevHandler}>
        <i class="fas fa-angle-double-left"></i>
      </button>
      <button className="carousel-btn next" onClick={nextHandler}>
        <i class="fas fa-angle-double-right"></i>
      </button>
      {imageCounter === 0 && (
        <div className="carousel-slide">
          <img src={imgOne} alt="one-img" />
        </div>
      )}
      {imageCounter === 1 && (
        <div className="carousel-slide">
          <img src={imgTwo} alt="two-img" />
        </div>
      )}
      {imageCounter === 2 && (
        <div className="carousel-slide">
          <img src={imgThree} alt="three-img" />
        </div>
      )}
      {imageCounter === 3 && (
        <div className="carousel-slide">
          <img src={imgFour} alt="four-img" />
        </div>
      )}
      <div className="dots-container">
        <button
          className={imageCounter === 0 ? ["active-btn"] : ["dots-btn"]}
        ></button>
        <button
          className={imageCounter === 1 ? ["active-btn"] : ["dots-btn"]}
        ></button>
        <button
          className={imageCounter === 2 ? ["active-btn"] : ["dots-btn"]}
        ></button>
        <button
          className={imageCounter === 3 ? ["active-btn"] : ["dots-btn"]}
        ></button>
      </div>
    </div>
  );
};

export default Carousel;
