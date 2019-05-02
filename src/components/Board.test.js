import React from 'react';
import { shallow } from 'enzyme';
import { Board } from './Board';

describe('Board', () => {
  let wrapper;

   beforeEach(() => {
     wrapper = shallow(<Board board={[[0, 0, 0], [0, 0, 0], [0, 0, 0]]} />);
   });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a div and table', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('table')).toHaveLength(1);
    expect(wrapper.find('tbody')).toHaveLength(1);
  });

  it('renders 3 rows', () => {
    expect(wrapper.find('Row')).toHaveLength(3);
  });
});