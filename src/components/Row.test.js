import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';

describe('Row', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Row row={[0, 0, 0]} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders tr', () => {
    expect(wrapper.find('tr')).toHaveLength(1);
  });

  it('renders 3 rows', () => {
    //Issue in enzyme-adapter-react-16 #2107
    expect(wrapper.find('ConnectFunction')).toHaveLength(3);
  });
});
