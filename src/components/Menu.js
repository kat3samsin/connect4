import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Menu extends Component {
  render() {
    return (
      <div>
        <button className='btn'>New Game</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps)(Menu);
