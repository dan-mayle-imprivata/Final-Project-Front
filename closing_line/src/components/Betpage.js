import React, { Component } from "react";
import { Input, Label, Form, Menu, Table } from "semantic-ui-react";

export class Betpage extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      fight_id: "",
      fighter: "",
      odds: "",
      bet_type: "",
    };
  }
  // If this.state.fighter == Fighter B // Then return 2nd element of the array
  // else return 1st element of the array

  // use square brackets below
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState(
      {
        [event.target.name]: parseInt(event.target.value, 10),
      },
      () => {
        console.log(this.state);
      }
    );
  };
  // handleNewSubmit = (event) => {
  //   event.preventDefault();

  //   this.renderOdds();
  //   this.renderFighters();
  //   this.renderBets();

  //   // POST fetch to save
  //   // PATCH fetch to update
  // };

  /// Render Functions

  renderFights = () => {
    return this.props.fights.map((fight) => {
      return (
        <option
          value={fight.id}
        >{`${fight.competitor_one} vs ${fight.competitor_two}`}</option>
      );
    });
  };

  // renderRow = (bet) => {
  //   // go back to serializers and include fighters name in bet object
  //   console.log(bet);

  //   return (
  //     <Table.Row>
  //       <Table.Cell>{bet.bet_type}</Table.Cell>
  //       <Table.Cell>Fighter 1</Table.Cell>
  //       <Table.Cell>Fighter 2</Table.Cell>
  //       <Table.Cell>{bet.odds}</Table.Cell>
  //       <Table.Cell>{bet.amount}</Table.Cell>
  //     </Table.Row>
  //   );
  // };
  // onClick={this.renderFights}
  render() {
    // console.log(this.props.bets);
    // console.log(this.handleChange);

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
                name="fight_id"
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
                name="bet_type"
                value={this.state.bet_type}
                onChange={this.handleChange}
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
                name="amount"
                value={this.state.amount}
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
              {/* {this.props.bets.map((bet) => this.renderRow(bet))} */}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default Betpage;

// if (typeof (parseInt(event.target.value, 10) === "number")) {
//   console.log("WTF");
//   this.setState(
//     {
//       [event.target.name]: event.target.value,
//     },
//     () => {
//       console.log(this.state);
//     }
//   );
// } else {
//   console.log("SMH");
//   this.setState(
//     {
//       [event.target.name]: parseInt(event.target.value, 10),
//     },
//     () => {
//       console.log(this.state);
//     }
//   );
// }
