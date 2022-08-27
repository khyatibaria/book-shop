import { useNavigate } from "react-router-dom";
import "./SignupForm.css";
import Input from "../common/Input";
import Button from "../common/Button";
import CheckBox from "../common/CheckBox";
const SignupForm = (props) => {
  const navigate = useNavigate();
  return (
    <div className="signup-container">
      <h5 className="text-center">Sign Up</h5>
      <Input label="First Name" placeholder="Khyati" />
      <Input label="Last Name" placeholder="Baria" />
      <Input label="Email" placeholder="khyatibaria55@gmail.com" />
      <Input label="Password" placeholder="*********" />
      <Input label="Confirm Password" placeholder="*********" />
      <div className="terms-conditions">
        <CheckBox label="I agree to Terms &amp; Conditions" />
      </div>
      <Button className="btn full-width primary btn-hover" label="Sign Up" />
      <div className="already-account">Already Have Account?</div>
      <Button
        className="btn outline-primary full-width"
        label="Login"
        onClick={() => {
          navigate("/login");
        }}
      />
    </div>
  );
};

export default SignupForm;
