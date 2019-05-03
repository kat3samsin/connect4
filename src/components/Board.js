import React, { Component } from 'react';
import Row from './Row';

class Board extends Component {
  render() {
    return (
      <div>
        <table className="board">
          <tbody>
            {this.props.board.map((row, idx) => (
              <Row key={idx} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Board;
