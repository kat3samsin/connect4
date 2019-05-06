import React, { Component } from 'react';
import { connect } from 'react-redux';

import { movePlayer, removePlayer, checkWinner } from '../actions/GameActions';

export class Cell extends Component {
  handleClick = args => {
    if (this.props.winner) {
      return;
    }
    if (!this.props.value) {
      this.props.move(args);
    } else {
      this.props.remove(args);
    }
  };

  render() {
    return (
      <td
        className={
          this.props.player === 1 ? 'board-td p1-td' : 'board-td p2-td'
        }
      >
        <div
          className={
            this.props.value === 1
              ? 'player1'
              : this.props.value === 2
              ? 'player2'
              : 'init'
          }
          onClick={this.handleClick.bind(this, {
            rows: this.props.rows,
            col: this.props.col,
            player: this.props.player,
            board: this.props.board,
            cellsToWin: this.props.cellsToWin
          })}
        />
      </td>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    move: args => {
      dispatch(movePlayer(args));
      dispatch(checkWinner(args));
    },
    remove: args => {
      dispatch(removePlayer(args));
      dispatch(checkWinner(args));
    }
  };
}
const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
