import React, {Component} from 'react';
import {connect} from 'react-redux';

import { movePlayer, checkWinner } from '../actions/GameActions'

export class Circle extends Component {
  handleClick = (args) => {
    this.props.move(args);
  };
  componentDidMount = () => {
    // this.props.checkWinner();
  }
  render() {
    return (
      <td>
        {/* TODO: check for color */}
        <div 
          className={this.props.value === 1 ? 'player1' : 
          this.props.value === 2 ? 'player2' : 'discEmpty'}
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
    },
    checkWinner: () => {
      
    }
  }
}
const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps, mapDispatchToProps)(Circle);
