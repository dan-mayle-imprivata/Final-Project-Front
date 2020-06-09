import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import api from "./services/api";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Betpage from "./components/Betpage";
import Profile from "./components/Profile";
import Event from "./components/Event";

import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: { currentUser: {} },
      events: [],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      api.auth.getCurrentUser().then((user) => {
        const currentUser = { currentUser: user };

        this.setState({ auth: currentUser });
      });
    }

    fetch(
      "http://api.sportradar.us/ufc/trial/v2/en/seasons.json?api_key=cy82gfyf3wcsy87mkkh646pb"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          events: data,
        })
      );
  }

  handleLogin = (user) => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.token);

    this.setState({ auth: currentUser });
  };

  render() {
    // console.log(this.state.events);
    return (
      <div className="App">
        <Navbar />
        <Router>
          <div>
            <Route exact path="/" component={Betpage} />
            <Route
              path="/login"
              render={(props) => {
                return <Login {...props} handleLogin={this.handleLogin} />;
              }}
            />
            <Route path="/profile" component={Profile} />
            <Route
              path="/event"
              render={(props) => {
                return <Event {...props} events={this.state.events.seasons} />;
              }}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
