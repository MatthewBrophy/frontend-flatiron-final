import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      name: "",
      email: "",
      picture: "",
      auth_key: ""
    };
  }
  responseFacebook = response => {
    console.log("response", response);
    if (response.picture.data.url)
      fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: response.name,
          email: response.email,
          picture: response.picture.data.url,
          auth_key: response.userID
        })
      });
    if (response) {
      alert("You already logged in to Facebook. Enjoy the app!");
      let info = {
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
        auth_key: response.userID
      };
      this.props.setCurrentUser(info);
    } else {
      this.setState({
        isLoggedIn: true,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
        auth_key: response.userID
      });
    }
  };

  componentClicked = () => {};

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      this.props.setCurrentUser(this.state);
    } else {
      fbContent = (
        <FacebookLogin
          appId="677417279343452"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
