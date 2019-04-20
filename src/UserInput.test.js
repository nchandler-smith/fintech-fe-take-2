import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("user input", () => {
    it('should update the card holder state data when the user updates the fields', () => {
        const page = mount(<App/>);
        const cardHolderInput = page.find('#cardHolderName');

        cardHolderInput.simulate('change', {target: {value: 'Jonathan Dough'}})

        const pageData = page.instance()
        expect(pageData.state.cardHolderName).toEqual("Jonathan Dough")
    })
})