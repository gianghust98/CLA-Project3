import React from "react";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <Link to="/">
                <img
                  src="https://cfl.edu.vn/xmedia/2020/04/cla-title-2020a-400x47.png"
                  alt=""
                  title=""
                />
              </Link>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
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
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
