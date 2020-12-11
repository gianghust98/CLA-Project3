import React, { Component } from 'react';

class DashBoard extends Component {
    render() {
        return (
            <div>
                <div className = "title_categories"> 
                    <h3>Admin</h3>
                </div>
                <div className = "item_categories"> 
                    <a href="#" >Banners</a>
                </div>
                <div className = "item_categories"> 
                    <a href="#" >Events</a>
                </div>
                <div className = "item_categories"> 
                    <a href="" >Courses</a>
                </div>
                <div className = "item_categories"> 
                    <a href="" >News</a>
                </div>
                <div className = "item_categories"> 
                    <a href="" >Teachers</a>
                </div>
                <div className = "item_categories"> 
                    <a href="#" >Students</a>
                </div>
                <div className = "item_categories"> 
                    <a href="" >Users</a>
                </div>
            </div>
        );
    }
}

export default DashBoard;