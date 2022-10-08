import "@testing-library/jest-dom";
import Profile from "../../Compontes/Profile";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";

const profile = () => {
  <Provider store={store}>
    <Profile />
  </Provider>;
};

describe("Should Header render correctly", () => {
  it("Test Profile Componenet", () => {
    const component = renderer.create(<profile />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("Test Profile Componenet", () => {
    const component = renderer.create(<profile />).toJSON();
    expect(component).toMatchInlineSnapshot(`<profile />`);
  });
});
