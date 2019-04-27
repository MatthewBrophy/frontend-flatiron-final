import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Login from "./containers/Login";
import Main from "./containers/Main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      currentUser: {
        userId: 0,
        userName: "",
        userNeighborhood: "",
        userProfilePic: "",
        userRecipes: [],
        userParties: {
          hosting: [],
          attending: [],
          upcomingParties: []
        }
      },
      parties: {
        sponsoredParties: [],
        featuredParties: [],
        allParties: [],
        soonestParties: [],
        newestParties: []
      },
      recipes: {
        allRecipesInDB: [],
        newestRecipes: []
      }
    };
  }

  seedAllRecipes = () => {
    fetch("http://localhost:3000/api/v1/recipes")
      .then(response => response.json())
      .then(allRecipes =>
        this.setState({
          recipes: {
            ...this.state.recipes,
            allRecipesInDB: allRecipes
          }
        })
      );
  };

  seedAllParties = () => {
    fetch("http://localhost:3000/api/v1/cooking_parties")
      .then(response => response.json())
      .then(allParties =>
        this.setState({
          parties: {
            ...this.state.parties,
            allParties: allParties
          }
        })
      );
  };

  fetchUserRecipes = id => {
    fetch(`http://localhost:3000/api/v1/users/${id}/recipes`)
      .then(response => response.json())
      .then(usersRecipes =>
        this.setState({
          currentUser: {
            ...this.state.currentUser,
            userRecipes: usersRecipes
          }
        })
      );
  };

  fetchUserHostings = id => {
    fetch(`http://localhost:3000/api/v1/users/${id}/hostings`)
      .then(response => response.json())
      .then(hostings =>
        this.setState({
          currentUser: {
            ...this.state.currentUser,

            userParties: {
              ...this.state.currentUser.userParties,
              hosting: hostings
            }
          }
        })
      );
  };

  fetchUserAttendances = id => {
    fetch(`http://localhost:3000/api/v1/users/${id}/guest-attendances`)
      .then(response => response.json())
      .then(attendings =>
        this.setState({
          currentUser: {
            ...this.state.currentUser,

            userParties: {
              ...this.state.currentUser.userParties,
              attending: attendings
            }
          }
        })
      );
  };

  setUpcomingParties = () => {};

  componentDidMount() {
    this.seedAllRecipes();
    this.fetchUserRecipes(1);
    this.fetchUserHostings(1);
    this.fetchUserAttendances(1);
    this.seedAllParties();
  }

  setCurrentUser = user => {
    console.log("I'm setting a user!", user);

    this.setState({
      loggedIn: true,
      currentUser: {
        ...this.state.currentUser,
        userId: user.userID,
        userName: user.name,
        userProfilePic: user.picture
      }
    });
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
                      recipes={this.state.recipes}
                      featuredParties={this.state.parties.featuredParties}
                      sponsoredParties={this.state.parties.sponsoredParties}
                    />
                  )}
                />
              )}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
