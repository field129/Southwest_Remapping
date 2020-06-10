import React from "react";
import ReactDOM from "react-dom";
import "./css/utilities.css";
import "./css/style.css";
import wheel from "./images/wheel.gif";

const App = () => {
  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  });
  return <div>Hi there! </div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));

ReactDOM.render(
  <body>
    <div className="loader">
      <img src={wheel} alt="Loading ..." />
      <span>Loading...</span>
    </div>

    <header className="hero">
      <div id="navbar" className="navbar top">
        <h1 className="logo">
          <span className="text-primary">
            <i class="fas fa-car"></i> Southwest
          </span>
          Remapping
        </h1>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#cases">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content">
        <h1>Mobile Performance Engineering Excellence </h1>
        <p>We provide world class automotive performance </p>
        <a href="#about" className="btn">
          <i class="fas fa-chevron-right"></i> Read More
        </a>
      </div>
    </header>
  </body>,

  document.getElementById("root")
);
