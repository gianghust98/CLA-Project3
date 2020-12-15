import React from "react";
import TeacherImg from '../images/teacher.svg';
import CertificateImg from '../images/certificate.svg';
import hust from '../images/hust.jpg';
import FacebookIcon from '../images/facebook-icon.png'

export default class About extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- start banner Area --> */}
        <section className="banner-area relative" id="home">
          <div className="overlay overlay-bg"></div>
          <div className="">
            <div className="row fullscreen d-flex align-items-center justify-content-between">
              <div className="banner-content col-lg-9 col-md-12" style={{ paddingLeft: 100 }}>
                <h1 className="text-uppercase">
                  About CLA
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
        <section className="feature-area pb-120"></section>
        {/* <!-- End feature Area --> */}

        {/* <!-- Start info Area --> */}
        <section className="info-area p-60">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div style={{textAlign: "center"}}>
                <h3>Trung tâm Ngôn ngữ và Hỗ trợ trao đổi học thuật (CLA)</h3>
                <p>
                  Tháng 10/2018, trường Đại học Bách Khoa Hà Nội đã ra quyết
                  định thành lập Trung tâm Ngôn ngữ và Hỗ trợ trao đổi học thuật
                  (CLA) trên cơ sở sáp nhập các đơn vị: Trung tâm Ngoại ngữ
                  (CFL), Trung tâm tiếng Pháp (CFC), Trung tâm Hợp tác KHKT Việt
                  – Đức (VDZ), Trung tâm Thông tin Năng lượng nguyên tử (ICONE).
                </p>
                <p>
                  Từ khi thành lập đến nay, Trung tâm luôn là đơn vị đào tạo
                  Ngoại ngữ và tổ chức khảo thí quốc tế chất lượng và uy tín.
                  Mỗi năm, có gần 10.000 lượt học viên đã tham dự các khóa học
                  ngoại ngữ: tiếng Anh, Pháp, Đức, Hàn, Nhật và gần 10.000 lượt
                  thí sinh dự thi các chứng chỉ tiếng Anh (IELTS, Aptis, TOEIC,
                  PTE), tiếng Đức (TestAS, TestDaF), tiếng Hàn (OPic) theo chuẩn
                  quốc quốc tế.
                </p>
                <p>
                  Đơn vị tự hào là một trong những trung tâm ngoại ngữ được yêu
                  thích, là địa chỉ tin cậy của các bạn SV Bách Khoa, Kinh tế,
                  Xây dựng, Ngân hàng… và nhiều người đi làm trên khắp địa bàn
                  Hà Nội.
                </p>
                <p>
                  Trung tâm đã vinh dự được Bộ Giáo dục & Đào tạo trao tặng danh
                  hiệu Tập thể xuất sắc năm học 2018-2019.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End info Area --> */}

        {/* <!-- Start course-mission Area --> */}
        <div className="whole-wrap">
          <div className="">
            <div className="section-top-border">
              <h3 style={{textAlign: "center"}}>Đại học Bách khoa Hà Nội</h3>
              <div className="row">
                <div className="col-md-3">
                  <img
                    src={hust}
                    alt="hust-image"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-9 mt-sm-20 left-align-p">
                  <p>
                    Trường Đại học Bách Khoa Hà Nội được thành lập vào năm 1956
                    và là trường đại học kỹ thuật đầu tiên của cả nước. Với gần
                    60 năm xây dựng và trưởng thành, Trường đã được Đảng và Nhà
                    nước trao tặng nhiều huân, huy chương cao quý và được phong
                    tặng danh hiệu Anh hùng trong thời kì đổi mới của đất nước.
                    Trường hiện có 23 viện, 3 khoa và 15 trung tâm với khoảng
                    2500 cán bộ và 40000 sinh viên. Trong hơn 50 năm qua, trường
                    ĐHBKHN đã không ngừng phát triển và đóng góp to lớn vào sự
                    nghiệp công nghiệp hóa, hiện đại hóa đất nước bằng việc đào
                    tạo hàng ngàn kỹ sư, thạc sỹ, tiến sỹ và những nhà nghiên
                    cứu đang hoạt động trong nhiều lĩnh vực trên khắp mọi miền
                    của tổ quốc và ngoài lãnh thổ Việt Nam.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-top-border text-center">
              <h3 className="mb-30">
                Mục tiêu và Chức năng Trung tâm Ngôn ngữ và Trao đổi học thuật
              </h3>
              <div className="row">               
                  <p>
                    Xây dựng Trung tâm Ngoại ngữ trở thành đơn vị tổ chức, quản
                    lý công tác đào tạo ngoại ngữ ngoài chương trình chính khóa
                    cho sinh viên ĐHBK HN và có khả năng tổ chức thi, cấp chứng
                    chỉ công nhận nội bộ và chứng chỉ quốc tế.
                  </p>
                  <p>
                    Trung tâm Ngoại ngữ có chức năng xây dựng, tổ chức và quản
                    lý các chương trình đào tạo ngoại ngữ, tổ chức thi cấp chứng
                    chỉ công nhận nội bộ và chứng chỉ ngoại ngữ quốc tế.
                  </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End course-mission Area --> */}

        {/* <!-- Start search-course Area --> */}
        <section className="search-course-area relative" style={{ padding: '50px' }}>
          <div className="overlay overlay-bg"></div>
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-md-6 search-course-left">
                <h1 className="text-white">
                  Nhận tư vấn từ trung tâm
                  <br />
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
                  <img src={TeacherImg} width={40} height={40} />
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
                    type="text"
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
                    <select style={{ height: 30 }}>
                      <option datd-display="">Bạn muốn tư vấn về</option>
                      <option value="1">Các khóa học của trung tâm</option>
                      <option value="2">Thi quốc tế</option>
                      <option value="3">Thi nội bộ</option>
                      <option value="4">Khác</option>
                    </select>
                  </div>
                  <button className="primary-btn text-uppercase">
                    Xác nhận
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End search-course Area --> */}
        {/* <!-- Start review Area --> */}
        <section className="review-area section-gap relative">
          <div className="title text-center">
            <h1 className="mb-10">Cảm nhận của học viên</h1>
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
                  <img src="../../public/img/r1.png" alt="" />
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
        <a href="https://www.facebook.com/cfl.edu.vn">
        <img
            src={FacebookIcon}
            style={{ 
              position: 'fixed', 
              bottom: 30, 
              right: 20, 
              width: '5%'
            }} />
        </a>
      </div>
    );
  }
}
