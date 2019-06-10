import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


test('render without error', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
});
