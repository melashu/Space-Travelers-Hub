import "@testing-library/jest-dom";
import Header from "../../Compontes/Header/Header";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

const header = () => {
  <Provider store={store}>
    <Header />
  </Provider>;
};

describe("Should Header render correctly", () => {
  it("Test Header Componenet", () => {
    const component = renderer.create(<header />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
