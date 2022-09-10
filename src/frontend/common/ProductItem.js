const ProductItem = (props) => {
  const {
    badgeText,
    src,
    title,
    author,
    price,
    buttonLabel,
    onClick = () => {},
    addToWishList = () => {},
  } = props;
  return (
    <>
      <div className="card">
        <div className="card-header">
          {badgeText && <div className="card-badge">{badgeText}</div>}
          <img className="card-image" src={src} />
        </div>
        <div className="card-body">
          <div className="card-text">
            <div className="card-title">{title}</div>
            <div className="card-subtitle">{author}</div>
            <div>Rs.{price}/-</div>
          </div>
          <div className="card-footer">
            <button className="card-button" onClick={onClick}>
              {buttonLabel}
            </button>
            <button
              className="wishlist-btn"
              title="Add to favorites"
              onClick={addToWishList}
            >
              <i className="fas fa-heart fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
