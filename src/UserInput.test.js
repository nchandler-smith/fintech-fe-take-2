import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("user input", () => {
    it('should clear the state data when the user presses submit', () => {
        expect(1).toEqual(2)
    })
})