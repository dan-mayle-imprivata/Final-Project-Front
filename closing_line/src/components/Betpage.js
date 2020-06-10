import React, { Component } from "react";
import { Form } from "semantic-ui-react";
export class Betpage extends Component {
  renderEvents = () => {
    return this.props.events.map((event) => <option>{event.name}</option>);
  };

  render() {
    // console.log(this.renderEvents());
    // need a loop for option
    return (
      <div>
        <h1>{}</h1>
        <Form>
          <Form.Group widths="equal">
            <Form.Field label="Select Fight" control="select">
              {this.renderEvents()}
            </Form.Field>
            <Form.Field label="Select Fighter" control="select">
              <option value="Fighter1">Fighter1</option>
              <option value="Fighter2">Fighter2</option>
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <label>Bet Type</label>
            <Form.Field
              label="Straight"
              control="input"
              type="radio"
              name="htmlRadios"
            />
            <Form.Field
              label="Parlay"
              control="input"
              type="radio"
              name="htmlRadios"
            />
          </Form.Group>
          <Form.Field control="button">Submit Bet</Form.Field>
        </Form>
        <div>{}</div>
      </div>
    );
  }
}

export default Betpage;

// Form will need a onSubmit at some point.
