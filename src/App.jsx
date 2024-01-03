import React, { useState } from "react";
import { useRef } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  const [message, setmessage] = useState(null);
  const ref = useRef();
  const showAlert = (message) => {
    setmessage(message);
    ref.current.click();
    const toastTrigger = document.getElementById("liveToastBtn");
    const toastLiveExample = document.getElementById("liveToast");

    if (toastTrigger) {
      const toastBootstrap =
        bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastTrigger.addEventListener("click", () => {
        toastBootstrap.show();
      });
    }
  };
  return (
    <>
      <NoteState showAlert={showAlert}>
        <BrowserRouter>
          <button
            type="button"
            className="btn btn-primary"
            id="liveToastBtn"
            style={{ display: "none" }}
            ref={ref}
          >
            Show live toast
          </button>

          <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div
              id="liveToast"
              className="toast"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="toast-header">
                <strong className="me-auto">Hello</strong>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div className="toast-body">{message}</div>
            </div>
          </div>
          <Navbar
            title="iNotebook"
            home="Home"
            about="About"
            showAlert={showAlert}
          />
          <div className="container my-4">
            <Routes>
              <Route
                exact
                path="/"
                element={<Home showAlert={showAlert} />}
              ></Route>
              <Route
                exact
                path="/about"
                element={<About showAlert={showAlert} />}
              ></Route>
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              ></Route>
              <Route
                exact
                path="/signup"
                element={<SignUp showAlert={showAlert} />}
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
