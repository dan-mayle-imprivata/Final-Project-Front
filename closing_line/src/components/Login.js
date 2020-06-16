import React, { Component } from "react";
import "../Login.css";

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
        <h1>Log in</h1>
        <div className="ui form">
          <form
            className="ui large form"
            onSubmit={(e) => {
              this.props.handleLogin(e, this.state.fields);
            }}
          >
            <div className="ui field">
              <label>Name</label>
              <input
                name="name"
                placeholder="Name"
                value={fields.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Email</label>
              <input
                name="email"
                placeholder="Email"
                value={fields.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label>
              <input
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
      </div>
    );
  }
}

export default Login;
