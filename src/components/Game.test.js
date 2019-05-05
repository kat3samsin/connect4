import React from 'react';
import { shallow } from 'enzyme';
import { Game } from './Game';

describe('Game', () => {
  let wrapper;
  let initFn;

  beforeEach(() => {
    initFn = jest.fn();
    wrapper = shallow(
      <Game
        board={[[0, 0, 0], [0, 0, 0], [0, 0, 0]]}
        init={initFn}
        player={1}
      />
    );
  });

  afterEach(() => {
    initFn.mockReset();
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('clicks new game', () => {
    wrapper.find('button').simulate('click');
    expect(initFn).toBeCalled();
  });

  it('renders a Board', () => {
    expect(wrapper.find('Board')).toHaveLength(1);
  });

  it('has winner > should display > Game Over! Player 2 wins', () => {
    wrapper = shallow(
      <Game
        board={[[0, 0, 0], [0, 0, 0], [0, 0, 0]]}
        init={initFn}
        winner={2}
      />
    );
    expect(wrapper.find('h2').text()).toEqual('Game Over! Player 2 wins!');
  });

  it('no winners yet > should display > Player 1', () => {
    wrapper = shallow(
      <Game
        board={[[0, 0, 0], [0, 0, 0], [0, 0, 0]]}
        init={initFn}
        player={1}
      />
    );
    expect(wrapper.find('h2').text()).toEqual('Player 1');
  });
});
