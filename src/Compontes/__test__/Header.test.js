import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../Store/Store';
import Header from '../Header/Header';

const HeaderProvider = () => {
  <Provider store={store}>
    <Header />
  </Provider>;
};

describe('Should Header render correctly', () => {
  it('Test Header Componenet', () => {
    const component = renderer.create(<HeaderProvider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
