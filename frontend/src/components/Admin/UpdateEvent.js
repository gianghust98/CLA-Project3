import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import DashBoard from './DashBoard';


class UpdateEvent extends Component {
    constructor(props){
        super(props);
        this.state = {
           eventsList : [],
        };
        this.getEvents();
       console.log(this.props.match);
    }
    render() {
        const {eventsList} = this.state;
        return (
            <div>
                <div className="">
                    <div className="row">
                        <div className="col-md-2 categories"  style={{ paddingLeft: 0, paddingRight: 0 }}>                                                  
                            <DashBoard />
                        </div>                        
                        <div className="col-md-10" style={{textAlign: 'center'}} >
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th> Title </th>
                                        <th>Time</th>
                                        <th>Description</th>
                                        <th>Place</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {eventsList.map((eL) => (
                                    <tbody>
                                        <tr>
                                            <th>{eL.title} </th>
                                            <th>{eL.time}</th>
                                            <th>{eL.description}</th>
                                            <th>{eL.place}</th>
                                            <th>
                                            <Button
                                                        outline
                                                        color='success'
                                                        className='btnupdateEvent'
                                                        onClick={() => {
                                                            this.props.history.push(
                                                                "/admin/event", {anEvent : eL} )                                                            
                                                        }}>
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        outline
                                                        color='danger'
                                                        onClick={() => {
                                                            window.confirm(
                                                                "Are you sure you wish to delete this event?"
                                                            ) &&
                                                                this.handleClickDelete(eL);
                                                        }}>
                                                        Delete
                                                    </Button>
                                            </th>
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
    }
    handleClickEdit = (eL) => {
        
        console.log('id without _',eL._id);
		fetch(`http://localhost:8080/api/events/update/${eL._id}`, {
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((res) => {
				switch (res.success) {
					case true:
						this.props.history.pop();
						break;
					case false:
						alert("Update failed!");
						break;
				}
			});
    };
    handleClickDelete = (eL) => {
		console.log("id_delete: ",eL._id );
		fetch(`http://localhost:8080/api/events/delete/${eL._id}`, {
			method: "delete",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json()) 
			.then((res) => {
				switch (res.success) {
					case true:
                        this.getEvents();
						break;
					case false:
						alert("Deletion failed!");
						break;
				}
			});
	};
    
}

export default UpdateEvent;