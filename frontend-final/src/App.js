import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Login from "./containers/Login";
import Main from "./containers/Main";
import UsersParties from "./containers/UsersParties";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      DBID: "",
      currentUser: {
        userName: "",
        userNeighborhood: "",
        userProfilePic: "",
        userParties: {
          hosting: [],
          attending: [],
          upcomingParties: []
        }
      },
      parties: {
        allParties: [],
        soonestParties: [],
        newestParties: []
      }
    };
  }

  seedAllParties = () => {
    fetch("http://localhost:3000/api/v1/cooking_parties")
      .then(response => response.json())
      .then(allParties => {
        this.setState({
          parties: {
            ...this.state.parties,
            allParties: allParties
          }
        });
      });
  };

  fetchUserHostings = id => {
    fetch(`http://localhost:3000/api/v1/users/${id}/hostings`)
      .then(response => response.json())
      .then(hostings =>
        this.setState(
          {
            currentUser: {
              ...this.state.currentUser,

              userParties: {
                ...this.state.currentUser.userParties,
                hosting: hostings
              }
            }
          },
          async () => this.fetchUserAttendances(this.state.DBID)
        )
      );
  };

  fetchUserAttendances = id => {
    fetch(`http://localhost:3000/api/v1/users/${id}/guest-attendances`)
      .then(response => response.json())
      .then(attendings =>
        this.setState(
          {
            currentUser: {
              ...this.state.currentUser,

              userParties: {
                ...this.state.currentUser.userParties,
                attending: attendings
              }
            }
          },
          async () => this.seedAllParties()
        )
      );
  };

  setCurrentUser = user => {
    this.setState(
      {
        loggedIn: true,
        currentUser: {
          ...this.state.currentUser,

          userName: user.name,
          userProfilePic: user.picture
        }
      },
      async () => this.getDBUserId(user)
    );
  };

  getDBUserId = user => {
    fetch(`http://localhost:3000/api/v1/users/skittles/${user.auth_key}`)
      .then(response => response.json())
      .then(info =>
        this.setState({ DBID: info[0].id }, async () =>
          this.fetchUserHostings(this.state.DBID)
        )
      );
  };

  logout = () => {
    this.setState({ loggedIn: false });
  };

  updateHostings = newAttendance => {
    let currentHostings = [
      ...this.state.currentUser.userParties.hosting,
      newAttendance
    ];
    this.setState(
      {
        currentUser: {
          ...this.state.currentUser,

          userParties: {
            ...this.state.currentUser.userParties,
            hosting: currentHostings
          }
        }
      },
      async () => this.seedAllParties()
    );
  };

  updateAttendances = newAttendance => {
    let currentAttendances = [
      ...this.state.currentUser.userParties.attending,
      newAttendance
    ];
    this.setState(
      {
        currentUser: {
          ...this.state.currentUser,

          userParties: {
            ...this.state.currentUser.userParties,
            attending: currentAttendances
          }
        }
      },
      async () => this.seedAllParties()
    );
  };

  newAttendance = item => {
    let newLocation = item.details.attendances[0].location;
    let newDate = item.details.attendances[0].date;
    fetch("http://localhost:3000/api/v1/attendances", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: this.state.DBID,
        cooking_party_id: item.details.id,
        host: false,
        location: newLocation,
        date: newDate
      })
    })
      .then(res => res.json())
      .then(response =>
        response.errors
          ? alert("You are already going!")
          : this.updateAttendances(response)
      );
  };

  render() {
    return (
      <div className="App container">
        <Router>
          <div>
            <Switch>
              {this.state.loggedIn === false ? (
                <Route
                  exact
                  path="/"
                  component={() => (
                    <Login setCurrentUser={this.setCurrentUser} />
                  )}
                />
              ) : (
                <Route
                  exact
                  path="/"
                  component={() => (
                    <Main
                      currentUser={this.state.currentUser}
                      parties={this.state.parties}
                      logout={this.logout}
                      newAttendance={this.newAttendance}
                    />
                  )}
                />
              )}
              <Route
                path="/host-a-party"
                component={() => (
                  <UsersParties
                    state={this.state}
                    updateHostings={this.updateHostings}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
