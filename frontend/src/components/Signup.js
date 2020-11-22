import React, { Component } from "react";
import logo from "../images/logohust.png";
import "../App.css";
import { Button } from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div className="signup_form" style={{ textAlign: "center" }}>
          <div className="sub_container">
            <div className="form_singin">
              <div className="card">
                <article className="card-body">
                  <img src={logo} alt="logo_academy" className="logo_academy" />
                  <h4 className="card-title text-center mb-4 mt-1">Sign up</h4>
                  <hr />
                  <p className="text-success text-center">
                    We need some information!
                  </p>
                  <form onSubmit={this.handleSubmit}>
										<div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-lock" />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Username"
                          type="username"
                          onChange={(event) => this.setState({ username: event.target.value })}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="title_signup"></div>
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-user" />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Email"
                          type="email"
                          onChange={(event) => this.setState({ email: event.target.value })}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-lock" />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          onChange={(event) => this.setState({ password: event.target.value })}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <Button color="info">Submit</Button>
                    </div>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup
