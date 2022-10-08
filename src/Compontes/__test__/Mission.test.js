import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Mission from '../Mission';
import store from '../../Store/Store';

const MissionP = () => {
  <Provider store={store}>
    <Mission />
  </Provider>;
};

describe('Should mission render correctly', () => {
  it('Test Mission Componenet', () => {
    const component = renderer.create(<MissionP />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
