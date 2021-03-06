import React, { Component } from "react";
import axios from 'axios';
import { Button, Table } from "reactstrap";
import DashBoard from "./DashBoard.js";
class BannerAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [],
      showForm : false,
      bannerSrc: ''
    };
    this.onFileChange = this.onFileChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    axios.get("http://localhost:8080/api/bannerImage")
      .then(res => {
        console.log(res)
        const listbanner = res.data.banners;
        console.log('data: ',listbanner);
        this.setState({ bannerList : listbanner });
      })
      .catch(error => console.log(error));
  }
  onFileChange(e) {
    this.setState({
      bannerSrc: e.target.files[0]
    })
  }
  onSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('bannerImage', this.state.bannerSrc)
    axios.post("http://localhost:8080/api/uploadBanner", formData, {})
    .then(res => {
      console.log(res)
    })
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
                    <th>Preview</th>
                    <th>New Banner</th>
                    <th>State</th>
                  </tr>
                </thead>
                {bannerList && 
                  <tbody>
                    <tr>
                      <td width="70%">
                        {bannerList.length > 0
                          ? <img src={bannerList[0].bannerImage} alt="img_banner" style={{ width: 'auto', height: '200px'}} />
                          : <img src="img/img-banner.png" />}
                      </td>
                      <td>
                        {/* <Button color="info">upload banner</Button> */}
                        <form onSubmit={this.onSubmit}>
                          <div className="form-input">
                            <input type="file" onChange={this.onFileChange} />
                          </div>
                          <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                          </div>
                        </form>
                      </td>
                      <td>
                        <Button color="info">Confirm</Button>
                      </td>
                    </tr>
                  </tbody>}
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerAdmin;
