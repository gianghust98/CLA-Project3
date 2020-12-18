import React, { Component } from "react";
import AuthService from "../../services/auth";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <header style={{ background: " #6382e6", height: "110px" }}></header>
        <div style={{ height: '40vh' }}>
          <h3 style={{ paddingTop: 50, paddingBottom: 30 }}>
            <strong style={{ fontSize: '30px' }}>{currentUser.username}</strong> Profile
          </h3>
          <p>
            <strong style={{ fontSize: '22px' }}>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
          </p>
          <p>
            <strong style={{ fontSize: '22px' }}>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong style={{ fontSize: '22px' }}>Email:</strong> {currentUser.email}
          </p>
          <strong style={{ fontSize: '22px' }}>Authorities:</strong>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}
