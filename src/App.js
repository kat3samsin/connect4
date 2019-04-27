import React, {Component} from 'react';

import Game from './components/Game';
// import Menu from './components/Menu';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='title'>Connect 4</div>
        {/* <Menu /> */}
        <Game />
      </div>
    );
  }
}

export default App;
