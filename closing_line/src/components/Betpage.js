import React, { Component } from "react";
import { Input, Label, Form, Menu, Table } from "semantic-ui-react";

export class Betpage extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      fight: "",
      fighter: "",
      odds: "",
    };
  }
  // If this.state.fighter == Fighter B // Then return 2nd element of the array
  // else return 1st element of the array

  // use square brackets below
  handleChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    this.setState(
      {
        [event.target.name]: event.target.value,
      }
      // () => {
      //   console.log(this.state);
      // }
    );
  };

  handleNewSubmit = (event) => {
    event.preventDefault();
    // if (this.state.submit === false) {
    //   this.setState({
    //     submit: true,
    //   });
    // }
    this.renderOdds();
    this.renderFighters();
    this.renderBets();

    // console.log(this.state);
    // console.log(this.state.fight);
  };

  /// Render Functions

  renderFights = () => {
    return this.props.fights.map((fight) => (
      <option>{`${fight.competitor_one} vs ${fight.competitor_two}`}</option>
    ));
  };

  renderRow = (bet) => {
    // go back to serializers and include fighters name in bet object
    console.log(bet);
    return (
      <Table.Row>
        <Table.Cell>{bet.bet_type}</Table.Cell>
        <Table.Cell>Fighter 1</Table.Cell>
        <Table.Cell>Fighter 2</Table.Cell>
        <Table.Cell>{bet.odds}</Table.Cell>
        <Table.Cell>{bet.amount}</Table.Cell>
      </Table.Row>
    );
  };

  render() {
    //console.log(this.props.bets);
    return (
      <div>
        <div>
          <h1>Enter your bet to track</h1>
          <Form
            onSubmit={() => {
              this.props.handleBetSubmit(this.state);
            }}
          >
            <Form.Group widths="equal">
              <Form.Field
                label="Select Fight"
                control="select"
                value={this.state.fight}
                onChange={this.handleChange}
                name="fight"
              >
                {this.renderFights()}
              </Form.Field>
              <Form.Field
                label="Select Fighter"
                control="select"
                value={this.state.fighter}
                onChange={this.handleChange}
                name="fighter"
              >
                <option value="Fighter A">Fighter A</option>
                <option value="Fighter B">Fighter B</option>
              </Form.Field>
            </Form.Group>
            <Form.Group grouped>
              <label>Bet Type</label>
              <Form.Field
                label="Straight"
                control="input"
                type="radio"
                name="htmlRadios"
                // value=
                // onChange={this.handleNewChange}
              />
              <Input
                labelPosition="right"
                type="text"
                placeholder="Odds"
                name="odds"
                value={this.state.odds}
                onChange={this.handleChange}
              >
                <input />
              </Input>
              <Input
                labelPosition="right"
                type="text"
                placeholder="Bet Amount"
                name="value"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <input />
                <Label>units</Label>
              </Input>
            </Form.Group>
            <Form.Field control="button">Submit Bet</Form.Field>
          </Form>
        </div>

        <div id="bettable">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Bet Type</Table.HeaderCell>
                <Table.HeaderCell>Fighter</Table.HeaderCell>
                <Table.HeaderCell>Opponent</Table.HeaderCell>
                <Table.HeaderCell>Odds</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.props.bets.map((bet) => this.renderRow(bet))}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default Betpage;

// Form will need a onSubmit at some point.
