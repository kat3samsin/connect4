import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  let component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
