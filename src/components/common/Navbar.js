import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
        <div className="container-fluid">
          <button
            className="btn btn-link d-md-none rounded-circle mr-3"
            id="sidebarToggleTop"
            type="button"
          >
            <i className="fas fa-bars"></i>
          </button>
          <nav className="navbar navbar-light navbar-expand-md">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <strong>Geopolitica</strong>
              </a>
              <button
                data-toggle="collapse"
                className="navbar-toggler"
                data-target="#navcol-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="/home">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Topics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Countries
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <button className="btn btn-primary" type="button">
            Source
          </button>
        </div>
      </nav>
    );
  }
}
