import React from "react";
import TeacherImg from '../images/teacher.svg';
import CertificateImg from '../images/certificate.svg';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- start banner Area --> */}
        <section className="banner-area relative" id="home">
          <div className="overlay overlay-bg"></div>
          <div className="container">
            <div className="row fullscreen d-flex align-items-center justify-content-between">
              <div className="banner-content col-lg-9 col-md-12">
                <h1 className="text-uppercase">
                  Chúng tôi cung cấp nền giáo dục tốt hơn cho một thế giới tốt
                  hơn!
                </h1>
                <p className="pt-10 pb-10" style={{ color: 'white' }}>
                  Cung cấp những dịch vụ giáo dục hàng đầu là nhiệm vụ và vinh
                  dự của chúng tôi.
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End banner Area --> */}
        {/* <!-- Start feature Area --> */}
        <section className="feature-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-feature">
                  <div className="title">
                    <h4>Các khóa học chất lượng</h4>
                  </div>
                  <div className="desc-wrap">
                    <p>
                      Các khóa học được thiết kế và xây dựng theo chương trình
                      chuẩn, và bằng sự tâm huyết của các giáo viên.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-feature">
                  <div className="title">
                    <h4>Đội ngũ giảng viên chất lượng</h4>
                  </div>
                  <div className="desc-wrap">
                    <p>
                      Đội ngũ giáo viên tốt nghiệp từ các trường đại học hàng
                      đầu về ngôn ngữ ở trong và ngoài nước. Được công nhận bởi
                      các chứng chỉ quốc tế.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-feature">
                  <div className="title">
                    <h4>Thư viện học liệu đầy đủ</h4>
                  </div>
                  <div className="desc-wrap">
                    <p>
                      Với một thư viện lớn, đầy đủ và chất lượng, học viên ở
                      trung tâm sẽ được sử dụng miễn phí.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End feature Area --> */}
        {/* <!-- Start popular-course Area --> */}
        <section
          className="popular-course-area section-gap"
          style={{ paddingTop: '50px' }}>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10" style={{ color: '#f7631b' }}>Các khóa học nổi bật</h1>
                  <p>Các khóa học được nhiều học viên lựa chọn.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="active-popular-carusel">
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg"></div>
                      <img className="img-fluid" src="img/p1.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>  
                        <span className="lnr lnr-users"></span> 355{" "}
                        <span className="lnr lnr-bubble"></span>35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn Designing</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg"></div>
                      <img className="img-fluid" src="img/p2.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users"></span> 355{" "}
                        <span className="lnr lnr-bubble"></span>35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn React js beginners</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg"></div>
                      <img className="img-fluid" src="img/p3.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users"></span> 355{" "}
                        <span className="lnr lnr-bubble"></span>35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn Photography</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg"></div>
                      <img className="img-fluid" src="img/p4.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users"></span> 355{" "}
                        <span className="lnr lnr-bubble"></span>35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn Surveying</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg"></div>
                      <img className="img-fluid" src="img/p1.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users"></span> 355{" "}
                        <span className="lnr lnr-bubble"></span>35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn Designing</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg"></div>
                      <img className="img-fluid" src="img/p2.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users"></span> 355{" "}
                        <span className="lnr lnr-bubble"></span>35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn React js beginners</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg"></div>
                      <img className="img-fluid" src="img/p3.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users"></span> 355{" "}
                        <span className="lnr lnr-bubble"></span>35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn Photography</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg"></div>
                      <img className="img-fluid" src="img/p4.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users"></span> 355{" "}
                        <span className="lnr lnr-bubble"></span>35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn Surveying</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End popular-course Area --> */}
        {/* <!-- Start search-course Area --> */}
        <section className="search-course-area relative">
          <div className="overlay overlay-bg"></div>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-md-6 search-course-left">
                <h1 style={{ color: '#f7631b' }}>
                  Nhận tư vấn từ trung tâm <br />
                  về khóa học của bạn!
                </h1>
                <p>
                  Mỗi năm, có hàng nghìn lượt học viên đã tham dự các khóa học
                  tiếng Anh, Pháp, Đức, Hàn, Nhật. Chúng tôi tự hào là một trong
                  những trung tâm ngoại ngữ được yêu thích, là địa chỉ tin cậy
                  của các bạn SV Bách Khoa, Kinh tế, Xây dựng, Ngân hàng... và
                  nhiều người đi làm trên địa bàn Hà Nội.
                </p>
                <div className="row details-content">
                  <div className="col single-detials">
                    <img src= {TeacherImg} width={40} height={40} />
                    <a href="#">
                      <h4>Đội ngũ giáo viên</h4>
                    </a>
                    <p>
                      Đội ngũ giáo viên từ các trường đại học hàng đầu khu vực.
                      Được đào tạo bài bản và có đầy đủ các chứng chỉ về chuyên
                      ngành cũng như giảng dạy.
                    </p>
                  </div>
                  <div className="col single-detials">
                    <img src={CertificateImg} width={40} height={40} />
                    <a href="#">
                      <h4>Chứng chỉ</h4>
                    </a>
                    <p>Luyện thi các chứng chỉ nội bộ và chứng chỉ quốc tế.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 search-course-right section-gap">
                <form className="form-wrap" action="#">
                  <h4 className="text-white pb-20 text-center mb-30">
                    Đăng ký nhận tư vấn
                  </h4>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Họ và tên"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Họ và tên'"
                  />
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Số điện thoại"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Số điện thoại'"
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Email'"
                  />
                  <div className="form-select" id="service-select">
                    <select>
                      <option datd-display="">Bạn muốn tư vấn về</option>
                      <option value="1">Các khóa học của trung tâm</option>
                      <option value="2">Thi quốc tế</option>
                      <option value="3">Thi nội bộ</option>
                      <option value="4">Khác</option>
                    </select>
                  </div>
                  <button className="primary-btn text-uppercase">Xác nhận</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End search-course Area --> */}
        {/* <!-- Start upcoming-event Area --> */}
        <section className="upcoming-event-area section-gap">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10" style={{ color: '#f7631b' }}>Những sự kiện sắp diễn ra</h1>
                  <p>
                    Hãy tham gia những sự kiện của trung tâm để có thể tìm kiếm
                    được thông tin nhé!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="active-upcoming-event-carusel">
                <div className="single-carusel row align-items-center">
                  <div className="col-12 col-md-6 thumb">
                    <img className="img-fluid" src="img/e1.jpg" alt="" />
                  </div>
                  <div className="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="#">
                      <h4>The Universe Through A Child S Eyes</h4>
                    </a>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
                <div className="single-carusel row align-items-center">
                  <div className="col-12 col-md-6 thumb">
                    <img className="img-fluid" src="img/e2.jpg" alt="" />
                  </div>
                  <div className="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="#">
                      <h4>The Universe Through A Child S Eyes</h4>
                    </a>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
                <div className="single-carusel row align-items-center">
                  <div className="col-12 col-md-6 thumb">
                    <img className="img-fluid" src="img/e1.jpg" alt="" />
                  </div>
                  <div className="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="#">
                      <h4>The Universe Through A Child S Eyes</h4>
                    </a>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
                <div className="single-carusel row align-items-center">
                  <div className="col-12 col-md-6 thumb">
                    <img className="img-fluid" src="img/e1.jpg" alt="" />
                  </div>
                  <div className="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="#">
                      <h4>The Universe Through A Child S Eyes</h4>
                    </a>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
                <div className="single-carusel row align-items-center">
                  <div className="col-12 col-md-6 thumb">
                    <img className="img-fluid" src="img/e2.jpg" alt="" />
                  </div>
                  <div className="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="#">
                      <h4>The Universe Through A Child S Eyes</h4>
                    </a>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
                <div className="single-carusel row align-items-center">
                  <div className="col-12 col-md-6 thumb">
                    <img className="img-fluid" src="img/e1.jpg" alt="" />
                  </div>
                  <div className="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="#">
                      <h4>The Universe Through A Child S Eyes</h4>
                    </a>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End upcoming-event Area --> */}
        {/* <!-- Start review Area --> */}
        <section className="review-area section-gap relative">
          <div className="title text-center">
            <h1 className="mb-10" style={{ color: '#f7631b' }}>Cảm nhận của học viên</h1>
          </div>
          <div className="overlay overlay-bg"></div>
          <div className="container">
            <div className="row">
              <div className="active-review-carusel">
                <div className="single-review item">
                  <div className="title justify-content-start d-flex">
                    <a href="#">
                      <h4>Dương Tuấn Minh</h4>
                    </a>
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </div>
                  <p>
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker. Here
                    you can find the best computer accessory for your laptop,
                    monitor, printer, scanner, speaker.
                  </p>
                </div>
                <div className="single-review item">
                  <div className="title justify-content-start d-flex">
                    <a href="#">
                      <h4>Ngô Minh Hào</h4>
                    </a>
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </div>
                  <p>
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker. Here
                    you can find the best computer accessory for your laptop,
                    monitor, printer, scanner, speaker.
                  </p>
                </div>
                <div className="single-review item">
                  <div className="title justify-content-start d-flex">
                    <a href="#">
                      <h4>Bùi Đình Lực</h4>
                    </a>
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                    </div>
                  </div>
                  <p>
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker. Here
                    you can find the best computer accessory for your laptop,
                    monitor, printer, scanner, speaker.
                  </p>
                </div>
                <div className="single-review item">
                  <div className="title justify-content-start d-flex">
                    <a href="#">
                      <h4>Nguyễn Hoàng Hải</h4>
                    </a>
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                    </div>
                  </div>
                  <p>
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker. Here
                    you can find the best computer accessory for your laptop,
                    monitor, printer, scanner, speaker.
                  </p>
                </div>
                <div className="single-review item">
                  <div className="title justify-content-start d-flex">
                    <a href="#">
                      <h4>Cristiano Messi</h4>
                    </a>
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                    </div>
                  </div>
                  <p>
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker. Here
                    you can find the best computer accessory for your laptop,
                    monitor, printer, scanner, speaker.
                  </p>
                </div>
                <div className="single-review item">
                  <div className="title justify-content-start d-flex">
                    <a href="#">
                      <h4>Nguyễn Quang Hải</h4>
                    </a>
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                    </div>
                  </div>
                  <p>
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker. Here
                    you can find the best computer accessory for your laptop,
                    monitor, printer, scanner, speaker.
                  </p>
                </div>
                <div className="single-review item">
                  <img src="img/r1.png" alt="" />
                  <div className="title justify-content-start d-flex">
                    <a href="#">
                      <h4>Khánh Trình Lê</h4>
                    </a>
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </div>
                  <p>
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker. Here
                    you can find the best computer accessory for your laptop,
                    monitor, printer, scanner, speaker.
                  </p>
                </div>
                <div className="single-review item">
                  <div className="title justify-content-start d-flex">
                    <a href="#">
                      <h4>Phùng Thanh Hải</h4>
                    </a>
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </div>
                  <p>
                    Accessories Here you can find the best computer accessory
                    for your laptop, monitor, printer, scanner, speaker. Here
                    you can find the best computer accessory for your laptop,
                    monitor, printer, scanner, speaker.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End review Area --> */}
        {/* <!-- Start cta-one Area --> */}
        <section className="cta-one-area relative section-gap">
          <div className="container">
            <div className="overlay overlay-bg"></div>
            <div className="row justify-content-center">
              <div className="wrap">
                <h1 className="text-white">Trở thành học viên tại trung tâm!</h1>
                <p>
                  Hãy tham gia bài kiểm tra đánh giá trình độ đầu vào để có thể
                  nhận được tư vấn chính xác nhất nhé!
                </p>
                <a className="primary-btn wh" target="_blank" href="/test">
                  Bắt đầu bài kiểm tra
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End cta-one Area --> */}
        {/* <!-- Start blog Area --> */}
        <section className="blog-area section-gap" id="blog">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10" style={{ color: '#f7631b' }}>Chia sẻ kinh nghiệm</h1>
                  <p>Blog chia sẻ kinh nghiệm</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/b1.jpg" alt="" />
                </div>
                <p className="meta">
                  25 April, 2018 | By <a href="#">Mark Wiens</a>
                </p>
                <a href="blog-single.html">
                  <h5>Addiction When Gambling Becomes A Problem</h5>
                </a>
                <p>
                  Computers have become ubiquitous in almost every facet of our
                  lives. At work, desk jockeys spend hours in front of their.
                </p>
                <a href="#" className="details-btn d-flex justify-content-center align-items-center">
                  <span className="details">Details</span>
                  <span className="lnr lnr-arrow-right"></span>
                </a>
              </div>
              <div className="col-lg-3 col-md-6 single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/b2.jpg" alt="" />
                </div>
                <p className="meta">
                  25 April, 2018 | By <a href="#">Mark Wiens</a>
                </p>
                <a href="blog-single.html">
                  <h5>Computer Hardware Desktops And Notebooks</h5>
                </a>
                <p>
                  Ah, the technical interview. Nothing like it. Not only does it
                  cause anxiety, but it causes anxiety for several different
                  reasons.
                </p>
                <a
                  href="#"
                  className="details-btn d-flex justify-content-center align-items-center"
                >
                  <span className="details">Details</span>
                  <span className="lnr lnr-arrow-right"></span>
                </a>
              </div>
              <div className="col-lg-3 col-md-6 single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/b3.jpg" alt="" />
                </div>
                <p className="meta">
                  25 April, 2018 | By <a href="#">Mark Wiens</a>
                </p>
                <a href="blog-single.html">
                  <h5>Make Myspace Your Best Designed Space</h5>
                </a>
                <p>
                  Plantronics with its GN Netcom wireless headset creates the
                  next generation of wireless headset and other products such as
                  wireless.
                </p>
                <a
                  href="#"
                  className="details-btn d-flex justify-content-center align-items-center"
                >
                  <span className="details">Details</span>
                  <span className="lnr lnr-arrow-right"></span>
                </a>
              </div>
              <div className="col-lg-3 col-md-6 single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/b4.jpg" alt="" />
                </div>
                <p className="meta">
                  25 April, 2018 | By <a href="#">Mark Wiens</a>
                </p>
                <a href="blog-single.html">
                  <h5>Video Games Playing With Imagination</h5>
                </a>
                <p>
                  About 64% of all on-line teens say that do things online that
                  they wouldn’t want their parents to know about. 11% of all
                  adult internet
                </p>
                <a
                  href="#"
                  className="details-btn d-flex justify-content-center align-items-center"
                >
                  <span className="details">Details</span>
                  <span className="lnr lnr-arrow-right"></span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End blog Area --> */}
      </div>
    );
  }
}
