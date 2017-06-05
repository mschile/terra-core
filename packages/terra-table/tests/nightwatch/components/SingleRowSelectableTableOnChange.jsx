import React from 'react';
import Table from '../../../lib/Table';

class SingleRowSelectableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: null };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    return (
      <div>
        <div id="selected-index">
          <h3>Selected Item: {this.state.selectedIndex}</h3>
        </div>
        <Table isStriped={false}>
          <Table.Header>
            <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
            <Table.HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
            <Table.HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
          </Table.Header>
          <Table.SingleSelectableRows onChange={this.handleSelection}>
            <Table.Row isSelectable key="PERSON_0">
              <Table.Cell content="John Smith" key="NAME" />
              <Table.Cell content="123 Adams Drive" key="ADDRESS" />
              <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
            </Table.Row>
            <Table.Row isSelectable key="PERSON_1">
              <Table.Cell content="Jane Smith" key="NAME" />
              <Table.Cell content="321 Drive Street" key="ADDRESS" />
              <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
            </Table.Row>
            <Table.Row isSelectable key="PERSON_2">
              <Table.Cell content="Dave Smith" key="NAME" />
              <Table.Cell content="213 Raymond Road" key="ADDRESS" />
              <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
            </Table.Row>
          </Table.SingleSelectableRows>
        </Table>
      </div>
    );
  }
}

export default SingleRowSelectableTable;