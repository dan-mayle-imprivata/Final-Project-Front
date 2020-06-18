import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import api from "./services/api";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Betpage from "./components/Betpage";
import Profile from "./components/Profile";
import Event from "./components/Event";
import Signup from "./components/Signup";

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

  // handleSignup = (user) => {
  //   const currentUser = { currentUser: user };
  //   localStorage.setItem("token", user.token);

  //   this.setState({ auth: currentUser });
  // };

  handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };

  handleLogin = (e, loginInfo) => {
    e.preventDefault();

    api.auth
      .login(loginInfo.name, loginInfo.email, loginInfo.password)
      .then((currentUser) => {
        if (currentUser.error) {
          throw Error;
        } else {
          localStorage.setItem("token", currentUser.token);
          this.setState({
            auth: {
              currentUser: currentUser,
            },
          });
        }
      })
      .then(() => {
        // this redirects user to new page
        this.props.history.push("/");
      });
  };

  // handleChange = (event) => {
  //   this.setState({ value: event.target.value });
  // };

  handleBetSubmit = (newBet) => {
    console.log(newBet);

    fetch("http://localhost:3000/bets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.token,
      },
      body: JSON.stringify({
        bet: { ...newBet, user_id: this.state.auth.currentUser.user.id },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          this.setState({
            auth: {
              currentUser: {
                user: {
                  ...this.state.auth.currentUser.user,
                  bets: [...this.state.auth.currentUser.user.bets, data.bet],
                },
              },
            },
          });
        }
      });
  };

  render() {
    // console.log(this.props.history);
    console.log(this.state.auth);
    return (
      <div className="App">
        <Navbar handleLogout={this.handleLogout} />

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
              return (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  // handleLogout={this.handleLogout}
                />
              );
            }}
          />
          <Route
            path="/signup"
            render={(props) => {
              return <Signup />;
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
      </div>
    );
  }
}

export default withRouter(App);
