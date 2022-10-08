import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Mission from "../Mission";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

const mission = () => {
  <Provider store={store}>
    <Mission />
  </Provider>;
};

describe("Should mission render correctly", () => {
  it("Test Mission Componenet", () => {
    const component = renderer.create(<mission />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("Test Mission Componenet", () => {
    const component = renderer.create(<mission />).toJSON();
    expect(component).toMatchInlineSnapshot(`<mission />`);
  });
});
