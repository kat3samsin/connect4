import React, {Component} from 'react';

import Game from './components/Game';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <div>
          <h1 className='title'>Connect 4</h1>
          <p>A classic game created using ReactJS<br/>
          First player to connect 4 wins</p>
        </div>
        <Game />
      </div>
    );
  }
}

export default App;
