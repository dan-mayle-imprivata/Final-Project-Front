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
      fights: [],
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

    fetch("http://localhost:3000/events", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ events: data });
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/fights", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ fights: data });
      })
      .catch((err) => console.log(err));
  }

  handleLogin = (user) => {
    const currentUser = { currentUser: user.user };
    localStorage.setItem("token", user.token);

    this.setState({ auth: currentUser.user });
  };

  // handleChange = (event) => {
  //   this.setState({ value: event.target.value });
  // };

  handleBetSubmit = (newBet) => {
    console.log(newBet);

    // fetch('http://localhost:3000/bets', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     bet: betInfo
    //   })
    // })
    //   .then(res => res.json())
    //   .then(console.log)
  };

  render() {
    console.log(this.state.auth.currentUser);
    return (
      <div className="App">
        <Navbar />
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={(props) => {
                return (
                  <Betpage
                    {...props}
                    events={this.state.events}
                    bets={
                      this.state.auth.currentUser.user
                        ? this.state.auth.currentUser.user.bets
                        : []
                    }
                    fights={this.state.fights}
                    value={this.state.value}
                    handleBetSubmit={this.handleBetSubmit}
                    handleChange={this.handleChange}
                  />
                );
              }}
            />
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
