import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import CoverImage from "../images/template2.png";

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
    if (response.status === undefined) {
      fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: response.name,
          email: response.email,
          picture: response.picture.data.url,
          auth_key: response.userID.slice(0, 5)
        })
      }).then(() =>
        this.setState({
          isLoggedIn: true,
          name: response.name,
          email: response.email,
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
          fields="name,email,picture"
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
