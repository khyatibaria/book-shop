import "./CheckBox.css";
const CheckBox = (props) => {
  const { id, type = "checkbox", label, labelPosition, onChange } = props;
  return (
    <div className="checkbox-container">
      {labelPosition === "before" && (
        <label className="checkbox-label">{label}</label>
      )}
      <input
        id={id}
        className="checkbox-input"
        type={type}
        onChange={onChange}
      />
      {!labelPosition && <label className="checkbox-label">{label}</label>}
    </div>
  );
};
export default CheckBox;
