import { NavLink } from "react-router-dom";
import { images } from "../assets/index";
const NavBar = (props) => {
  const { searchBar, sx, wishlistCount, productCount } = props;
  const { BookLogo } = images;
  return (
    <nav className="navigation-container" style={{ ...sx }}>
      <div className="navigation-logo-container">
        <div className="navigation-logo">
          <NavLink to="/">
            <img src={BookLogo} alt="logo" height="45" width="45" />
          </NavLink>
        </div>
        <div className="navigation-brand">Book Store</div>
      </div>
      {searchBar === true && (
        <div className="navigation-search">
          <label className="search-icon">
            <i className="fas fa-search"></i>
          </label>
          <input placeholder="Search here" />
        </div>
      )}
      <div className="navigation-links-container">
        <NavLink to="/login" className="navigation-link" title="Profile">
          <div className="navigation-link-icon">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
        </NavLink>
        <NavLink
          to="/wishlist"
          className="navigation-link badge"
          title="Wishlist"
        >
          <div className="navigation-link-icon">
            <i className="fa fa-heart" aria-hidden="true"></i>
            {wishlistCount ? (
              <div
                className="badge-count danger"
                style={{ right: "-12px", top: "-4px" }}
                id="icon"
              >
                {wishlistCount}
              </div>
            ) : null}
          </div>
        </NavLink>
        <NavLink
          to="/cart"
          className="navigation-link badge"
          title="Add to Cart"
        >
          <div className="navigation-link-icon">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            {productCount ? (
              <div
                className="badge-count danger"
                style={{ right: "-12px", top: "-4px" }}
                id="icon"
              >
                {productCount}
              </div>
            ) : null}
          </div>
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
