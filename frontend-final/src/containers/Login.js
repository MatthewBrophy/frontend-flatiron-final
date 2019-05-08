import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Popup } from "semantic-ui-react";

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
      fetch("http://localhost:3000/api/v1/users", {
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
          isMobile={true}
          disableMobileRedirect={true}
        />
      );
    }

    return (
      <div>
        <img id="login-image" src={CoverImage} alt="" />
        <p id="login-tagline">
          Host and attend cooking events. Build community around food with your
          neighbors. Host events to help people in need.
        </p>
        <div id="facebook-login">
          {fbContent}
          <Popup
            trigger={<p id="fb-explanation">*Why Facebook Login Only?</p>}
            wide
          >
            <Popup.Content id="fb-explanation-popup">
              <ol id="fb-explanation-list">
                <li>
                  Strangers can be scary. If you are attending a new neighbor's
                  event, search for them on FB first.
                </li>
                <br />
                <li>
                  People are more likely to act in a socially responsible way
                  when their accounts are tied to their social media presence.
                </li>
              </ol>
              <p id="fb-only">*Only uses your name and profile picture*</p>
            </Popup.Content>
          </Popup>
        </div>
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
