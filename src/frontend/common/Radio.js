import "./Radio.css";
const Radio = (props) => {
  const { id, label, key, labelPosition, onChange = () => {}, name } = props;
  return (
    <div id={key} className="radio-container">
      {labelPosition === "before" && (
        <label className="radio-label">{label}</label>
      )}
      <input
        id={id}
        name={name}
        className="radio-input"
        type="radio"
        onChange={onChange}
      />
      {!labelPosition && <label className="radio-label">{label}</label>}
    </div>
  );
};
export default Radio;
