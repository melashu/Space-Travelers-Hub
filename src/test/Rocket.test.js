import React from 'react';
import { Provider } from 'react-redux';
import store from '../Store/Store'
import Rocket from '../Components/Rocket/Rocket';
import '@testing-library/jest-dom/extend-expect';

const TestRenderer = require('react-test-renderer'); // ES5 with npm

const RocketsProvider = () => (
  <Provider store={store}>
    <Rocket />
  </Provider>
);

describe('Check Homepage', () => {
  it('renders correctly', () => {
    const component = TestRenderer.create(<RocketsProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
