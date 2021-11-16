import React from "react";
import App from "./App";
import { shallow } from "enzyme";

let component;

beforeEach(() => {
  component = shallow(<App />);
});

it("renders without crashing", () => {
  expect(component.text()).toEqual(
    "Welcome to React Bookstore<ProductList /><Cart />"
  );
});
