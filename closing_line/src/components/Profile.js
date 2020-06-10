import React, { Component } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

export class Profile extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Profile Here</h3>
        </div>

        <div>
          <h2>This weeks bets (Profile Page only)</h2>
          <div name="this_week">
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
                <Table.Row>
                  <Table.Cell>Straight</Table.Cell>
                  <Table.Cell>Matt Frevola</Table.Cell>
                  <Table.Cell>Frank Camacho</Table.Cell>
                  <Table.Cell>+115</Table.Cell>
                  <Table.Cell>$200</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="5">
                    <Menu floated="right" pagination>
                      <Menu.Item as="a" icon>
                        <Icon name="chevron left" />
                      </Menu.Item>
                      <Menu.Item as="a">1</Menu.Item>
                      <Menu.Item as="a">2</Menu.Item>
                      <Menu.Item as="a">3</Menu.Item>
                      <Menu.Item as="a">4</Menu.Item>
                      <Menu.Item as="a" icon>
                        <Icon name="chevron right" />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </div>
        </div>

        <div>
          <h2>Past bets</h2>
          <div name="past_week">
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
                <Table.Row>
                  <Table.Cell>Straight</Table.Cell>
                  <Table.Cell>Matt Frevola</Table.Cell>
                  <Table.Cell>Frank Camacho</Table.Cell>
                  <Table.Cell>+115</Table.Cell>
                  <Table.Cell>$200</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="5">
                    <Menu floated="right" pagination>
                      <Menu.Item as="a" icon>
                        <Icon name="chevron left" />
                      </Menu.Item>
                      <Menu.Item as="a">1</Menu.Item>
                      <Menu.Item as="a">2</Menu.Item>
                      <Menu.Item as="a">3</Menu.Item>
                      <Menu.Item as="a">4</Menu.Item>
                      <Menu.Item as="a" icon>
                        <Icon name="chevron right" />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
