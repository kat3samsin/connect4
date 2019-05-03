import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import { initialize } from '../actions/GameActions';

export class Game extends Component {
  initializeBoard() {
    this.props.init();
  }
  render() {
    return (
      <div>
        <button className="btn" onClick={this.initializeBoard.bind(this)}>
          New Game
        </button>
        {this.props.board.length > 0 ? (
          <div>
            {this.props.winner ? (
              <h2>Game Over! Player {this.props.winner} wins!</h2>
            ) : (
              <h2>Player {this.props.player}</h2>
            )}
            <Board board={this.props.board} />
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
function mapDispatchToProps(dispatch) {
  return {
    init: () => {
      dispatch(initialize());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
