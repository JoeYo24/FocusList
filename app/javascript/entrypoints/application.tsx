import React from "react";
import ReactDOM from "react-dom/client";
import '../styles/layout.css'

const App = () => {

  function toggleNavbar() {
    const nav = document.querySelector('.navbar-collapse');
    nav?.classList.toggle('show');
  }

  return (
    <div className="d-flex">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
        <div className="container-fluid">
          <a className="navbar-brand ms-auto" href="/">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarBasic">
            <ul className="navbar-nav me-auto mb-2 mb-xl-0 ">
              <li className="nav-item">
                <a className="nav-link active" href="">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Log In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
