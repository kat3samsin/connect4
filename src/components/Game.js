import React, {Component} from 'react';
import {connect} from 'react-redux';

import Board from './Board'

export class Game extends Component {
  render() {
    return (
      <div>
        {this.props.winner ? <h3>Player {this.props.winner} wins!</h3> : 
          <div className='status'>Player {this.props.player} turn!</div>}
        
        {/* TODO: add color */}
        <Board />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps)(Game);
