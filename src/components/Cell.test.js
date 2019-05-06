import React from 'react';
import { shallow } from 'enzyme';
import { Cell } from './Cell';

describe('Cell', () => {
  it('renders without crashing', () => {
    let wrapper = shallow(<Cell player={1} value={0} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('renders td', () => {
    it('value is 1 > hasClass p1-td', () => {
      let wrapper = shallow(<Cell player={1} value={0} />);
      expect(wrapper.find('td').hasClass('board-td p1-td')).toEqual(true);
    });

    it('value is 2 > hasClass > p1-td', () => {
      let wrapper = shallow(<Cell player={2} value={0} />);
      expect(wrapper.find('td').hasClass('board-td p2-td')).toEqual(true);
    });
  });

  describe('renders div', () => {
    it('value is 1 > hasClass > player1', () => {
      let wrapper = shallow(<Cell player={1} value={1} />);
      expect(wrapper.find('div').hasClass('player1')).toEqual(true);
    });

    it('value is 2 > hasClass > player2', () => {
      let wrapper = shallow(<Cell player={2} value={2} />);
      expect(wrapper.find('div').hasClass('player2')).toEqual(true);
    });

    it('value is 0 > hasClass > init', () => {
      let wrapper = shallow(<Cell player={1} value={0} />);
      expect(wrapper.find('div').hasClass('init')).toEqual(true);
    });
  });

  describe('simulate div click', () => {
    let moveFn, removeFn;

    beforeEach(() => {
      moveFn = jest.fn();
      removeFn = jest.fn();
    });

    afterEach(() => {
      moveFn.mockReset();
    });

    it('col is 1 > should bind col=1', () => {
      let wrapper = shallow(
        <Cell player={1} value={0} col={1} move={moveFn} remove={removeFn}/>
      );
      wrapper.find('div').simulate('click');
      expect(moveFn).toBeCalledWith({
        board: undefined,
        cellsToWin: undefined,
        col: 1,
        player: 1,
        rows: undefined
      });
    });

    it('col is 3 > should bind col=3', () => {
      let wrapper = shallow(
        <Cell player={1} value={0} col={3} move={moveFn} remove={removeFn}/>
      );
      wrapper.find('div').simulate('click');
      expect(moveFn).toBeCalledWith({
        board: undefined,
        cellsToWin: undefined,
        col: 3,
        player: 1,
        rows: undefined
      });
    });
  });
});
