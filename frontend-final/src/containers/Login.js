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
          auth_key: response.userID
        })
      });
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

    return (
      <div id="login-form">
        <style>
          {`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="/logo.png" /> Log-in with FaceBook
            </Header>
            {fbContent}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
