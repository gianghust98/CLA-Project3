import React, { Component } from "react";
import axios from 'axios';
import { Button, Table } from "reactstrap";
import DashBoard from "./DashBoard.js";
// import hust from "../../images/hust.jpg";
// import tas from "../../images/teacherandstudent.jpg";

class BannerAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [],
      showForm : false,
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8080/api/banners")
      .then(res => {
        const listbanner = res.data;
        console.log('data: ',listbanner);
        this.setState({ bannerList : listbanner });
      })
      .catch(error => console.log(error));
  }
  render() {  
    const { bannerList } = this.state;
    return (
      <div className="bannerTable">    
        <div>
          <div className="row">
            <div
              className="col-sm-2 categories"
              style={{ paddingLeft: 0, paddingRight: 0 }}>
              <DashBoard />
            </div>
            <div className="col-sm-10 ">
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
                      <td>{bnL.bannerName}</td>
                      <td>
                        <img src={bnL.imageUrl} alt="img_banner"></img>
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
                {/* <tbody>
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
                </tbody> */}
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerAdmin;
