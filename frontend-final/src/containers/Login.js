import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

import CoverImage from "../images/template2.png";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      name: "",
      picture: "",
      auth_key: ""
    };
  }
  responseFacebook = response => {
    if (response.status === undefined) {
      fetch("https://neighborfood-backend.herokuapp.com/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: response.name,
          picture: response.picture.data.url,
          auth_key: response.userID.slice(0, 5)
        })
      }).then(() =>
        this.setState({
          isLoggedIn: true,
          name: response.name,
          picture: response.picture.data.url,
          auth_key: response.userID.slice(0, 5)
        })
      );
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
          id="login-button"
          appId="677417279343452"
          autoLoad={true}
          fields="name,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return (
      <div>
        <img id="login-image" src={CoverImage} alt="" />
        <div id="facebook-login">{fbContent}</div>
        <div id="pie-credit">
          <a
            id="pie-credit-link"
            href="https://www.vexels.com/vectors/preview/156925/pumpkin-pie-slice-cartoon-icon"
          >
            {" "}
            Pumpkin pie slice cartoon icon{" "}
          </a>{" "}
          | designed by Vexels
        </div>
      </div>
    );
  }
}
