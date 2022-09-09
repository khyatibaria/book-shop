import "./Card.css";
const Card = (props) => {
  const { children, sx } = props;
  return (
    <div className="card-container" style={{ ...sx }}>
      {children}
    </div>
  );
};
export default Card;
