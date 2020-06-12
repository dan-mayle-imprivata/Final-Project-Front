import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="ui menu">
          <a className="item">UFC Logo</a>
          <a className="item">Home</a>
          <a className="item">Event</a>
          <div className="right menu">
            <a className="item">Login</a>
            <a className="item">Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
