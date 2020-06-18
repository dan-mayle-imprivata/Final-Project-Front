import React, { Component } from "react";
import "../Signup.css";
import Logo from "./IMG/Logo-1.png";

export class Signup extends Component {
  render() {
    return (
      <div>
        <div id="top">
          <div id="logo">
            <img src={Logo} />
          </div>
        </div>
        <div id="middle">
          <h3 id="tagline">Lets create your account</h3>
          <div className="ui form">
            <form className="ui large form">
              <div className="ui field">
                <br />
                {/* <label>Name</label> */}
                <input name="name" placeholder="Name"></input>
              </div>
              <div className="ui field">
                <br />
                {/* <label>Email</label> */}
                <input name="email" placeholder="Email" />
              </div>
              <div className="ui field">
                <br />
                {/* <label>Password</label> */}
                <input name="password" type="password" placeholder="Password" />
              </div>
              <br />
              <br />
              <button type="submit" className="ui green button fluid">
                Create an Account
              </button>
            </form>
          </div>
        </div>
        <div id="redline"></div>
        <div id="bottom"></div>
      </div>
    );
  }
}

export default Signup;

//class = .   multiple elements
// id= #      one element
