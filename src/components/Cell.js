import React, {Component} from 'react';
import {connect} from 'react-redux';

import { movePlayer, checkWinner } from '../actions/GameActions'

export class Cell extends Component {
  handleClick = (args) => {
    if (!this.props.winner) {
      this.props.move(args);
    }
  };

  render() {
    return (
      <td className={this.props.player === 1 ? 'board-td p1-td' : 'board-td p2-td'}>
        <div 
          className={this.props.value === 1 ? 'player1' : 
                    this.props.value === 2 ? 'player2' : 'init'}
          onClick={this.handleClick.bind(this, {
            row: this.props.row, 
            col: this.props.col
          })}>
        </div>
      </td>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    move: pos => {
      dispatch(movePlayer(pos));
      dispatch(checkWinner());
    }
  }
}
const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps, mapDispatchToProps)(Cell);
