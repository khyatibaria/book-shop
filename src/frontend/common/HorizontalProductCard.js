const HorizontalProductCard = (props) => {
  const { badgeText, src, title, author, price, quantity } = props;
  return (
    <div class="horizontal-card">
      <div class="horizontal-card-head">
        {badgeText && <div class="card-badge">{badgeText}</div>}
        <div class="card-close">
          <i class="fas fa-times"></i>
        </div>
        <img class="horizontal-image" src={src} alt="media" />
      </div>
      <div class="horizontal-card-body">
        <div class="card-text">
          <div class="card-title">{title}</div>
          <div class="card-subtitle">{author}</div>
          <div>Rs.{price}/-</div>
        </div>
        <div class="card-quantity">
          <span class="quantity-label">{quantity}</span>
          <button class="quantity-btn">
            <i class="fas fa-plus-square"></i>
          </button>
          <input class="card-input" />
          <button class="quantity-btn">
            <i class="fas fa-minus-square"></i>
          </button>
        </div>
        <button class="horizontal-card-btn danger">Move to Wishlist</button>
        <button class="horizontal-card-btn warning">Remove from Cart</button>
      </div>
    </div>
  );
};
export default HorizontalProductCard;
