import React, { Component } from 'react';
import {connect} from 'react-redux';

import Row from './Row';
import { initialize } from '../actions/GameActions';

export class Board extends Component {
  initializeBoard() {
    this.props.init();
  }

  render() {
    return (<div>
        <table className='board'>
          <tbody>
            {this.props.board.map((row, idx) => <Row key={idx} row={row} rowCount={idx} />)}
          </tbody>            
        </table>
      </div>);
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
