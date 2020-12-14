import React from "react";
import { Link } from "react-router-dom"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import AuthService from '../services/auth'
import Login from "./Form/Login";
import Signup from './Form/Register'
export default class NavBar extends React.Component {
  state = {
    modalVisibleSignIn: false,
    modalVisibleSignUp: false,
    showAdminBoard: false,
    currentUser: undefined,
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  toggleSignIn = () => {
    this.setState({ modalVisibleSignIn: !this.state.modalVisibleSignIn })
  }
  toggleSignUp = () => {
    this.setState({ modalVisibleSignUp: !this.state.modalVisibleSignUp })
  }
  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;
    return (
      <header id="header" style={{ padding: '0 50px' }}>
        <div className="container-fluid main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <Link to="/">
                <img
                  style={{ width: '27vw' }}
                  src="https://cfl.edu.vn/xmedia/2020/04/cla-title-2020a-400x47.png"
                  alt=""
                  title=""
                />
              </Link>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <Link to="/about">Giới thiệu</Link>
                </li>
                <li className="menu-has-children">
                  <Link to="#">Khảo thí</Link>
                  <ul>
                    <li>
                      <Link to="/">Thi tiếng Anh nội bộ</Link>
                    </li>
                    <li>
                      <Link to="/">Thi TOEIC quốc tế</Link>
                    </li>
                    <li>
                      <Link to="/">Thi APTIS</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-has-children">
                  <Link to="#">Khóa học</Link>
                  <ul>
                    <li>
                      <Link to="/course">Các khóa học của trung tâm</Link>
                    </li>
                    <li>
                      <Link to="/test" target="_blank">
                        Kiểm tra trình độ của bạn
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/event">Sự kiện</Link>
                </li>
                <li>
                  <Link to="/news">Tin tức</Link>
                </li>
                <li className="menu-has-children">
                  <Link to="#">Liên hệ</Link>
                  <ul>
                    <li>
                      <Link to="/contact">Liên hệ với chúng tôi</Link>
                    </li>
                    <li>
                      <Link to="/book-room">Đặt phòng</Link>
                    </li>
                  </ul>
                </li>
                {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      Admin Board
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link to={"/user"} className="nav-link">
                      User
                    </Link>
                  </li>
                )}
                {currentUser ? (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/profile"} className="nav-link">
                        {currentUser.username}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="/" className="nav-link" onClick={this.logOut}>
                        LogOut
                      </a>
                    </li>
                  </div>
                ) : (
                  <div style={{ display: 'flex'}}>
                    <li className="nav-item">
                        <a 
                          onClick={() => this.toggleSignIn()}
                          style={{ 
                            borderRight: '2px solid white',
                            cursor: 'pointer',
                            color: '#fff'
                            }}>
                          Login
                        </a>
                        <Modal isOpen={this.state.modalVisibleSignIn} toggle={this.toggleSignIn}>
                          <ModalHeader toggle={this.toggleSignIn}>Login</ModalHeader>
                          <ModalBody>
                            <Login />
                          </ModalBody>
                        </Modal>
                    </li>
                    <li className="nav-item">
                      <a
                        onClick={() => this.toggleSignUp()}
                        style={{
                          cursor: 'pointer',
                          color: '#fff'
                        }}>Sign up</a>
                        <Modal isOpen={this.state.modalVisibleSignUp} toggle={this.toggleSignUp}>
                          <ModalHeader toggle={this.toggleSignUp}>Signup</ModalHeader>
                          <ModalBody>
                            <Signup />
                          </ModalBody>
                        </Modal>
                    </li>
                  </div>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
