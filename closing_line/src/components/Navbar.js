import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="ui menu">
          <a className="item">UFC Logo</a>
          <a href="/" className="item">
            Home
          </a>
          <a className="item">Event</a>
          <div className="right menu">
            <a href="/login" className="item">
              Login
            </a>
            <a
              href="/login"
              className="item"
              onClick={() => {
                console.log("Clicked");
                this.props.handleLogout();
              }}
            >
              Logout
            </a>

            <a className="item">Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
