import { useState, useRef, useEffect, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const {
    id,
    name,
    type = "text",
    placeholder,
    label,
    value,
    onChange,
    // onFocus = () => {},
    // onBlur,
  } = props;
  const [focusInput, setFocusInput] = useState(true);
  const focusHandler = () => {
    setFocusInput(false);
  };
  const blurHandler = (e) => {
    if (e.target.value === "") setFocusInput(true);
  };
  return (
    <div className="input-box">
      <fieldset className="fieldset">
        <input
          className="input"
          id={id}
          name={name}
          type={type}
          placeholder={focusInput ? placeholder : ""}
          value={value}
          ref={ref}
          onChange={onChange}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
        <legend className="legend">
          <span>{label}</span>
        </legend>
      </fieldset>
    </div>
  );
});

export default Input;
