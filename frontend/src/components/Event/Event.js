import React from "react";
import { Link } from "react-router-dom"

export default class Event extends React.Component {
  state = {
    listEvents: []
  }
  componentDidMount() {
    // const results = axios.get('http://localhost:8080/')
  }
  render() {
    return (
      <div class="cfl">
        {/* <!-- start banner Area --> */}
        <section class="banner-area relative about-banner" id="home">
          <div class="overlay overlay-bg"></div>
          <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
              <div class="about-content col-lg-12">
                <h1 class="text-white">Sự kiện</h1>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End banner Area --> */}
        {/* <!-- Start events-list Area --> */}
        <section class="events-list-area section-gap event-page-lists">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 pb-30">
                <div class="single-carusel row align-items-center">
                  <div class="col-12 col-md-6 thumb">
                    <img class="img-fluid" src="img/e1.jpg" alt="" />
                  </div>
                  <div class="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <Link to="/event/detail">
                      <h4>The Universe Through A Child'S Eyes</h4>
                    </Link>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 pb-30">
                <div class="single-carusel row align-items-center">
                  <div class="col-12 col-md-6 thumb">
                    <img class="img-fluid" src="img/e2.jpg" alt="" />
                  </div>
                  <div class="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="event-details.html">
                      <h4>The Universe Through A Child'S Eyes</h4>
                    </a>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 pb-30">
                <div class="single-carusel row align-items-center">
                  <div class="col-12 col-md-6 thumb">
                    <img class="img-fluid" src="img/e1.jpg" alt="" />
                  </div>
                  <div class="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="event-details.html">
                      <h4>The Universe Through A Child'S Eyes</h4>
                    </a>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 pb-30">
                <div class="single-carusel row align-items-center">
                  <div class="col-12 col-md-6 thumb">
                    <img class="img-fluid" src="img/e2.jpg" alt="" />
                  </div>
                  <div class="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="event-details.html">
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
              <div class="col-lg-6 pb-30">
                <div class="single-carusel row align-items-center">
                  <div class="col-12 col-md-6 thumb">
                    <img class="img-fluid" src="img/e1.jpg" alt="" />
                  </div>
                  <div class="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="event-details.html">
                      <h4>The Universe Through A Child'S Eyes</h4>
                    </a>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 pb-30">
                <div class="single-carusel row align-items-center">
                  <div class="col-12 col-md-6 thumb">
                    <img class="img-fluid" src="img/e2.jpg" alt="" />
                  </div>
                  <div class="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="event-details.html">
                      <h4>The Universe Through A Child'S Eyes</h4>
                    </a>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 pb-30">
                <div class="single-carusel row align-items-center">
                  <div class="col-12 col-md-6 thumb">
                    <img class="img-fluid" src="img/e1.jpg" alt="" />
                  </div>
                  <div class="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="event-details.html">
                      <h4>The Universe Through A Child'S Eyes</h4>
                    </a>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 pb-30">
                <div class="single-carusel row align-items-center">
                  <div class="col-12 col-md-6 thumb">
                    <img class="img-fluid" src="img/e2.jpg" alt="" />
                  </div>
                  <div class="detials col-12 col-md-6">
                    <p>25th February, 2018</p>
                    <a href="#">
                      <h4>The Universe Through A Child'S Eyes</h4>
                    </a>
                    <p>
                      For most of us, the idea of astronomy is something we
                      directly connect to “stargazing”, telescopes and seeing
                      magnificent displays in the heavens.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" class="text-uppercase primary-btn mx-auto mt-40">
                Load more courses
              </a>
            </div>
          </div>
        </section>
        {/* <!-- End events-list Area --> */}
      </div>
    );
  }
}
