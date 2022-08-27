import "./Signup.css";
import NavBar from "../common/NavBar";
import SignupForm from "../components/SignupForm";
const Signup = (props) => {
  return (
    <div>
      <NavBar sx={{ justifyContent: "space-between" }} />
      <div className="container">
        <SignupForm />
      </div>
    </div>
  );
};
export default Signup;
