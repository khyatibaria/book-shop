import "./Login.css";
import NavBar from "../common/NavBar";
import LoginForm from "../components/LoginForm";
import Toast from "../common/toast/Toast";
const Login = (props) => {
  return (
    <div>
      <NavBar sx={{ justifyContent: "space-between" }} />
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
