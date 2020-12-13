import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import DashBoard from "./DashBoard.js";
import hust from "../../images/hust.jpg";
import tas from "../../images/teacherandstudent.jpg";
//import { Table } from 'reactstrap';

class BannerAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [],
    };
  }
  render() {
    const mystyle = {
      backgroundColor: "#1eb1c8",
      height: 100,
    };
    const { bannerList } = this.state;
    return (
      <div className="bannerTable">
        {/* <div style={mystyle}></div> */}
        {/* <div className="container"> */}
        <div>
          <div className="row">
            <div
              className="col-sm-3 categories"
              style={{ paddingLeft: 0, paddingRight: 0 }}>
              <DashBoard />
            </div>
            <div className="col-sm-9 ">
              <Table striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Preview</th>
                    <th>New Banner</th>
                    <th>State</th>
                  </tr>
                </thead>
                {bannerList.map((bnL) => (
                  <tbody>
                    <tr>
                      <td>{bnL.banner_name}</td>
                      <td>
                        <img src={bnL.image_url} alt="img_banner"></img>
                      </td>
                      <td>
                        <Button color="info">upload banner</Button>
                      </td>
                      <td>
                        <Button color="info">Confirm</Button>
                      </td>
                    </tr>
                  </tbody>
                ))}
                {/* temporary */}
                <tbody>
                  <tr>
                    <td>Introduce tutorials</td>
                    <td>
                      <img src={hust} alt="img_banner" width={300}></img>
                    </td>
                    <td>
                      <Button color="info">upload banner</Button>
                    </td>
                    <td>
                      <Button color="info">Confirm</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Type of tutorials</td>
                    <td>
                      <img src={tas} alt="img_banner" width={300}></img>
                    </td>
                    <td>
                      <Button color="info">upload banner</Button>
                    </td>
                    <td>
                      <Button color="info">Confirm</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerAdmin;
