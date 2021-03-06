import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        {/* <!-- start banner Area --> */}
        <section class="banner-area relative about-banner" id="home">
          <div class="overlay overlay-bg"></div>
          <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
              <div class="about-content col-lg-12">
                <h1 class="text-white">Liên hệ với chúng tôi</h1>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End banner Area --> */}
        {/* <!-- Start contact-page Area --> */}
        <section class="contact-page-area section-gap">
          <div class="container">
            <div class="row">
              <div
                class="map-wrap"
                style={{ width: '100%', height: '445px' }}
                id="map"></div>
              <div class="col-lg-4 d-flex flex-column address-wrap">
                <div class="single-contact-address d-flex flex-row">
                  <div class="icon">
                    <span class="lnr lnr-home"></span>
                  </div>
                  <div class="contact-details">
                    <h5>Trung tâm ngoại ngữ trường Đại học Bách Khoa Hà Nội</h5>
                    <p>Số 01 Đại Cồ Việt, Hai Bà Trưng, HN</p>
                  </div>
                </div>
                <div class="single-contact-address d-flex flex-row">
                  <div class="icon">
                    <span class="lnr lnr-phone-handset"></span>
                  </div>
                  <div class="contact-details">
                    <h5>024.3868.2445 - 024.3623.1425</h5>
                  </div>
                </div>
                <div class="single-contact-address d-flex flex-row">
                  <div class="icon">
                    <span class="lnr lnr-envelope"></span>
                  </div>
                  <div class="contact-details">
                    <h5>cla@hust.edu.vn</h5>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <form
                  class="form-area contact-form text-right"
                  id="myForm"
                  action="mail.php"
                  method="post">
                  <div class="row">
                    <div class="col-lg-6 form-group">
                      <input
                        name="name"
                        placeholder="Enter your name"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Họ và tên'"
                        class="common-input mb-20 form-control"
                        required=""
                        type="text" />
                      <input
                        name="email"
                        placeholder="Enter email address"
                        pattern="[A-Za-z0-9._%+-]+@@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Email'"
                        class="common-input mb-20 form-control"
                        required=""
                        type="email" />
                      <input
                        name="subject"
                        placeholder="Enter subject"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Số điện thoại'"
                        class="common-input mb-20 form-control"
                        required=""
                        type="text" />
                    </div>
                    <div class="col-lg-6 form-group">
                      <textarea
                        class="common-textarea form-control"
                        name="message"
                        placeholder="Nội dung"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Messege'"
                        required=""></textarea>
                    </div>
                    <div class="col-lg-12">
                      <div class="alert-msg" style={{ textAlign: 'left' }}></div>
                      <button class="genric-btn primary" style={{ float: 'right' }}>
                        Gửi tin nhắn
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End contact-page Area --> */}
      </div>
    );
  }
}
