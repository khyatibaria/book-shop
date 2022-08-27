import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import Input from "../common/Input";
import Button from "../common/Button";
import CheckBox from "../common/CheckBox";
import { isValid, passwordValidation } from "../utils/formValidation";
import Toast from "../common/toast/Toast";
const Login = (props) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState(null);
  const [focusInput, setFocusInput] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const loginHandler = (e) => {
    if (
      isValid(emailRef.current.value) &&
      passwordValidation(passwordRef.current.value)
    ) {
      const formData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      setFormState(formData);
      console.log(formData);
    }
  };

  return (
    <div className="login-container">
      <h5 className="text-center">Login</h5>
      <Input
        ref={emailRef}
        label="Email"
        placeholder="khyatibaria55@gmail.com"
        onChange={loginHandler}
        //onFocus={console.log("focus")}
      />
      <Input
        ref={passwordRef}
        label="Password"
        placeholder="*********"
        onChange={loginHandler}
      />
      <div className="remember-me">
        <CheckBox label="Remember Me" />
        <Button className="btn text small" label="Forgot Password?" />
      </div>
      <Button
        className="btn full-width primary btn-hover"
        label="Login"
        onClick={loginHandler}
      />
      <div className="link-text">You don't have a Profile?</div>
      <Button
        className="btn outline-primary full-width"
        label="Sign Up"
        onClick={() => {
          navigate("/signup");
        }}
      />
    </div>
  );
};

export default Login;
