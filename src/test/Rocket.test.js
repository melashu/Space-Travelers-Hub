import React from 'react';
import { Provider } from 'react-redux';
import store from '../Store/Store';
import Rocket from '../Components/Rocket/Rocket';

const TestRenderer = require('react-test-renderer');

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

describe('Rockets Component', () => {
  it('renders rockets', () => {
    const allRockets = TestRenderer.create(<RocketsProvider />).toJSON();
    expect(allRockets).toMatchSnapshot();
  });
});
