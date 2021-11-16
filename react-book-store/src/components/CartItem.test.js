import React from "react";
import CartItem from "./CartItem";
import { shallow } from "enzyme";

let component;

beforeEach(() => {
  component = shallow(<CartItem title="test book" price="6" />);
});

it("renders without crashing", () => {
  expect(component.text()).toEqual("test book - 6");
});
