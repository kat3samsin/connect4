import React, { Component } from 'react';
import {connect} from 'react-redux';
import Row  from './Row';

export class Board extends Component {
  render() {
    return (<div>
        <table className='board'>
          <tbody>
            {this.props.board.map((row, idx) => <Row key={idx} row={row} />)}
          </tbody>            
        </table>
      </div>);
  }
}

const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps)(Board);
