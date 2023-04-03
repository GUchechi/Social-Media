import Logo from "../../img/logo.png";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="auth">
      <div className="a__left">
        <img src={Logo} alt="" />
        <div className="app__name">
          <h1>U-Book</h1>
          <h6>Explore Ideas throughout the World</h6>
        </div>
      </div>

      <SignUp />
      <Login />
    </div>
  );
};

function Login() {
  return (
    <div className="a__right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up
          </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

function SignUp() {
  return (
    <div className="a__right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="Password"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="Password"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmpassword"
          />
        </div>
        <div>
          <span style={{ fontSize: "15px" }}>
            Already have an account? Login
          </span>
        </div>
        <button className="button infoButton" type="Submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Auth;
