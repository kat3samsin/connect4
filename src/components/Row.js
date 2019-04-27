import React, { Component } from 'react';
import {connect} from 'react-redux';

import Circle from './Circle';

export class Row extends Component {
  render() {
    return (
      <tr>
          {this.props.row.map((val, idx) => <Circle key={idx} value={val} row={this.props.rowCount} col={idx} />)}
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps)(Row);
