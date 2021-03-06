import React, { Component } from "react";
import DashBoard from "./DashBoard.js";
import ChartsPage from "./ChartsPage.js";

import "../../App.css";

class Admin extends Component {
  render() {
    const mystyle = {
      backgroundColor: "#1eb1c8",
      height: 100,
    };
    return (
      <div className="admin_page">
        {/* <div style={mystyle}></div> */}
        <div className="">   {/* cho nay neu bo className="container" di thi se full man */}
          <div className="row">
            <div
              className="col-md-2 categories"
              style={{ paddingLeft: 0, paddingRight: 0 }}>
              <DashBoard />
            </div>
            <div className="col-md-10 graphs">
            <div style={{height: 10}}> 
                    
                </div>
              <h5 style={{ color: "#545b62" }}> Welcome to my Admin!</h5>
              <div className="lineGraph">
                <ChartsPage />
              </div>
              <h5 style={{ color: "#545b62" }}> TodoList</h5>
              <div className="todoList">
                <form>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue />
                      Read Notification
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue />
                      Check messages
                    </label>
                  </div>
                  <div className="checkbox ">
                    <label>
                      <input type="checkbox" defaultValue />
                      Update Event in 27th July
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Admin;
