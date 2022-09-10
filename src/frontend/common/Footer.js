import "./Footer.css";
import { images } from "../assets/index";
const Footer = () => {
  const { Twitter, Github, LinkedIn, Heart } = images;
  return (
    <div className="footer-container">
      <div className="footer-head">
        Made with <img src={Heart} className="footer-img" />
        by Khyati Baria
      </div>
      <div className="social-links">
        <a href="https://github.com/khyatibaria/book-shop" target="_blank">
          <img src={Github} alt="github" />
        </a>
        <a href="https://twitter.com/khyatibaria" target="_blank">
          <img src={Twitter} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/khyatibaria/" target="_blank">
          <img src={LinkedIn} alt="github" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
