import React from "react";
import "./Login.css";
import loginImage from "../assets/image/loginimage.png";

const Login = () => {
  return (
    <>
      <div className="main">
        <div className="loginpageimg">
          <img src={loginImage} alt="loginimage.png" width={"60%"} />
          <p>
            Create your profile now and be visible to the top recruiters in the
            world
          </p>
        </div>

        <div className="container">
          <form action="#">
            <h2>Login Form</h2>
            <div className="form-group">
              <label>Email ID</label>
              <input type="text" className="form-control" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="Password" className="form-control" placeholder="Password"  required/>
            </div>
            <a href="/ForgotPass">Forgot Password?</a><br />
            <button type="submit" >Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

// hello world