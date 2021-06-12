import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  return (
    <div className="login">
      <form action="">
        <h1>Login</h1>
        <input
          className="inp"
          type="text"
          name=""
          id=""
          placeholder="Email"
        />{" "}
        <br />
        <input
          className="inp"
          type="text"
          name=""
          id=""
          placeholder="Password"
        />{" "}
        <br /> <br />
        <button onClick={() => history.push("/admin")}>Admin Panel</button>
        <button onClick={() => history.push("/home")}>Login</button>
        <p>
          {" "}
          <a href="/registration"> Register Here!</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
