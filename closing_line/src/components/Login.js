import React, { Component } from "react";
import "../Login.css";
import Logo from "./IMG/Logo-1.png";

import api from "../services/api";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        name: "",
        email: "",
        password: "",
      },
    };
  }

  // Allows user to write in sign in fields
  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  render() {
    const { fields } = this.state;
    return (
      <div className="Dan">
        <img id="big" src={Logo} />
        <h3 id="logintagline">Welcome Back</h3>
        <div className="ui form">
          <form
            className="ui large form2"
            onSubmit={(e) => {
              this.props.handleLogin(e, this.state.fields);
            }}
          >
            <div className="ui field">
              <br />
              <input
                className="input"
                name="name"
                placeholder="Name"
                value={fields.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <br />
              <input
                className="input"
                name="email"
                placeholder="Email"
                value={fields.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <br />
              <input
                className="input"
                name="password"
                type="password"
                placeholder="Password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <button type="submit" className="ui red button fluid">
              Login
            </button>
          </form>
        </div>
        <div id="loginredline"></div>
        <div id="loginbottom"></div>
      </div>
    );
  }
}

export default Login;
