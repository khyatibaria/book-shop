const Button = (props) => {
  const { id, className = "btn primary", label, onClick } = props;
  return (
    <button id={id} className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
