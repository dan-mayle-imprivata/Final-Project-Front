import React, { Component } from "react";
import "../Signup.css";
import Logo from "./IMG/Logo-1.png";
import api from "../services/api";

export class Signup extends Component {
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

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state.fields;

    api.auth.createNewUser(name, email, password).then((user) => {
      if (user.error) {
        this.setState({ error: true });
        alert(user.error);
      } else {
        console.log(user);
        this.props.handleSignup(user);
        this.props.history.push("/shows");
      }
    });
  };

  render() {
    console.log(this.props.auth);
    const { fields } = this.state;
    return (
      <div>
        <div id="top">
          <div id="logo">
            <img id="big" src={Logo} />
          </div>
        </div>
        <div id="middle">
          <h3 id="tagline">Lets create your account</h3>
          <div className="ui form">
            <form
              className="ui large form"
              onSubmit={(e) => {
                this.props.handleLogin(e, this.state.fields);
              }}
            >
              <div className="ui field">
                <br />
                {/* <label>Name</label> */}
                <input
                  className="input"
                  name="name"
                  placeholder="Name"
                  value={fields.name}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="ui field">
                <br />
                {/* <label>Email</label> */}
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
                {/* <label>Password</label> */}
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
