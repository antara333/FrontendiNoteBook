import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    password: "",
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://inotebookbackend-s50o.onrender.com/api/auth/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const res = await response.json();

    if (res.error) {
      setCredentials({ name: "", email: "", password: "" });
      document.getElementById("exampleCheck1").checked = false;
      props.showAlert(res.error);
    } else {
      navigate("/login");
      props.showAlert("User created successfully!");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2>Please create user account</h2>
      <form onSubmit={onSubmit} className="my-4">
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
            onChange={onChange}
            required
            value={credentials.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            onChange={onChange}
            required
            minLength={3}
            value={credentials.name}
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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            required
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Terms and conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <span>
        Already have an acccout Go to{" "}
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          <b>Login</b>
        </span>
      </span>
    </>
  );
};

export default SignUp;
