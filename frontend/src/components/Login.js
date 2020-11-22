import React, { Component } from "react";
import { Button } from "reactstrap";
import logo from "../images/logohust.png";
import "../App.css";

class Login extends Component {
  render() {
    return (
      <div class="container" style={{ textAlign: "center" }}>
        <div class="card border-0 shadow my-5">
          <div class="card-body p-5">
            <img src={logo} alt="logo_academy" className="logo_academy" />
            <p class="lead2">Please Sign in or Sign up!</p>
            <div className="sub_container">
              <div className="form_singin">
                <div className="card">
                  <article className="card-body">
                    <h4 className="card-title text-center mb-4 mt-1">
                      Sign in
                    </h4>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                      <label>Enter your email or your name: </label>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fa fa-user" />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            placeholder="Email or Name"
                            type="name"
                            onChange={() => console.log('username or email')}
                          />
                        </div>
                      </div>
                      <label>Enter your password: </label>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fa fa-lock" />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            type="password"
                            onChange={() => console.log('password')}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <Button color="info">Login</Button>
                      </div>
                      <p className="text-center">
                        <a href="#" className="btn" style={{ color: "green" }}>
                          Forgot password?
                        </a>
                      </p>
                    </form>
                  </article>
                </div>
              </div>
              <a href="/signup" className="singup">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login
