import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const onclick = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://inotebookbackend-s50o.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const res = await response.json();
    if (res.success == true) {
      localStorage.setItem("token", res.json);
      navigate("/");
      props.showAlert("Logged in successfully");
    } else {
      setCredentials({ email: "", password: "" });
      props.showAlert(res.msg);
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2>Login to continue to iNotebook</h2>
      <form onSubmit={onclick} className="my-4">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            required
            onChange={onChange}
            value={credentials.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            minLength={7}
            onChange={onChange}
            value={credentials.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <span>
        Don't have an account{" "}
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          <b>Create account</b>
        </span>
      </span>
    </>
  );
};

export default Login;
