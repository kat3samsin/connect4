import React, { Component } from 'react';
import {connect} from 'react-redux';

import Cell from './Cell';

export class Row extends Component {
  render() {
    return (
      <tr>
          {this.props.row.map((val, idx) => <Cell key={idx} value={val} col={idx} />)}
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps)(Row);
