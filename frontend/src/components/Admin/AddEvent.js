import React, { Component } from "react";
import DashBoard from "./DashBoard";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    let thisEvent = undefined;
    if (this.props.location.state) {
      thisEvent = this.props.location.state.anEvent;
    }
    this.state = {
      eventId: (thisEvent && thisEvent._id) || "",
      title: (thisEvent && thisEvent.title) || "",
      time: (thisEvent && thisEvent.time) || "",
      place: (thisEvent && thisEvent.place) || "",
      ticket: (thisEvent && thisEvent.ticket) || "",
      description: (thisEvent && thisEvent.description) || "",
      short_description: (thisEvent && thisEvent.short_description) || "",
      thumbnail: (thisEvent && thisEvent.thumbnail) || "",
      status: (thisEvent && thisEvent.status) || "",
    };
  }
  render() {
    const {
      title,
      time,
      place,
      ticket,
      description,
      short_description,
      thumbnail,
    } = this.state;
    return (
      <div>
        <div className="">
          <div className="row">
            <div
              className="col-md-2 categories"
              style={{ paddingLeft: 0, paddingRight: 0 }}>
              <DashBoard />
            </div>

            <div className="col-md-10" style={{ textAlign: "center" }}>
              <div className="formEvent">
                <h3>Add an Event</h3>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label>Title</Label>
                    <Input
                      type="name"
                      name="title"
                      onChange={(event) => { this.setState({ title: event.target.value }) }}
                      value={title || ""}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Short Description</Label>
                    <Input
                      type="text"
                      name="shortdecription"
                      onChange={(event) => { this.setState({ short_description: event.target.value }) }}
                      value={short_description || ""}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Description</Label>
                    <Input
                      type="text"
                      name="description"
                      onChange={(event) => { this.setState({ description: event.target.value }) }}
                      value={description || ""}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Time</Label>
                    <Input
                      type="text"
                      name="time"
                      onChange={(event) => { this.setState({ time: event.target.value }) }}
                      value={time || ""}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Type of Ticket</Label>
                    <Input
                      type="text"
                      name="ticket"
                      onChange={(event) => { this.setState({ ticket: event.target.value }) }}
                      value={ticket || ""}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Place</Label>
                    <Input
                      type="name"
                      name="place"
                      onChange={(event) => { this.setState({ place: event.target.value }) }}
                      value={place || ""}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Event's picture address</Label>
                    <Input
                      type="name"
                      name="thumbnail"
                      onChange={(event) => {
                        this.setState({
                          thumbnail: event.target.value,
                        });
                      }}
                      value={thumbnail || ""}
                    />
                  </FormGroup>
                  <Button>Submit</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      eventId,
      title,
      time,
      place,
      ticket,
      description,
      short_description,
      thumbnail,
      status,
    } = this.state;
    const url = !eventId
      ? "http://localhost:8080/api/events/addevent"
      : `http://localhost:8080/api/events/update/${eventId}`;
    const method = !eventId ? "post" : "put";
    fetch(url, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        time,
        place,
        ticket,
        description,
        short_description,
        thumbnail,
        status,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          this.props.history.push("/admin/updateevent");
        } else {
          alert("error!");
        }
      });
  };
}

export default AddEvent;
