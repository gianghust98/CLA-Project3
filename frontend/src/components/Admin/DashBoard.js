import React, { Component } from 'react';

class DashBoard extends Component {
    render() {
        return (
            <div>
                <div className = "title_categories"> 
                    <h3>Admin</h3>
                </div>
                <div className = "item_categories"> 
                    <a href="/admin/banners" style={{color: "#ced4dae8" , textDecoration: "none"}} >Banners</a>
                </div>
                <div className = "item_categories" > 
                    <a href="#" style={{color: "#ced4dae8", textDecoration: "none"}} >Events</a>
                </div>
                <div className = "item_categories" > 
                    <a href="#" style={{color: "#ced4dae8", textDecoration: "none"}}>Courses</a>
                </div>
                <div className = "item_categories"> 
                    <a href="#" style={{color: "#ced4dae8", textDecoration: "none"}}>News</a>
                </div>
                <div className = "item_categories" > 
                    <a href="#" style={{color: "#ced4dae8", textDecoration: "none"}}>Teachers</a>
                </div>
                <div className = "item_categories" > 
                    <a href="#" style={{color: "#ced4dae8", textDecoration: "none"}}>Students</a>
                </div>
                <div className = "item_categories"> 
                    <a href="#" style={{color: "#ced4dae8", textDecoration: "none"}}>Users</a>
                </div>
            </div>
        );
    }
}

export default DashBoard;