import React, { Component } from 'react';
import {connect} from 'react-redux';

import Row from './Row';
import { initialize } from '../actions/GameActions';

export class Board extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <div>
          <table>
            <tbody>
              {this.props.board.map((row, idx) => <Row key={idx} row={row} rowCount={idx} />)}
            </tbody>            
          </table>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    init: () => {
      dispatch(initialize())
    }
  }
}
const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps, mapDispatchToProps)(Board);
