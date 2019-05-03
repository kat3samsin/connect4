import React, { Component } from 'react';
import Cell from './Cell';

export default class Row extends Component {
  render() {
    return (
      <tr>
        {this.props.row.map((val, idx) => (
          <Cell key={idx} value={val} col={idx} />
        ))}
      </tr>
    );
  }
}
