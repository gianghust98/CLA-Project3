import React, { Component } from "react";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsList: [],
    };
    this.getEvents();
  }
  getEvents = () => {
    fetch("http://localhost:8080/api/events", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          eventsList: [...res],
        });
      });
  };
  render() {
    const { eventsList } = this.state;
    return (
      <div className="Events">
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
        <section class="events-list-area section-gap event-page-lists">
          <div class="container">
            <div class="row align-items-center">
              {eventsList.map((eL) => (
                <div class="col-lg-6 pb-30">
                  <div class="single-carusel row align-items-center">
                    <div class="col-12 col-md-6 thumb">
                      <img
                        class="img-fluid"
                        src={eL.thumbnail}
                        alt="thumbnail"
                      />
                    </div>
                    <div class="detials col-12 col-md-6">
                      <p>{eL.time}</p>
                      <a href="event-details.html">
                        <h4>{eL.title}</h4>
                      </a>
                      <p>{eL.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" class="text-uppercase primary-btn mx-auto mt-40">
              Load more courses
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Events;
