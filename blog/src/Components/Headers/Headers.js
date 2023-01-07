import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Headers.scss";
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

export class Headers extends Component {
  render() {
    return (
      <header className="header py-4 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h1>
                <Link to="/">Logo</Link>
              </h1>
            </div>
            <div className="col-6">
              <Navigation />
            </div>
            <div className="col-3">
              <SearchForm />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Headers;
