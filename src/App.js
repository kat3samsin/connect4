import React, {Component} from 'react';
import Game from './components/Game';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Connect 4</h1>
        <Game />
      </div>
    );
  }
}

export default App;
