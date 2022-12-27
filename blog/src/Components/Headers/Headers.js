import React, { Component } from "react";
import "./Headers.scss";

export class Headers extends Component {
  render() {
    return (
      <header className="header py-4 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h1>
                <a href="#">Logo</a>
              </h1>
            </div>
            <div className="col-6">
              <nav className="menu">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Menu
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-3">
              <form action="">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Từ khóa tìm kiếm..."
                  />
                  <button type="submit" className="btn btn-primary">
                    Tìm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Headers;
