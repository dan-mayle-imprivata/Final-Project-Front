import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export class Event extends Component {
  renderCurrentEvent = () => {
    return !!this.props.events
      ? this.props.events[114].name
      : "No event info available";
  };
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "red" }}>
          <h1>Upcoming Events</h1>
        </div>
        <div name="card">
          <Card>
            <Image
              src="https://www.themix.net/wp-content/uploads/2020/05/2020.05.23-04.16-themixnet-5ec94c67dae3f-600x873.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>{this.renderCurrentEvent()}</Card.Header>
              <Card.Meta>
                <span className="date">June 5th 2020</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        </div>
        <div style={{ backgroundColor: "blue" }}>
          <h1>Past Events</h1>
        </div>
        <div name="card">
          <Card>
            <Image
              src="https://www.themix.net/wp-content/uploads/2020/05/2020.05.23-04.16-themixnet-5ec94c67dae3f-600x873.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>UFC Fight Night</Card.Header>
              <Card.Meta>
                <span className="date">May 30th 2020</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

export default Event;
/*

if (!!this.props.events == true) {
    console.log(this.props.events[0]);
  } else {
    console.log("Testing");
  }

*/
