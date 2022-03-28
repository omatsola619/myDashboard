import React, { useState, useEffect } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

function Login() {
  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setIsAuth(true);
    history.replace("/home");
  };

  //conditional render to homepage if isAuth is true
  const history = useHistory();

  return (
    <section className="login-clean">
      <form onSubmit={handleSubmit}>
        <h2 className="visually-hidden">Login Form</h2>
        <div className="illustration">
          <i className="icon ion-ios-navigate"></i>
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            disabled
            value="admin"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            disabled
            value="password"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary d-block w-100">Log In</button>
        </div>
        <a className="forgot" href="#">
          Forgot your email or password?
        </a>
      </form>
    </section>
  );
}

export default Login;
