import React, { Component } from 'react';
import DashBoard from "./DashBoard";
import { Table } from "reactstrap";

class StudentsNeedAdvice extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            listStudents : []
        }
        this.getStudents();

      
    }
    render() {
        const { listStudents } = this.state;
        return (
          <div>
            <div className="">
              <div className="row">
                <div
                  className="col-md-2 categories"
                  style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <DashBoard />
                </div>
                <div className="col-md-10" >
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>PhoneNumber</th>
                        <th>Email</th>
                        <th>Need Advice for: </th>
                      </tr>
                    </thead>
                    {listStudents.map((student) => (
                      <tbody >
                        <tr>
                          <th style = {{fontWeight : 400}}>{student.fullname} </th>
                          <th style = {{fontWeight : 400}}>{student.phonenumber}</th>
                          <th style = {{fontWeight : 400}}>{student.email}</th>
                          <th style = {{fontWeight : 400}}>{student.askfield}</th>
                        </tr>
                      </tbody>
                    ))}
                  </Table>
                </div>
              </div>
            </div>
        </div>
       );
    }
    getStudents = () => {
        fetch("http://localhost:8080/api/studentsneedadvice/get", {
          method: "get",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            this.setState({
              listStudents: [...res],
            });
          });
      };
}

export default StudentsNeedAdvice;