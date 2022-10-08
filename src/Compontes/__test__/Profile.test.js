import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../Store/Store';
import Profile from '../Profile';

const ProfileProvider = () => {
  <Provider store={store}>
    <Profile />
  </Provider>;
};

describe('Should Header render correctly', () => {
  it('Test Profile Componenet', () => {
    const component = renderer.create(<ProfileProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
