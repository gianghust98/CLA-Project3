import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import DashBoard from './DashBoard.js';
import "../../App.css";

class Admin extends Component {
    render() {
        const mystyle = {
            backgroundColor:"#1eb1c8",
            height: 100,           
          };
        return (
            <div className = "admin_page">
                <div style={mystyle}>

                </div>
                <div className="container">
                    <div className="row">
                        <div className ="col-sm-3 categories">
                            <DashBoard />
                        </div>
                        <div className ="col-sm-9 graphs">
                            <h5 style={{color: "#545b62"}}> Welcome to my Admin!</h5>
                            <div className = "lineGraph">
                                <Line
                                    data={{
                                    labels: [9000, 6000, 1700, 4750, 1800, 1850, 5900, 6950, 900, 2050],
                                    datasets: [
                                        {
                                            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                                            label: "Africa",
                                            borderColor: "#3e95cd",
                                            fill: false
                                        },
                                        {
                                            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                                            label: "Asia",
                                            borderColor: "#8e5ea2",
                                            fill: false
                                        },
                                        {
                                            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                                            label: "Europe",
                                            borderColor: "#3cba9f",
                                            fill: false
                                        },
                                        {
                                            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                                            label: "Latin America",
                                            borderColor: "#e8c3b9",
                                            fill: false
                                        },
                                        {
                                            data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                                            label: "North America",
                                            borderColor: "#c45850",
                                            fill: false
                                        }
                                    ]
                                    }}
                                    options={{
                                    title: {
                                        display: true,
                                        text: "World population per region (in millions)"
                                    },
                                    legend: {
                                        display: true,
                                        position: "bottom"
                                    }
                                    }}
                                />
                            </div>
                            <h5 style = {{color: "#545b62"}}> TodoList</h5>
                            <div className = "todoList">
                                <form>
                                    <div className="checkbox" >
                                        <label><input type="checkbox" defaultValue />Read Notification</label>
                                    </div>
                                    <div className="checkbox">
                                        <label><input type="checkbox" defaultValue />Check messages</label>
                                    </div>
                                    <div className="checkbox ">
                                        <label><input type="checkbox" defaultValue />Update Event in 27th July</label>
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