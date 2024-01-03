import React from "react";
import { useNavigate } from "react-router-dom";
import noteImg from "../../notepng.jpg";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <img
        style={{ height: "60vh", float: "left" }}
        src={noteImg}
        alt=""
      />
      <div className="container">
        <h1 className="text-center my-5">iNotebook</h1>
        <p
          style={{
            fontSize: "1.5rem",
            border: "3px solid orange",
            padding: "10px",
            color: "blue",
          }}
        >
          Welcome to iNotebook, where your thoughts find a secure sanctuary. Our
          app is more than just a place to jot down notes—it's your personal
          haven for ideas, musings, and cherished moments.<br></br>At iNotebook,
          we understand the value of privacy and security. Your notes are not
          just keystrokes on a screen; they're precious thoughts, innovative
          ideas, and intimate reflections. That's why each note is safeguarded
          within our robust database, shielded against unauthorized access and
          invulnerable to accidental sharing.
          <br></br>
          Imagine a virtual notebook that's solely yours—an exclusive space
          where you can pour out your thoughts without the fear of inadvertent
          disclosure. With our stringent privacy protocols, sharing your notes
          is a choice, not an oversight. Your privacy is paramount, and
          iNotebook ensures that every note remains exclusively yours unless you
          decide otherwise.
        </p>
        <button
          type="button"
          className="btn btn-primary my-2"
          style={{ display: "block", margin: "0 auto" }}
          onClick={() => {
            if (localStorage.getItem("token")) {
              navigate("/");
            } else {
              navigate("/signup");
            }
          }}
        >
          Getting Started
        </button>
      </div>
      <h1 className="text-center my-4">About us</h1>
      <footer
        style={{
          background: "green",
          color: "white",
          border: "2px solid red",
          marginTop: "30px",
        }}
      >
        <h2 className="text-center mt-2">Debajyoti Das</h2>
        <div className="d-flex" style={{ justifyContent: "center" }}>
          <a
            className="mx-2"
            target="_black"
            onClick={() => {
              window.location.href = "mailto:debajotidas497@gmail.com";
            }}
          >
            <img
              style={{ height: "30px", cursor: "pointer" }}
              src="../../email.jpg"
              alt=""
            />
          </a>
          <a
            className="mx-2"
            href="https://www.linkedin.com/in/debajyoti-das-903121249/"
            target="_black"
          >
            <img
              style={{ height: "30px", cursor: "pointer" }}
              src="../../linkedin.jpg"
              alt=""
            />
          </a>
          <a
            className="mx-2"
            href="https://github.com/Debajyoti045"
            target="_black"
          >
            <img
              style={{ height: "30px", cursor: "pointer" }}
              src="../../github.jpg"
              alt=""
            />
          </a>
        </div>
        <p className="text-center mt-2">
          Copyright &#169; reserved designed and developed by Debajyoti
        </p>
      </footer>
    </>
  );
};

export default About;
