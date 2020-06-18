import React, { Component } from "react";
import "../Navbar.css";
import Logo0 from "./IMG/Logo.png";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="ui menu">
          <a className="item">
            <img src={Logo0} />
          </a>
          <a href="/" className="item">
            <h4 className="navtext">Home</h4>
          </a>
          <a className="item">
            <h4 className="navtext">Event</h4>
          </a>
          <div className="right menu">
            <a href="/login" className="item">
              <h4 className="navtext">Login</h4>
            </a>
            <a
              href="/login"
              className="item"
              onClick={() => {
                console.log("Clicked");
                this.props.handleLogout();
              }}
            >
              <h4 className="navtext">Logout</h4>
            </a>

            <a className="item" href="/signup">
              <h4 className="navtext">Signup</h4>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
