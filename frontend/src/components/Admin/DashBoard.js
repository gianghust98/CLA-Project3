import React, { Component } from "react";
import AdminIcon from "../../images/shield.svg";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <div className="title_categories">
          <img src={AdminIcon} alt="i" width={30} />
          <h3 style={{ paddingTop: "10px" }}>Admin</h3>
        </div>
        <div className="item_categories">
          <a
            href="/admin/banners"
            style={{ color: "#ced4dae8", textDecoration: "none" }}>
            Banners
          </a>
        </div>
        <div className="item_categories events ">
          {" "}
          Events
          <div className="optionsEvent">
            <ul>
              <li style={{ padding: 8 }}>
                <a
                  href="/admin/event"
                  style={{ color: "black", textDecoration: "none" }}>
                  Add Event
                </a>
              </li>
              <li style={{ padding: 8 }}>
                <a
                  href="/admin/updateevent"
                  style={{ color: "black", textDecoration: "none" }}>
                  Update Event
                </a>
              </li>
              {/* <li style={{padding: 8}}><a href = "#"  style={{color: "black" ,textDecoration: "none"}}>Delete Event</a></li> */}
            </ul>
          </div>
        </div>

        <div className="item_categories">
          <a href="#" style={{ color: "#ced4dae8", textDecoration: "none" }}>
            Courses
          </a>
        </div>
        <div className="item_categories">
          <a href="#" style={{ color: "#ced4dae8", textDecoration: "none" }}>
            News
          </a>
        </div>
        <div className="item_categories">
          <a href="#" style={{ color: "#ced4dae8", textDecoration: "none" }}>
            Teachers
          </a>
        </div>
        <div className="item_categories">
          <a href="#" style={{ color: "#ced4dae8", textDecoration: "none" }}>
            Students
          </a>
        </div>
        <div className="item_categories">
          <a href="#" style={{ color: "#ced4dae8", textDecoration: "none" }}>
            Users
          </a>
        </div>
      </div>
    );
  }
}

export default DashBoard;
