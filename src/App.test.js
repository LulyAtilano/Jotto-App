import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzyemAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzyemAdapter() });

test('render without error', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
});
