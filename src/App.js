import logo from "./logo.svg";
import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="maincon">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="ph">
            {/* <img src="./components/images/IM.jpg" /> */}
          </div>
          <Link className="navbar-brand" href="#">
            <span className="logoname">
              <h3>Jaydeep Tilavat</h3>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="services">SERVICES</Link>
              </li>
              <li className="nav-item">
                <Link to="contact-us">CONTECT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
