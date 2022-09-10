const HorizontalProductCard = (props) => {
  const { badgeText, src, title, author, price, quantity } = props;
  return (
    <div className="horizontal-card">
      <div className="horizontal-card-head">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <div className="card-close">
          <i className="fas fa-times"></i>
        </div>
        <img className="horizontal-image" src={src} alt="media" />
      </div>
      <div className="horizontal-card-body">
        <div className="card-text">
          <div className="card-title">{title}</div>
          <div className="card-subtitle">{author}</div>
          <div>Rs.{price}/-</div>
        </div>
        <div className="card-quantity">
          <span className="quantity-label">{quantity}</span>
          <button className="quantity-btn">
            <i className="fas fa-plus-square"></i>
          </button>
          <input className="card-input" />
          <button className="quantity-btn">
            <i className="fas fa-minus-square"></i>
          </button>
        </div>
        <button className="horizontal-card-btn danger">Move to Wishlist</button>
        <button className="horizontal-card-btn warning">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};
export default HorizontalProductCard;
