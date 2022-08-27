import "./Footer.css";
import { images } from "../assets/index";
const Footer = () => {
  const { Twitter, Github, LinkedIn } = images;
  return (
    <div className="footer-container">
      <div className="footer-column">
        <ul className="footer-links">
          <li>Shipping</li>
          <li>Payment</li>
          <li>Return Policy</li>
        </ul>
      </div>
      <div className="footer-column">
        <ul className="footer-links">
          <li>Books</li>
          <li>Bestsellers</li>
          <li>New Arrivals</li>
        </ul>
      </div>
      <div className="footer-column">
        <ul className="footer-links">
          <li>khyatibaria55@gmail.com</li>
          <li>link of website</li>
          <div className="social-links">
            <li>
              <a href="https://github.com/khyatibaria/book-store">
                <img src={Github} alt="github" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/khyatibaria">
                <img src={Twitter} alt="github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/khyatibaria/">
                <img src={LinkedIn} alt="github" />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
